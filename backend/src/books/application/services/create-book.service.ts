import { Injectable } from '@nestjs/common';
import { Book } from '../../domain/entities/book.entity';
import { BookRepository } from '../../domain/ports/book.repository';
import { CreateBookDto } from '../dtos/create-book.dto';

@Injectable()
export class CreateBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book(createBookDto);
    return this.bookRepository.create(book);
  }
}