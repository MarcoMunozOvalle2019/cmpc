import * as bcrypt from "bcrypt";

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult, DeleteResult } from "typeorm";
import { ConfigService, InjectConfig } from "nestjs-config";

import { UserEntity as User, UserEntity } from "./../entities";

@Injectable()
export class UserService {
  private saltRounds: number;

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { 
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getHash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async createUser(user:User): Promise<User> {
    console.log('llegaBase',user)
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
    console.log('delete',id)
    await this.userRepository.delete(id);
  }

  async updateUser(id:number,user:User): Promise<UpdateResult> {
    console.log('llegaBase Update',user)
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
