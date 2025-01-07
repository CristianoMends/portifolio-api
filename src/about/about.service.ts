<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
=======
import { Injectable, NotFoundException } from '@nestjs/common';
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
import { CreateAboutDto } from './dto/create-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
<<<<<<< HEAD
import { BusinessException } from '../exception/business-exception';
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About) private repo: Repository<About>
<<<<<<< HEAD
  ) { }

  async create(createAboutDto: CreateAboutDto) {
    try {
      const about = this.repo.create(createAboutDto);
      await this.repo.save(about);
    } catch (error) {
      throw new BusinessException('CREATE_ERROR', 'Erro ao criar o registro About');
    }
  }

  async findAll() {
    try {
      return await this.repo.find();
    } catch (error) {
      throw new BusinessException('FIND_ALL_ERROR', 'Erro ao buscar os registros About');
    }
  }

  async findOne(id: number): Promise<About> {
    try {
      const about = await this.repo.findOne({
        where: {
          id: id,
        },
      });

      if (!about) {
        throw new BusinessException('NOT_FOUND', 'About não encontrado');
      }

      return about;
    } catch (error) {
      throw new BusinessException('FIND_ONE_ERROR', 'Erro ao buscar o registro About');
    }
  }

  async remove(id: number) {
    try {
      const about = await this.repo.findOne({
        where: {
          id: id,
        },
      });

      if (!about) {
        throw new BusinessException('NOT_FOUND', 'About não encontrado');
      }

      await this.repo.delete(id);
    } catch (error) {
      throw new BusinessException('REMOVE_ERROR', 'Erro ao remover o registro About');
    }
=======
  ) {

  }

  async create(createAboutDto: CreateAboutDto) {
    const about = this.repo.create(createAboutDto);
    return await this.repo.save(about);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<About> {
    return await this.repo.findOne({
      where: {
        id: id
      }
    })
  }

  remove(id: number) {
    const about = this.repo.findOne({
      where: {
        id: id
      }
    })

    if (!about) {
      throw new NotFoundException('About not found');
    }
    this.repo.delete(id);
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  }
}
