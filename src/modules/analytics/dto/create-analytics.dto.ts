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
}
