import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'test', description: 'swagger'})
  titulo: string;

  @IsNotEmpty()
  @IsString()
  autor: string;

  @IsNotEmpty()
  @IsString()
  editorial: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsNotEmpty()
  @IsString()
  disponibilidad: string;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsOptional()
  @IsString()
  imagenUrl?: string;
}