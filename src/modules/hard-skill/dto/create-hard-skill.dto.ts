import { ApiProperty } from '@nestjs/swagger';

export class CreateHardSkillDto {
  @ApiProperty({
    description: 'Nome da habilidade técnica',
    example: 'JavaScript',
  })
  name: string;

  @ApiProperty({
    description: 'Data de aquisição da habilidade',
    example: '2022-01-01',
  })
  acquiredDate: string;

  @ApiProperty({
    description: 'URL da imagem associada à habilidade (opcional)',
    example: 'https://example.com/image.png',
    required: false,
  })
  imageUrl?: string;
}
