import { DatabaseConnectionService } from './shared/service/database-connection';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaoModule } from './dao/dao.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConnectionService
    }),
    DaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
