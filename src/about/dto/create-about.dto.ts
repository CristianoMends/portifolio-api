<<<<<<< HEAD
import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAboutDto {
    @ApiProperty({
        description: 'The description of the about entry',
        maxLength: 255,
        example: 'This is an about section description.',
    })
    @Length(1, 255, { message: 'Description must be between 1 and 255 characters.' })
    description: string;
=======
import { Length } from "class-validator";

export class CreateAboutDto {
    
    @Length(255)
    description:string;
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
}
