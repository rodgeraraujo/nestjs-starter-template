import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { plainToClass } from 'class-transformer';

import { User } from '../../src/models/users.entity';
import { UsersResolver } from '../../src/resolvers/users/users.resolver';
import { UsersService } from '../../src/services/users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UsersService;

  beforeEach(async () => {
    const usersServiceMockValue = {
      findAll: () => 'mock',
      findOneByUsername: () => 'mock',
    };
    const UsersServiceMock = {
      provide: UsersService,
      useValue: usersServiceMockValue,
    };
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'mock' })],
      providers: [UsersResolver, UsersServiceMock],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('users', () => {
    it('should return the users', async () => {
      const result = [
        plainToClass(User, {
          id: 1,
          username: 'a',
          email: 'a@example.com',
        }),
      ];

      const findAll = jest.spyOn(service, 'findAll').mockReturnValue(
        new Promise<User[]>((resolve) => resolve(result))
      );

      expect(await resolver.users()).toEqual(result);
      expect(findAll.mock.calls).toHaveLength(1);
    });
  });

  describe('user', () => {
    it('should return the user', async () => {
      const input = 'a';
      const result = plainToClass(User, {
        id: 1,
        username: 'a',
        email: 'a@example.com',
      });

      const findOneByUsername = jest
        .spyOn(service, 'findOneByUsername')
        .mockReturnValue(
          new Promise<User>((resolve) => resolve(result))
        );

      expect(await resolver.user(input)).toEqual(result);
      expect(findOneByUsername.mock.calls[0][0]).toEqual(input);
    });
  });
});
