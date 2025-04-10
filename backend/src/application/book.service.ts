import { Injectable } from '@nestjs/common';
//import { CreateBookUseCase } from '../../domain/use-cases/create-book.use-case';
import { CreateBookUseCase } from '../domain/use-cases/create-book.use-case';
// import { UpdateBookUseCase } from '../../domain/use-cases/update-book.use-case';
// import { DeleteBookUseCase } from '../../domain/use-cases/delete-book.use-case';
// import { ListBooksUseCase } from '../../domain/use-cases/list-books.use-case';
// import { Book } from '../../domain/entities/book.entity';
// import { CreateBookDto } from '../dtos/create-book.dto';
// import { UpdateBookDto } from '../dtos/update-book.dto';
// import { ListBooksFilterDto } from '../dtos/list-books-filter.dto';
// import { BookRepository } from '../../domain/repositories/book.repository'; // Inyecta el repositorio abstracto

@Injectable()
export class BookService {
  constructor(
    private readonly createBookUseCase: CreateBookUseCase,
    // private readonly getBookByIdUseCase: GetBookByIdUseCase,
    // private readonly updateBookUseCase: UpdateBookUseCase,
    // private readonly deleteBookUseCase: DeleteBookUseCase,
    // private readonly listBooksUseCase: ListBooksUseCase,
    // private readonly bookRepository: BookRepository, // Para validaciones en la capa de aplicación si es necesario
  ) {}

//   async createBook(createBookDto: CreateBookDto): Promise<Book> {
//     return this.createBookUseCase.execute(createBookDto);
//   }

//   async getBookById(id: number): Promise<Book | null> {
//     return this.getBookByIdUseCase.execute(id);
//   }

//   async updateBook(id: number, updateBookDto: UpdateBookDto): Promise<Book | null> {
//     return this.updateBookUseCase.execute(id, updateBookDto);
//   }

//   async deleteBook(id: number): Promise<boolean> {
//     return this.deleteBookUseCase.execute(id);
//   }

//   async listBooks(filters?: ListBooksFilterDto, page?: number, pageSize?: number) {
//     return this.listBooksUseCase.execute(filters, page, pageSize);
//   }

  // ... otros métodos de la aplicación (ej. para exportación)
}
