import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'test', description: 'swagger'})
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  editorial: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  availability?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  genre: string;
}