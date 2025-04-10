import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 1 
import { Book as DomainBook } from '../../domain/entities/book.entity';
import { BookRepository as IBookRepository } from '../../domain/ports/book.repository';
import { BookEntity } from '../../infrastructure/persistence/book.entity';   
@Injectable()
export class BookRepository implements IBookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async create(book: DomainBook): Promise<DomainBook> {
    const bookEntity = this.bookRepository.create(book);
    const savedBookEntity = await this.bookRepository.save(bookEntity);
    return new DomainBook(savedBookEntity);
  }

  async findAll(): Promise<DomainBook[]> {
    const bookEntities = await this.bookRepository.find();
    return bookEntities.map((entity) => new DomainBook(entity));
  }

  async findById(id: number): Promise<DomainBook | null> {
    const bookEntity = await this.bookRepository.findOneBy({ id });
    return bookEntity ? new DomainBook(bookEntity) : null;
  }

  async update(id: number, book: DomainBook): Promise<DomainBook | null> {
    const existingBook = await this.bookRepository.findOneBy({ id });
    if (!existingBook) {
      return null;
    }
    await this.bookRepository.update(id, book);
    const updatedBookEntity = await this.bookRepository.findOneBy({ id });
    return updatedBookEntity ? new DomainBook(updatedBookEntity) : null;
  }

  async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}