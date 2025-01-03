import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class About {
    @PrimaryGeneratedColumn()
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
}
