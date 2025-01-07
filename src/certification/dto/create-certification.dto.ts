<<<<<<< HEAD
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
}
=======
export class CreateCertificationDto {
    name: string;
    image: string;
    link: string;
  }
>>>>>>> 17628a8bdb8287b3bbd83990ddefd8d4e515cbc0
