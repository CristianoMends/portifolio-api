<<<<<<< HEAD
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Analytics {
  
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'ID do Analytics',
    type: Number,
    example: 1,
  })
  id: number;

  @Column()
  @ApiProperty({
    description: 'Origem do acesso',
    type: String,
    example: 'website',
  })
  origin: string;

  @Column()
  @ApiProperty({
    description: 'Data de acesso',
    type: Date,
    example: '2025-01-03T14:23:22.123Z',
  })
  accessDate: Date;
=======
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    origin:string
  
    @Column()
    accessDate: Date;
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
}
