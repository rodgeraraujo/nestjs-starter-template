import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConfigService } from '../services/config.service';

import * as postgres from '../typeorm/ormconfig.postgres';
import * as sqlite from '../typeorm/ormconfig.sqlite';

@Injectable()
export class TypeOrmOptionsService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    Logger.debug('Init', this.constructor.name);

    if (this.config.env.TYPEORM_TYPE === 'auto') {
      if (
        this.config.env.NODE_ENV === 'development' ||
        this.config.env.NODE_ENV === 'test'
      ) {
        return sqlite;
      }
      if (this.config.env.NODE_ENV === 'production') {
        return postgres;
      }
      throw new Error(`Unknown NODE_ENV: ${this.config.env.NODE_ENV}`);
    }

    const ormOptions = {
      sqlite,
      postgres,
    };
    return ormOptions[this.config.env.TYPEORM_TYPE];
  }
}
