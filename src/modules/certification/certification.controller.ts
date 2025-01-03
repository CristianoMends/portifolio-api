import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { CertificationService } from './certification.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Certification')
@Controller('certification')
@UseGuards(JwtAuthGuard)
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
  create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.create(createCertificationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obter todas as certificações',
    description: 'Recupera a lista de todas as certificações cadastradas.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de certificações',
    type: [CreateCertificationDto],
  })
  findAll() {
    return this.certificationService.findAll();
  }

  @Delete(':id')
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
  remove(@Param('id') id: string) {
    return this.certificationService.remove(+id);
  }
}
