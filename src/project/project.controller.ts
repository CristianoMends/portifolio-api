<<<<<<< HEAD
import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Project } from './entities/project.entity';
import { IpDomainOrTokenGuard } from '../auth/origin-check.middleware';

@ApiTags('Projects')
@ApiBearerAuth()
@Controller('project')
@UseGuards(IpDomainOrTokenGuard) 
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Criar um novo projeto' })
  @ApiResponse({ status: 201, description: 'Projeto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição mal formada ou erro nos dados.' })
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  async create(
    @UploadedFile('file') file: Express.Multer.File,
    @Body() createProjectDto: CreateProjectDto
  ): Promise<void> {
    await this.projectService.create(createProjectDto, file);
  }

  @Get()
<<<<<<< HEAD
  @ApiOperation({ summary: 'Obter todos os projetos' })
  @ApiResponse({ status: 200, description: 'Lista de projetos obtida com sucesso.', type: [Project] })
  @ApiResponse({ status: 404, description: 'Nenhum projeto encontrado.' })
  async findAll() {
=======
  findAll() {
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
    return this.projectService.findAll();
  }

  @Delete(':id')
<<<<<<< HEAD
  @ApiOperation({ summary: 'Excluir um projeto pelo ID' })
  @ApiResponse({ status: 200, description: 'Projeto excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Projeto não encontrado.' })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  async remove(@Param('id') id: number): Promise<void> {
    await this.projectService.remove(id);
  }
}
