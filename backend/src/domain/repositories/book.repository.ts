import { Book } from '../entities/book.entity';

export interface BookRepository {
  create(book: Omit<Book, 'id'>): Promise<Book>;
  findById(id: number): Promise<Book | null>;
  findAll(filters?: any, page?: number, pageSize?: number): Promise<{ data: Book[]; total: number }>;
  update(id: number, bookData: Partial<Book>): Promise<Book | null>;
  delete(id: number): Promise<boolean>;
  softDelete(id: number): Promise<boolean>;
  findByTitulo(titulo: string): Promise<Book | null>; // Ejemplo para validaciones
  // ... otros métodos de búsqueda y manipulación
}
