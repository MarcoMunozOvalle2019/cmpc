import { Injectable } from '@nestjs/common';
import { CreateBookUseCase } from '../domain/use-cases/create-book.use-case';

@Injectable()
export class BookService {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,
  ) {}

}
