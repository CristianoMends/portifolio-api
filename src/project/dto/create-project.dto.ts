import { IsNotEmpty, IsString, IsOptional, IsUrl, MaxLength } from 'class-validator';
<<<<<<< HEAD
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty({
    description: 'Nome do projeto',
    example: 'Sistema de Gerenciamento de Tarefas',
  })
=======

export class CreateProjectDto {
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

<<<<<<< HEAD
  @ApiProperty({
    description: 'Descrição detalhada do projeto',
    example: 'Este é um projeto para gerenciar tarefas e aumentar a produtividade.',
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

<<<<<<< HEAD
  @ApiProperty({
    description: 'URL do site do projeto',
    example: 'https://example.com',
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @IsNotEmpty()
  @IsUrl()
  url: string;

<<<<<<< HEAD
  @ApiProperty({
    description: 'URL do repositório do projeto no GitHub',
    example: 'https://github.com/usuario/repo',
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @IsNotEmpty()
  @IsUrl()
  repositoryUrl: string;

<<<<<<< HEAD
  @ApiProperty({
    description: 'URL do vídeo de demonstração no YouTube',
    example: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @IsNotEmpty()
  @IsUrl()
  youtubeUrl: string;

<<<<<<< HEAD
  @ApiProperty({
    description: 'Tecnologias utilizadas no projeto',
    example: 'JavaScript, NestJS, PostgreSQL',
    required: false,
  })
=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  @IsOptional()
  @IsString()
  technologies?: string;
}
