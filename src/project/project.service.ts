import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { put } from '@vercel/blob';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) { }

  async create(createProjectDto: CreateProjectDto, image: Express.Multer.File): Promise<Project> {
    if (!image.mimetype.startsWith('image/')) {
      throw new HttpException('Invalid file type. Only images are allowed.', HttpStatus.BAD_REQUEST);
    }

    const maxSize = 3 * 1024 * 1024;
    if (image.size > maxSize) {
      throw new HttpException('File too large. Maximum size is 3MB.', HttpStatus.BAD_REQUEST);
    }

    const project = this.projectRepository.create(createProjectDto);

    const blob = await put(`${project.id}`, image.buffer, {
      access: 'public',
      addRandomSuffix: false
    });

    project.image = blob.url;
    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async remove(id: number): Promise<void> {
    const project = await this.projectRepository.find({
      where: {
        id: id
      }
    });

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    await this.projectRepository.remove(project);
  }
}




