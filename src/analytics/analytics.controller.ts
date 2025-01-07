<<<<<<< HEAD
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { Analytics } from './entities/analytics.entity';
import { IpDomainOrTokenGuard } from '../auth/origin-check.middleware';

@ApiTags('Analytics')
@Controller('analytics')
@ApiBearerAuth()
@UseGuards(IpDomainOrTokenGuard) 
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um novo registro de Analytics',
    description: 'Recebe informações sobre o acesso e cria um novo registro',
  })
  @ApiBody({
    type: CreateAnalyticsDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Analytics criado com sucesso',
    type: Analytics,
  })
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) { }

  @Post()
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  create(@Body() createAnalyticsDto: CreateAnalyticsDto) {
    return this.analyticsService.create(createAnalyticsDto);
  }

  @Get()
<<<<<<< HEAD
  @ApiOperation({
    summary: 'Retorna todos os registros de Analytics',
    description: 'Retorna uma lista de todos os registros de Analytics.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de Analytics',
    type: [Analytics],
  })
  findAll() {
    return this.analyticsService.findAll();
  }

  @Get('/count')
  @ApiOperation({
    summary: 'Retorna a contagem de registros de Analytics',
    description: 'Retorna a quantidade total de registros de Analytics.',
  })
  @ApiResponse({
    status: 200,
    description: 'Quantidade total de registros',
    type: Number,
  })
=======
  findAll() {
    return this.analyticsService.findAll();
  }
  @Get('/count')
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  async findCount(): Promise<number> {
    return await this.analyticsService.findCount();
  }
}
