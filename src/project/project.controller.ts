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
  async create(
    @UploadedFile('file') file: Express.Multer.File,
    @Body() createProjectDto: CreateProjectDto
  ): Promise<Project> {
    return this.projectService.create(createProjectDto, file);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.projectService.remove(id);
  }
}
