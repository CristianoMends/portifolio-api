import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { HardSkillService } from './hard-skill.service';
import { CreateHardSkillDto } from './dto/create-hard-skill.dto';
import { IpDomainOrTokenGuard } from 'src/auth/origin-check.middleware';

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
  create(@Body() createHardSkillDto: CreateHardSkillDto) {
    return this.hardSkillService.create(createHardSkillDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obter todas as habilidades técnicas',
    description: 'Retorna uma lista de todas as habilidades técnicas registradas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de habilidades técnicas.',
    type: [CreateHardSkillDto],
  })
  findAll() {
    return this.hardSkillService.findAll();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remover uma habilidade técnica',
    description: 'Remove a habilidade técnica identificada pelo ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Habilidade técnica removida com sucesso.',
  })
  remove(@Param('id') id: string) {
    return this.hardSkillService.remove(+id);
  }
}
