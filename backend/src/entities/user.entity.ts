import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marco')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  editorial: string;

  @Column()
  precio: number;

  @Column()
  disponibilidad: string;

  @Column()
  genero: string;

  @Column()
  imagenUrl: string;

}