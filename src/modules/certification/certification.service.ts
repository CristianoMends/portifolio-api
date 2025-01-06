import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certification } from './entities/certification.entity';
import { CreateCertificationDto } from './dto/create-certification.dto';

@Injectable()
export class CertificationService {
  constructor(
    @InjectRepository(Certification)
    private certificationsRepository: Repository<Certification>,
  ) { }

  async create(createCertificationDto: CreateCertificationDto) {
    const certification = this.certificationsRepository.create(createCertificationDto);
    await this.certificationsRepository.save(certification);
  }

  async findAll(): Promise<Certification[]> {
    return this.certificationsRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.certificationsRepository.delete(id);
  }
}
