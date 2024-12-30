import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HardSkillService } from './hard-skill.service';
import { CreateHardSkillDto } from './dto/create-hard-skill.dto';
import { UpdateHardSkillDto } from './dto/update-hard-skill.dto';

@Controller('skill')
export class HardSkillController {
  constructor(private readonly hardSkillService: HardSkillService) {}

  @Post()
  create(@Body() createHardSkillDto: CreateHardSkillDto) {
    return this.hardSkillService.create(createHardSkillDto);
  }

  @Get()
  findAll() {
    return this.hardSkillService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hardSkillService.remove(+id);
  }
}
