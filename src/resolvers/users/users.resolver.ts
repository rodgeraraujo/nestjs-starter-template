import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { GqlAuthGuard } from '../../guards/gql-auth.guard';

import { User } from '../../models/users.entity';
import { UsersService } from '../../services/users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [User])
  async users(): Promise<User[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => User)
  async user(@Args('username') username: string): Promise<User> {
    const user = await this.usersService.findOneByUsername(username);
    return user;
  }
}
