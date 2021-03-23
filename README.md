# NestJS Starter Template

[![CI status](https://github.com/rodgeraraujo/nestjs-starter-template/workflows/ci/badge.svg)](https://github.com/rodgeraraujo/nestjs-starter/actions)

[NestJS](https://github.com/nestjs/nest) framework scaffold template starter repository.

## Technologies

- Language

  - Docs
    - TypeScript: <https://www.typescriptlang.org/docs/>
  - Packages
    - typescript: <https://github.com/microsoft/TypeScript>

- Web Application Framework

  - Docs
    - NestJS: <https://docs.nestjs.com/>
  - Packages
    - @nestjs: <https://github.com/nestjs/nest>

- Database Access

  - Docs
    - TypeORM: <https://typeorm.io/>
      - Supports MySQL / Postgres / SQLite And more...
      - Automatic migrations generation
  - Packages
    - @nestjs/typeorm: <https://github.com/nestjs/typeorm>
    - typeorm: <https://github.com/typeorm/typeorm>

- GraphQL

  - Docs
    - GraphQL: <https://graphql.org/learn/>
    - Apollo: <https://www.apollographql.com/docs/>
    - TypeGraphQL: <https://typegraphql.ml/>
  - Packages
    - @nestjs/graphql: <https://github.com/nestjs/graphql>
    - apollo-server-express: <https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express>
    - graphql-tools: <https://github.com/apollographql/graphql-tools>
    - graphql: <https://github.com/graphql/graphql-js>
    - type-graphql: <https://github.com/19majkel94/type-graphql>

- Validation

  - class-validator: <https://github.com/typestack/class-validator>

- Serialization

  - class-transformer: <https://github.com/typestack/class-transformer>

- Security

  - helmet: <https://github.com/helmetjs/helmet>
  - bcrypt: <https://github.com/kelektiv/node.bcrypt.js>
  - CORS: NestJS built-in

- Authentication

  - Docs
    - JWT: <https://jwt.io/>
    - JWT Node.js: <https://github.com/auth0/node-jsonwebtoken>
    - Passport: <http://www.passportjs.org/>
  - Packages
    - @nestjs/passport: <https://github.com/nestjs/passport>
    - passport: <https://github.com/jaredhanson/passport>
    - @nestjs/jwt: <https://github.com/nestjs/jwt>
    - passport-jwt: <https://github.com/mikenicholson/passport-jwt>

- Health Check

  - @nestjs/terminus: <https://github.com/nestjs/terminus>
  - @godaddy/terminus: <https://github.com/godaddy/terminus>

- [12-Factor](https://12factor.net/config) based config

  - `src/services/config.service.ts`
  - `src/config/config.env.ts`

- Linter

  - Docs
    - ESLint: <https://eslint.org/>
  - Packages
    - eslint: <https://github.com/eslint/eslint>
    - @typescript-eslint/parser: <https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser>
    - @typescript-eslint/eslint-plugin: <https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin>

- Formatter

  - Docs
    - Prettier: <https://prettier.io/>
  - Packages
    - prettier: <https://github.com/prettier/prettier>
    - eslint-config-prettier: <https://github.com/prettier/eslint-config-prettier>

- Test

  - Docs
    - Jest: <https://jestjs.io/>
  - Packages
    - jest: <https://github.com/facebook/jest>

- Documentation

  - Docs
    - Compodoc: <https://compodoc.app/>
  - Packages
    - @compodoc/compodoc: <https://github.com/compodoc/compodoc>

- Documentation OpenAPI
  - Docs
    - OpenAPI: <https://www.openapis.org/>
    - Swagger UI: <https://swagger.io/tools/swagger-ui/>
  - Packages
    - @nestjs/swagger: <https://github.com/nestjs/swagger>
    - swagger-ui-express: <https://github.com/scottie1984/swagger-ui-express>

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/rodgeraraujo/nestjs-starter-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit rodgeraraujo/nestjs-starter-template my-nestjs-app
cd my-nestjs-app
```

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` field in `package.json`
- [ ] Update `description` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Clean up the READMEs

And enjoy :p

## Usage

```shell
npm install -g @nestjs/cli
npm install
```

## Running the app

```shell
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```shell
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## DB migration

```shell
# generate
npm run migration:generate <name>

# show all migrations
npm run migration:show

# run
npm run migration:run

# dry run
npm run schema:log

# revert
npm run migration:revert
```

## Documentation

```shell
npm run doc
```
