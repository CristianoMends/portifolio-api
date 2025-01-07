<<<<<<< HEAD
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { HardSkillService } from './hard-skill.service';
import { CreateHardSkillDto } from './dto/create-hard-skill.dto';
import { IpDomainOrTokenGuard } from '../auth/origin-check.middleware';

@ApiTags('HardSkills')
@Controller('skill')
@ApiBearerAuth()
@UseGuards(IpDomainOrTokenGuard) 
export class HardSkillController {
  constructor(private readonly hardSkillService: HardSkillService) { }

  @Post()
  @ApiOperation({
    summary: 'Criar uma nova habilidade técnica',
    description: 'Cria uma nova habilidade técnica e a salva no banco de dados.',
  })
  @ApiResponse({
    status: 201,
    description: 'Habilidade técnica criada com sucesso.',
    type: CreateHardSkillDto,
  })
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HardSkillService } from './hard-skill.service';
import { CreateHardSkillDto } from './dto/create-hard-skill.dto';
import { UpdateHardSkillDto } from './dto/update-hard-skill.dto';

@Controller('skill')
export class HardSkillController {
  constructor(private readonly hardSkillService: HardSkillService) {}

  @Post()
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  create(@Body() createHardSkillDto: CreateHardSkillDto) {
    return this.hardSkillService.create(createHardSkillDto);
  }

  @Get()
<<<<<<< HEAD
  @ApiOperation({
    summary: 'Obter todas as habilidades técnicas',
    description: 'Retorna uma lista de todas as habilidades técnicas registradas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de habilidades técnicas.',
    type: [CreateHardSkillDto],
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  findAll() {
    return this.hardSkillService.findAll();
  }

  @Delete(':id')
<<<<<<< HEAD
  @ApiOperation({
    summary: 'Remover uma habilidade técnica',
    description: 'Remove a habilidade técnica identificada pelo ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Habilidade técnica removida com sucesso.',
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  remove(@Param('id') id: string) {
    return this.hardSkillService.remove(+id);
  }
}
