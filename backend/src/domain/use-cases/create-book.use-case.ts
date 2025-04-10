import { Injectable } from '@nestjs/common';
import { Book } from '../entities/book.entity';
import { BookRepository } from '../repositories/book.repository';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
    // Aquí va la lógica de negocio para la creación de un libro
    // Validaciones, reglas de negocio, etc.
    return this.bookRepository.create(bookData);
  }
}

// @Injectable()
// export class GetBookByIdUseCase {
//     constructor(private readonly bookRepository: BookRepository) {}
  
//     async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
//       // Aquí va la lógica de negocio para la leer un libro
//       // Validaciones, reglas de negocio, etc.
//       return this.bookRepository.create(bookData);
//     }
//  }
  

// @Injectable()
//   export class UpdateBookUseCase {
//       constructor(private readonly bookRepository: BookRepository) {}
    
//       async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
//         // Aquí va la lógica de negocio para la leer un libro
//         // Validaciones, reglas de negocio, etc.
//         return this.bookRepository.create(bookData);
//       }
//  }  
 

// @Injectable()
// export class DeleteBookUseCase {
//     constructor(private readonly bookRepository: BookRepository) {}
    
//     async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
//         // Aquí va la lógica de negocio para la leer un libro
//         // Validaciones, reglas de negocio, etc.
//         return this.bookRepository.create(bookData);
//     }
//  } 

// @Injectable()
// export class ListBooksUseCase {
//     constructor(private readonly bookRepository: BookRepository) {}
    
//     async execute(bookData: Omit<Book, 'id'>): Promise<Book> {
//         // Aquí va la lógica de negocio para la leer un libro
//         // Validaciones, reglas de negocio, etc.
//         return this.bookRepository.create(bookData);
//     }
//  } 
