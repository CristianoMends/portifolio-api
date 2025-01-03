import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('about')
@UseGuards(JwtAuthGuard)
export class AboutController {
  constructor(private readonly aboutService: AboutService) { }

  @ApiOperation({ summary: 'Create a new about entry' })
  @ApiResponse({ status: 201, description: 'About created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  @ApiBody({ type: CreateAboutDto })
  @Post()
  create(@Body() createAboutDto: CreateAboutDto) {
    return this.aboutService.create(createAboutDto);
  }

  @ApiOperation({ summary: 'Retrieve all about entries' })
  @ApiResponse({ status: 200, description: 'List of about entries retrieved successfully.' })
  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a specific about entry by ID' })
  @ApiResponse({ status: 200, description: 'About entry retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'About entry not found.' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the about entry to retrieve' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(+id);
  }

  @ApiOperation({ summary: 'Delete a specific about entry by ID' })
  @ApiResponse({ status: 200, description: 'About entry deleted successfully.' })
  @ApiResponse({ status: 404, description: 'About entry not found.' })
  @ApiParam({ name: 'id', type: Number, description: 'The ID of the about entry to delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aboutService.remove(+id);
  }
}
