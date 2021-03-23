import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthOptionsService } from '../../services/auth-options.service';
import { ConfigModule } from '../config/config.module';

import { UsersController } from '../../controllers/users.controller';
import { User } from '../../models/users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from '../../services/users.service';

@Module({
  imports: [
    PassportModule.registerAsync({
      imports: [ConfigModule],
      useClass: AuthOptionsService,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
