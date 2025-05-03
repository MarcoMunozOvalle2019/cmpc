import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  editorial: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column()
  disponibilidad: string;

  @Column()
  genero: string;

  @Column({ nullable: true })
  imagenUrl?: string;
}