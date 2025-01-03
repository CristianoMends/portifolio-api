import { IsNotEmpty, IsString, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsUrl()
  repositoryUrl: string;

  @IsNotEmpty()
  @IsUrl()
  youtubeUrl: string;

  @IsOptional()
  @IsString()
  technologies?: string;
}
