import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHardSkillDto } from './dto/create-hard-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HardSkill } from './entities/hard-skill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HardSkillService {
  constructor(
    @InjectRepository(HardSkill)
    private skillsRepository: Repository<HardSkill>,
  ) { }

  async create(createSkillDto: CreateHardSkillDto){
    const skill = this.skillsRepository.create(createSkillDto);
    await this.skillsRepository.save(skill);
  }

  async findAll(): Promise<HardSkill[]> {
    return this.skillsRepository.find();
  }

  async remove(id: number): Promise<void> {

    const skill = this.skillsRepository.findOne({
      where: {
        id: id
      }
    });
    if(!skill){
      throw new NotFoundException('Skill Not found with id: '+id);
    }
    await this.skillsRepository.delete(id);
  }
}
