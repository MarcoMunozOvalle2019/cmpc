import * as bcrypt from "bcrypt";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { UserEntity as User, UserEntity } from "./../entities";


@Injectable()
export class UserService {
  private saltRounds: number;

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findAllandGenerateCsv(): Promise<User[]> {
      const users=await this.userRepository.find();

      const createCsvWriter = require('csv-writer').createArrayCsvWriter;
      const csvWriter = createCsvWriter({
          header:[
            "id",
            "created",
            "updated",
            "titulo",
            "autor",
            "editorial",
            "precio",
            "disponibilidad",
            "genero",
            "imagenUrl"            
            ],
          path: 'path/to/reporte_cmpc.csv'
      });
      
      let informe=[]
      const data=users.map((esto)=>{
        var result = Object.keys(esto).map((key) => esto[key]);
        informe.push(result)
      })
    
      csvWriter.writeRecords(informe)  
          .then(() => {
              console.log('...Listo');
          });
    
    return users
  }

  
  async getHash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async createUser(user:User): Promise<User> {
    const userToCreate = {
      ...user,
      id:user.id,
      titulo: user.titulo,
      autor: user.autor,
      editorial: user.editorial,
      precio:user.precio,
      disponibilidad: user.disponibilidad,
      genero: user.genero,
      imagenUrl: user.imagenUrl      
    };
    const result = await this.userRepository.save(
    await this.userRepository.create(userToCreate)
    );

    return result;
  }  


  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async updateUser(id:number,user:User): Promise<UpdateResult> {
    const userToUpdate = {
      id:user.id,
      titulo: user.titulo,
      autor: user.autor,
      editorial: user.editorial,
      precio:user.precio,
      disponibilidad: user.disponibilidad,
      genero: user.genero,
      imagenUrl: user.imagenUrl      
    };
    const result = await this.userRepository.update(id,
        // await this.userRepository.update(userToUpdate)
        userToUpdate
    );

    return result;
  }  
  

}
