import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  autor?: string;

  @IsOptional()
  @IsString()
  editorial?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsString()
  disponibilidad?: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}