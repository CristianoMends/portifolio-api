import { Module } from '@nestjs/common';
import { HardSkillService } from './hard-skill.service';
import { HardSkillController } from './hard-skill.controller';
import { HardSkill } from './entities/hard-skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([HardSkill])], 
  controllers: [HardSkillController],
  providers: [HardSkillService],
})
export class HardSkillModule {}
