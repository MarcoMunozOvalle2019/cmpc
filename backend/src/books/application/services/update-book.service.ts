import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '../../domain/entities/book.entity';
import { BookRepository } from '../../domain/ports/book.repository';
import { UpdateBookDto } from '../dtos/update-book.dto';

@Injectable()
export class UpdateBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const existingBook = await this.bookRepository.findById(id);
    if (!existingBook) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    const updatedBook = new Book({ ...existingBook, ...updateBookDto });
    const result = await this.bookRepository.update(id, updatedBook);
    if (!result) {
      throw new Error(`Failed to update book with ID ${id}`);
    }
    return result;
  }
}