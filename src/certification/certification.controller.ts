<<<<<<< HEAD
import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { CertificationService } from './certification.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { IpDomainOrTokenGuard } from '../auth/origin-check.middleware';

@ApiTags('Certification')
@Controller('certification')
@ApiBearerAuth()
@UseGuards(IpDomainOrTokenGuard) 
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) { }

  @Post()
  @ApiOperation({
    summary: 'Criar uma nova certificação',
    description: 'Cria uma certificação fornecendo o nome, a imagem e o link associados à certificação.',
  })
  @ApiBody({
    description: 'Dados da certificação a ser criada',
    type: CreateCertificationDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Certificação criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar a certificação',
  })
=======
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { CertificationService } from './certification.service';

@Controller('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Post()
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.create(createCertificationDto);
  }

  @Get()
<<<<<<< HEAD
  @ApiOperation({
    summary: 'Obter todas as certificações',
    description: 'Recupera a lista de todas as certificações cadastradas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de certificações',
    type: [CreateCertificationDto],
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  findAll() {
    return this.certificationService.findAll();
  }

  @Delete(':id')
<<<<<<< HEAD
  @ApiOperation({
    summary: 'Deletar certificação',
    description: 'Deleta a certificação com o ID fornecido.',
  })
  @ApiResponse({
    status: 200,
    description: 'Certificação deletada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Certificação não encontrada',
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  remove(@Param('id') id: string) {
    return this.certificationService.remove(+id);
  }
}
