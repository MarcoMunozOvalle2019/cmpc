import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marco')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}