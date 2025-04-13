import { Controller, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "../entities";
import {
  Post,
  Body,
  Patch,
  Get,
  Param,
  Request,
} from "@nestjs/common";
import { Repository, UpdateResult, DeleteResult } from "typeorm";


@Controller("books")
export class UserController {
  constructor(private readonly userService: UserService) {}

  generateCsv
  @Get("csv")
  async generateAllCsv(): Promise<UserEntity[]> {
    return await this.userService.findAllandGenerateCsv();
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Post()
  async CreateUser(@Request() req): Promise<UserEntity> {
    const user = new UserEntity();
    user.titulo=req.body.titulo,
    user.autor=req.body.autor,
    user.editorial=req.body.editorial,
    user.precio=req.body.precio,
    user.disponibilidad=req.body.disponibilidad,
    user.genero=req.body.genero,
    user.imagenUrl=req.body.imagenUrl      

    user.created=new Date()
    user.updated=new Date()

    return await this.userService.createUser(user);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
  return this.userService.deleteUser(id);
  }
  
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateBookDto: UserEntity,
  ): Promise<UpdateResult> {
    console.log('arribando...',updateBookDto)
    return this.userService.updateUser(id,updateBookDto);
  }  
  
}

