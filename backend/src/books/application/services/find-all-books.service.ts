import { Injectable } from '@nestjs/common';
import { Book } from '../../domain/entities/book.entity';
import { BookRepository } from '../../domain/ports/book.repository';

@Injectable()
export class FindAllBooksService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }
}