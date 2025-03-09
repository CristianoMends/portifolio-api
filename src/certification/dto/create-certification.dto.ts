import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificationDto {

  @ApiProperty({
    description: 'Nome da certificação',
    example: 'Certificação em Desenvolvimento Web',
  })
  name: string;

  @ApiProperty({
    description: 'URL da imagem associada à certificação',
    example: 'https://example.com/cert-image.png',
  })
  image: string;

  @ApiProperty({
    description: 'Link para mais informações sobre a certificação',
    example: 'https://example.com/cert-link',
  })
  link: string;

  @ApiProperty({
    description: 'Data da certificação',
    example: '2024-12-31',
  })
  date: string;

}
