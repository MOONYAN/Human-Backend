import { DaoModule } from './../dao/dao.module';
import { Module } from '@nestjs/common';
import { HumanService } from './human.service';
import { HumanController } from './human.controller';
import { TaskService } from './task.service';

@Module({
  imports: [DaoModule],
  providers: [HumanService, TaskService],
  controllers: [HumanController]
})
export class HumanModule { }
