import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GqlOptionsService } from './services/gql-options.service';
import { ConfigModule } from './resolvers/config/config.module';
import { AuthModule } from './resolvers/auth/auth.module';
import { HealthModule } from './resolvers/health/health.module';
import { TypeOrmOptionsService } from './services/typeorm-options.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmOptionsService,
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useClass: GqlOptionsService,
    }),
    AuthModule,
    HealthModule,
  ],
})
export class AppModule {}
