import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../../domain/entities/book.entity';
import { BookRepository } from '../../domain/ports/book.repository';

@Injectable()
export class FindBookByIdService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(id: number): Promise<Book> {
    const book = await this.bookRepository.findById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }
}