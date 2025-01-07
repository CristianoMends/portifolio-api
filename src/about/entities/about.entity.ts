<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
=======
import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm";
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0

@Entity()
export class About {
    @PrimaryGeneratedColumn()
<<<<<<< HEAD
    @ApiProperty({
        description: 'Identificador único do sobre',
        example: 1,
    })
    id: number;

    @Column()
    @ApiProperty({
        description: 'Descrição do conteúdo',
        example: 'Este é um exemplo de descrição.',
    })
    description: string;
=======
    id:number;

    @Column()
    description:string;

>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
}
