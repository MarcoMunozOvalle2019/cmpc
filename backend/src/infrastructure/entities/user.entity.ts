import BaseEntity from './base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('books')
export class UserEntity extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  @Column()
    id: number;

  @ApiProperty()
  @Column()
  titulo: string;
  
  @ApiProperty()
  @Column()
  autor: string;
  @Column()
  editorial: string;
  @Column()
  precio:number;
  @Column()
  disponibilidad: string;
  @Column()
  genero: string;
  @Column()
  imagenUrl: string;


  // // @Column()
  // // name: string;

  // // @Column({
  // //   unique: true,
  // // })
  // // email: string;

  // // @Column({
  // //   select: false,
  // // })
  // // password: string;

  // // @Column({
  // //   nullable: false,
  // // })
  // // grant: number;  
}
