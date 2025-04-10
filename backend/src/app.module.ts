import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './infrastructure/auth/auth.module';
import {UserModule} from './infrastructure/user/user.module'

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '1234',
          database: 'cmpc_libros',
          autoLoadEntities: true,
          synchronize: false,
    }),

    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
