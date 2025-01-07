<<<<<<< HEAD
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAnalyticsDto {
  
  @ApiProperty({
    description: 'Origem do acesso',
    type: String,
    example: 'website',
  })
  @IsString()
  origin: string;
=======
export class CreateAnalyticsDto {
    
    origin:string

>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
}
