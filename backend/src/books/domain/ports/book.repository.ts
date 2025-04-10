import { Book } from '../entities/book.entity';

export interface BookRepository {
  create(book: Book): Promise<Book>;
  findAll(): Promise<Book[]>;
  findById(id: number): Promise<Book | null>;
  update(id: number, book: Book): Promise<Book | null>;
  delete(id: number): Promise<void>;
}