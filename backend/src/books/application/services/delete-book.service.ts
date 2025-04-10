import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../../domain/ports/book.repository';

@Injectable()
export class DeleteBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(id: number): Promise<void> {
    const existingBook = await this.bookRepository.findById(id);
    if (!existingBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    await this.bookRepository.delete(id);
  }
}