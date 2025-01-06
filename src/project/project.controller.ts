import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Project } from './entities/project.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Projects')
@ApiBearerAuth()
@Controller('project')
@UseGuards(JwtAuthGuard)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Criar um novo projeto' })
  @ApiResponse({ status: 201, description: 'Projeto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição mal formada ou erro nos dados.' })
  async create(
    @UploadedFile('file') file: Express.Multer.File,
    @Body() createProjectDto: CreateProjectDto
  ): Promise<void> {
    await this.projectService.create(createProjectDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Obter todos os projetos' })
  @ApiResponse({ status: 200, description: 'Lista de projetos obtida com sucesso.', type: [Project] })
  @ApiResponse({ status: 404, description: 'Nenhum projeto encontrado.' })
  async findAll() {
    return this.projectService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um projeto pelo ID' })
  @ApiResponse({ status: 200, description: 'Projeto excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Projeto não encontrado.' })
  async remove(@Param('id') id: number): Promise<void> {
    await this.projectService.remove(id);
  }
}
