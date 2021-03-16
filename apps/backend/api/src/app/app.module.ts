import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppResolver } from './app.resolver';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { environment } from './../environments/environment';
import { UserEntity } from './users/entities/user.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity]
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppResolver],
})
export class AppModule { }
