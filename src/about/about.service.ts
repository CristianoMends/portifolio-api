import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';
import { BusinessException } from '../exception/business-exception';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About) private repo: Repository<About>
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
  }
}
