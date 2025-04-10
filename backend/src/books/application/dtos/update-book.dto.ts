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
  @IsNumber()
  disponibilidad?: number;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}