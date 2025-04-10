import BaseEntity from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity('marco11')
export class BookEntity extends BaseEntity {
  @Column()
  titulo: string;
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
}
