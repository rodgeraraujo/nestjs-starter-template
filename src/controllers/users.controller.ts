import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

import { User } from '../models/users.entity';
import { UsersService } from '../services/users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':name')
  async findOneByUsername(@Param('name') name: string): Promise<User> {
    const user = await this.usersService.findOneByUsername(name);
    return user;
  }
}
