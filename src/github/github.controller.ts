import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { GithubService } from './github.service';
import { ViewRepoDto } from './dto/view-repo.dto'; // Supondo que você tenha importado a classe ViewRepoDto
import { IpDomainOrTokenGuard } from 'src/auth/origin-check.middleware';

@ApiTags('Github')
@Controller('github')
@ApiBearerAuth()
@UseGuards(IpDomainOrTokenGuard) 
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
  async getRepos(
    @Query('sortBy') sortBy: string = 'created',        
    @Query('direction') direction: string = 'desc',     
    @Query('limit') limit: number = 10,                 
    @Query('type') type: string = 'all',                 
    @Query('page') page: number = 1,                    
    @Query('per_page') perPage: number = 30             
  ) {
    return this.githubService.getRepos(sortBy, direction, limit, type, page, perPage);
  }
}
