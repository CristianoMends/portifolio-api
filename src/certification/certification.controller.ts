import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { CertificationService } from './certification.service';

@Controller('certification')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Post()
  create(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationService.create(createCertificationDto);
  }

  @Get()
  findAll() {
    return this.certificationService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificationService.remove(+id);
  }
}
