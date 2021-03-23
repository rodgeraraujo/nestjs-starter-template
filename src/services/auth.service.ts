import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import { User } from '../models/users.entity';
import { UsersService } from './users.service';

import { JwtPayload } from '../resolvers/auth/dto/jwt-payload.dto';
import { SignInInput } from '../resolvers/auth/dto/sign-in-input.dto';
import { SignInResult } from '../resolvers/auth/dto/sign-in-result.dto';
import { SignUpInput } from '../resolvers/auth/dto/sign-up-input.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>
  ) {}

  async signUp(input: SignUpInput): Promise<User> {
    const u = new User();
    Object.assign(u, input);
    u.password = AuthService.encryptPassword(u.password);
    const result = await this.usersRepo.save(u);
    return result;
  }

  private static encryptPassword(password): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }

  async signIn(input: SignInInput): Promise<SignInResult> {
    const user = await this.usersService.findOneByUsername(input.username);
    if (!user) {
      return new SignInResult();
    }

    const valid = await bcrypt.compare(input.password, user.password);
    if (!valid) {
      return new SignInResult();
    }

    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    const token = this.jwtService.sign(payload);

    return { ...user, token };
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    const user = await this.usersService.findOneByUsername(payload.username);
    return user;
  }
}
