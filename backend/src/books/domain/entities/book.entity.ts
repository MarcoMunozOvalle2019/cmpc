export class Book {
    titulo: string;
    autor: string;
    editorial: string;
    precio: number;
    disponibilidad: number;
    genero: string;
    imagenUrl?: string;
  
    constructor(data: Partial<Book>) {
      Object.assign(this, data);
    }
  }