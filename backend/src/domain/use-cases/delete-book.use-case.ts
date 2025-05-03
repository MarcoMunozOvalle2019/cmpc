import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
    return this.bookRepository.create(bookData);
  }
}

@Injectable()
export class DeleteBookUseCase {
    constructor(private readonly bookRepository: BookRepository) {}
    
    async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
        return this.bookRepository.create(bookData);
    }
 } 

