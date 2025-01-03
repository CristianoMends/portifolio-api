import { ApiProperty } from '@nestjs/swagger';

export class ViewRepoDto {
    @ApiProperty({
        description: 'ID do repositório',
        example: 1,
    })
    id: number;

    @ApiProperty({
        description: 'Nome do repositório',
        example: 'example-repo',
    })
    name: string;

    @ApiProperty({
        description: 'Número de commits na branch principal (main)',
        example: 15,
    })
    commits_on_main: number;

    @ApiProperty({
        description: 'URL do repositório no GitHub',
        example: 'https://github.com/user/example-repo',
    })
    html_url: string;

    @ApiProperty({
        description: 'Descrição do repositório',
        example: 'Este é um repositório de exemplo.',
    })
    description: string;

    @ApiProperty({
        description: 'Lista de colaboradores do repositório',
        type: [Object],
        example: [{
            id: 1,
            login: 'collaborator_user',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/collaborator_user'
        }]
    })
    collaborators: {
        id: number;
        login: string;
        avatar_url: string;
        html_url: string;
    }[];

    @ApiProperty({
        description: 'Proprietário original do repositório',
        type: Object,
        example: {
            id: 1,
            login: 'original_owner',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/original_owner'
        }
    })
    originalOwner: {
        id: number;
        login: string;
        avatar_url: string;
        html_url: string;
    };

    @ApiProperty({
        description: 'URL para obter informações sobre as linguagens usadas no repositório',
        example: 'https://api.github.com/repos/user/example-repo/languages',
    })
    languages_url: string;

    @ApiProperty({
        description: 'Data de criação do repositório',
        example: '2021-01-01T00:00:00Z',
    })
    created_at: string;

    @ApiProperty({
        description: 'Data da última atualização do repositório',
        example: '2021-01-02T00:00:00Z',
    })
    updated_at: string;

    @ApiProperty({
        description: 'Data do último push no repositório',
        example: '2021-01-02T00:00:00Z',
    })
    pushed_at: string;

    @ApiProperty({
        description: 'Linguagem principal do repositório',
        example: 'JavaScript',
    })
    language: string;

    @ApiProperty({
        description: 'Lista de tópicos relacionados ao repositório',
        example: ['javascript', 'nestjs'],
    })
    topics: string[];

    @ApiProperty({
        description: 'Visibilidade do repositório (público ou privado)',
        example: 'public',
    })
    visibility: string;

    @ApiProperty({
        description: 'Indica se o repositório é um fork',
        example: false,
    })
    fork: boolean;

    constructor(repo: any) {
        this.id = repo.id;
        this.name = repo.name;
        this.html_url = repo.html_url;
        this.description = repo.description || 'No description available';
        this.visibility = repo.visibility;
        this.created_at = repo.created_at;
        this.updated_at = repo.updated_at;
        this.fork = repo.fork;
        this.pushed_at = repo.pushed_at;
        this.language = repo.language;
        this.languages_url = repo.languages_url;
        this.topics = repo.topics;

        this.collaborators = repo.collaborators || [];
    }
}
