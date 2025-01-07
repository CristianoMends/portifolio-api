<<<<<<< HEAD
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { IpDomainOrTokenGuard } from '../auth/origin-check.middleware';

@Controller('about')
@UseGuards(IpDomainOrTokenGuard) 
@ApiBearerAuth()
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @ApiOperation({ summary: 'Criar uma nova entrada na seção "Sobre"' })
  @ApiResponse({ status: 201, description: 'Entrada criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  @ApiBody({ type: CreateAboutDto })
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

<<<<<<< HEAD
  @ApiOperation({ summary: 'Recuperar todas as entradas da seção "Sobre"' })
  @ApiResponse({ status: 200, description: 'Lista de entradas recuperada com sucesso.' })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

<<<<<<< HEAD
  @ApiOperation({ summary: 'Recuperar uma entrada específica da seção "Sobre" pelo ID' })
  @ApiResponse({ status: 200, description: 'Entrada recuperada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  @ApiParam({ name: 'id', type: Number, description: 'O ID da entrada que deseja recuperar' })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(+id);
  }

<<<<<<< HEAD
  @ApiOperation({ summary: 'Deletar uma entrada específica da seção "Sobre" pelo ID' })
  @ApiResponse({ status: 200, description: 'Entrada deletada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  @ApiParam({ name: 'id', type: Number, description: 'O ID da entrada que deseja deletar' })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutService.remove(+id);
  }
}
