import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe,Query } from '@nestjs/common';
import { CreateBookDto } from '../../application/dtos/create-book.dto';
import { UpdateBookDto } from '../../application/dtos/update-book.dto';
import { CreateBookService } from '../../application/services/create-book.service';
import { FindAllBooksService } from '../../application/services/find-all-books.service';
import { FindBookByIdService } from '../../application/services/find-book-by-id.service';
import { UpdateBookService } from '../../application/services/update-book.service';
import { DeleteBookService } from '../../application/services/delete-book.service';
import { PaginatorBookService } from '../../application/services/find-pag-book.service copy';
import { Book } from '../../domain/entities/book.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiBody } from '@nestjs/swagger';


@Controller('books')
export class BooksController {
  constructor(
    private readonly createBookService: CreateBookService,
    private readonly findAllBooksService: FindAllBooksService,
    private readonly findBookByIdService: FindBookByIdService,
    private readonly updateBookService: UpdateBookService,
    private readonly deleteBookService: DeleteBookService,
    private readonly pagBookService: PaginatorBookService,
  ) {}

  @ApiTags('libros')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user: { 
          properties: { 
            id: { type: 'number' },
            username: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    },
  })
  @ApiOperation({ summary: 'Crea un nuevo usuario' })
  @ApiResponse({ status: 200, description: 'Return all books.' })
  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.createBookService.execute(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {

    return this.findAllBooksService.execute();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.findBookByIdService.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.updateBookService.execute(id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.deleteBookService.execute(id);
  }


  // Endpoint de paginación
  @Get('paginated')
  findPaginated(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('filter') filter?: string, // Opcional: filtro por título, autor, etc.
    @Query('sortBy') sortBy?: string, // Opcional: campo por el cual ordenar
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC', // Opcional: orden ascendente o descendente
    @Query('genre') genre?: string, // Opcional: filtro por género
    @Query('editorial') editorial?: string, // Opcional: filtro por editorial
    @Query('author') author?: string, // Opcional: filtro por autor
    @Query('availability') availability?: boolean, // Opcional: filtro por disponibilidad
  ): Promise<{ data: Book[]; total: number; currentPage: number; totalPages: number }> {


    return
  }  
}