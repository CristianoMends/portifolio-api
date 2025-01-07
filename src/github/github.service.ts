import { Injectable, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { ViewRepoDto } from './dto/view-repo.dto';
import { BusinessException } from '../exception/business-exception';

@Injectable()
export class GithubService {
  private readonly githubApiUrl = 'https://api.github.com';
  private readonly token = process.env.GITHUB_TOKEN;
  private readonly username = process.env.GITHUB_USER;

  async getRepos(
    sortBy: string = 'created',
    direction: string = 'desc',
    limit: number = 100,
    type: string = 'all',
    page: number = 1,
    perPage: number = 30
  ): Promise<ViewRepoDto[]> {
    try {
      const response = await axios.get(`${this.githubApiUrl}/users/${this.username}/repos`, {
        headers: { Authorization: `Bearer ${this.token}` },
        params: {
          sort: sortBy,
          direction: direction,
          type: type,
          page: page,
          per_page: perPage
        },
      });

      const repos: ViewRepoDto[] = [];

      const promises = response.data.map(async (r) => {
        const collaborators = await axios.get(r.collaborators_url.replace('{/collaborator}', ''), {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        const commit = await axios.get(`${this.githubApiUrl}/repos/${this.username}/${r.name}/commits`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        const languages = await axios.get(`${r.languages_url}`, {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        const stars = await axios.get(`${r.stargazers_url}`, {
          headers: { Authorization: `Bearer ${this.token}` }
        })

        const langs: string[] = Object.keys(languages.data);

        const repoDto = new ViewRepoDto(r);

        repoDto.stars_count = stars.data.length;
        repoDto.languages = langs;

        repoDto.collaborators = collaborators.data.map((collaborator: any) => ({
          id: collaborator.id,
          login: collaborator.login,
          avatar_url: collaborator.avatar_url,
          html_url: collaborator.html_url,
        }));

        repoDto.commits_on_main = commit.data.length;

        if (repoDto.fork) {
          const originalOwner = await axios.get(`${r.url}`, {
            headers: { Authorization: `Bearer ${this.token}` },
          });

          repoDto.originalOwner = {
            id: originalOwner.data.parent.owner.id,
            avatar_url: originalOwner.data.parent.owner.avatar_url,
            html_url: originalOwner.data.parent.owner.html_url,
            login: originalOwner.data.parent.owner.login,
          };
        }

        repos.push(repoDto);
      });

      await Promise.all(promises);

      repos.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

      return repos.slice(0, limit);
    } catch (error) {
      this.handleApiError(error);
    }
  }

  private handleApiError(error: any): never {
    if (error.response?.status === 404) {
      throw new BusinessException('USER_NOT_FOUND', 'Usuário não encontrado no GitHub', HttpStatus.NOT_FOUND);
    }
    throw new BusinessException(
      'API_ACCESS_ERROR',
      `Erro ao acessar a API do GitHub: ${error.message}`,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
