export class Book {
    id: number;
    titulo: string;
    autor: string;
    editorial: string;
    precio: number;
    disponibilidad: number;
    genero: string;
    imagenUrl?: string; // Opcional
  
    constructor(
      id: number,
      titulo: string,
      autor: string,
      editorial: string,
      precio: number,
      disponibilidad: number,
      genero: string,
      imagenUrl?: string,
    ) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.editorial = editorial;
      this.precio = precio;
      this.disponibilidad = disponibilidad;
      this.genero = genero;
      this.imagenUrl = imagenUrl;
    }
  }
  