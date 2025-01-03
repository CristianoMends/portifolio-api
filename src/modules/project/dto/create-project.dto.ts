import { IsNotEmpty, IsString, IsOptional, IsUrl, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    description: 'Nome do projeto',
    example: 'Sistema de Gerenciamento de Tarefas',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'Descrição detalhada do projeto',
    example: 'Este é um projeto para gerenciar tarefas e aumentar a produtividade.',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

  @ApiProperty({
    description: 'URL do site do projeto',
    example: 'https://example.com',
  })
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiProperty({
    description: 'URL do repositório do projeto no GitHub',
    example: 'https://github.com/usuario/repo',
  })
  @IsNotEmpty()
  @IsUrl()
  repositoryUrl: string;

  @ApiProperty({
    description: 'URL do vídeo de demonstração no YouTube',
    example: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
  })
  @IsNotEmpty()
  @IsUrl()
  youtubeUrl: string;

  @ApiProperty({
    description: 'Tecnologias utilizadas no projeto',
    example: 'JavaScript, NestJS, PostgreSQL',
    required: false,
  })
  @IsOptional()
  @IsString()
  technologies?: string;
}
