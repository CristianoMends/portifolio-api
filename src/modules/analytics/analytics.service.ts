import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Analytics } from './entities/analytics.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Analytics) private repo: Repository<Analytics>
  ) { }

  async create(createAnalyticsDto: CreateAnalyticsDto) {
    const analytics = this.repo.create(createAnalyticsDto);
    analytics.accessDate = new Date();
    await this.repo.save(analytics);
  }

  async findAll(): Promise<Analytics[]> {
    return await this.repo.find();
  }

  async findCount(): Promise<number> {
    return (await this.repo.find()).length;
  }
}
