# cmpc# cmpc
https://github.com/MarcoMunozOvalle2019/cmpc/tree/main/frontend

Proyecto: Realizado con tecnologias NestJs(backend) , React-hook(frontend), postgress
Caracteristicas: Realizado con autenticacion jwt, arq.hexagonal basica( inversion de dependencias).

repositorio cmpc:
https://github.com/MarcoMunozOvalle2019/cmpc/blob/main/README.md

SWAGGER:
http://localhost:3000/api-docs

LIB EXTERNA CSV:
https://www.npmjs.com/package/csv-writer

REPOSITORIO DOCUMENTACION: se recomienda. jeje

1 download repositorios

2 npm i --force
  npm i class-validator --force
  (se fuerzan debido a incompatibilidad, por mejorar)

2 levantar base datos postgres (local)

3 levantar backend (npm run start)

4 levanta frontend (npm run dev http://localhost:5173/)

5 Tambien se agrega docker-compose( correr: docker-compose up -d --build )
  o levantar backend/npm run start y frontEnd/npm run dev
6 ingresar usuario en Front:
    username: 'marco',
    password: 'password',
    
7 una vez en vista usuario crear libros (enviar)

8 borrar libros boton "Delete"

9 modificar libro boton "Actualiza"


comentarios: a futuro crear csv con MULTER , usuarios en postgres, etc 

 ...muchas gracias
