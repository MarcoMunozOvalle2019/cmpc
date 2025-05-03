import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from '../../domain/ports/book.repository';

@Injectable()
export class PaginatorBookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(options: {
    page: number;
    limit: number;
    filter?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
    genre?: string;
    editorial?: string;
    author?: string;
    availability?: boolean;
  }): 
  Promise<{ data: BookRepository[]; total: number; currentPage: number; totalPages: number }> {
    const { page, limit, filter, sortBy, sortOrder, genre, editorial, author, availability } = options;
    const skip = (page - 1) * limit;

    return
  }

}