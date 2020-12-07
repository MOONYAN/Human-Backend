import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionService } from './shared/service/database-connection';
import { DaoModule } from './dao/dao.module';
import { HumanModule } from './human/human.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConnectionService
    }),
    ScheduleModule.forRoot(),
    DaoModule,
    HumanModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
