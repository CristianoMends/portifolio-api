import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GithubService } from './github.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ViewRepoDto } from './dto/view-repo.dto'; // Supondo que você tenha importado a classe ViewRepoDto

@ApiTags('Github')
@Controller('github')
@UseGuards(JwtAuthGuard)
export class GithubController {
  constructor(private readonly githubService: GithubService) { }

  @Get('repos')
  @ApiOperation({
    summary: 'Obter todos os repositórios do GitHub',
    description: 'Retorna uma lista de repositórios com informações detalhadas',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de repositórios',
    type: [ViewRepoDto],
  })
  async getRepos() {
    return this.githubService.getRepos();
  }
}
