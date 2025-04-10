import { Module } from '@nestjs/common';
import { BooksController } from './infrastructure/controllers/books.controller';

@Module({
  imports: [],
  providers: [
  ],
  controllers: [BooksController],
})
export class BooksModule {}