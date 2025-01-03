import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About) private repo: Repository<About>
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
  }
}
