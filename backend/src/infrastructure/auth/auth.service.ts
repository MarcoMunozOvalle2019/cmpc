import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../infrastructure/entities/user.entity';
import { Repository } from 'typeorm';

// TODO: Para este trabajo cmpc se considera no llevar a base de datos los usuario
const UsersHabilitados = [
  {
    id: 1,
    username: 'marco',
    password: 'password',
  },
  {
    id: 2,
    username: 'daniela',
    password: 'password123',
  },
];

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = UsersHabilitados.find((user) => user.username === username);
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}



@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}
  /**
   * this function is used to get all the user's list
   * @returns promise of array of users
   */
  findAllUser(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}

