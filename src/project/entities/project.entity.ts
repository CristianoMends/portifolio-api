import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
<<<<<<< HEAD
import { ApiProperty } from '@nestjs/swagger';


@Entity('projects')
export class Project {


  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'Identificador único do projeto',
    example: 1,
  })
  id: number;

  @Column()
  @ApiProperty({
    description: 'Nome do projeto',
    example: 'Projeto Exemplo',
  })
  name: string;

  @Column({ length: 500 })
  @ApiProperty({
    description: 'Descrição detalhada do projeto',
    example: 'Este projeto é um exemplo de integração com NestJS e TypeORM.',
  })
  description: string;

  @Column({ nullable: true })
  @ApiProperty({
    description: 'URL do projeto',
    example: 'https://www.exemplo.com',
    nullable: true,
  })
  url: string;

  @Column({ nullable: true })
  @ApiProperty({
    description: 'URL do repositório do projeto',
    example: 'https://github.com/exemplo/projeto',
    nullable: true,
  })
  repositoryUrl: string;

  @Column({ nullable: true })
  @ApiProperty({
    description: 'URL do vídeo do projeto no YouTube',
    example: 'https://www.youtube.com/watch?v=exemplo',
    nullable: true,
  })
  youtubeUrl: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({
    description: 'Tecnologias utilizadas no projeto (em formato JSON)',
    example: '["JavaScript", "TypeScript", "Node.js"]',
    nullable: true,
  })
  private technologies: string;

=======

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  repositoryUrl: string;

  @Column({ nullable: true })
  youtubeUrl: string;

  @Column({ type: 'text', nullable: true })
  private technologies: string;
  
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  getTechnologies(): string[] {
    return this.technologies ? JSON.parse(this.technologies) : [];
  }

<<<<<<< HEAD

=======
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  setTechnologies(value: string) {
    this.technologies = value;
  }

  @Column()
<<<<<<< HEAD
  @ApiProperty({
    description: 'URL da imagem do projeto',
    example: 'https://www.exemplo.com/imagem.png',
  })
  image: string;

  @Column()
  @ApiProperty({
    description: 'Data de criação do projeto',
    example: '2025-01-01T00:00:00Z',
  })
=======
  image: string;

  @Column()
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
  createdAt: Date;
}
