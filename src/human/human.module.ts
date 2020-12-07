import { DaoModule } from './../dao/dao.module';
import { Module } from '@nestjs/common';
import { HumanService } from './human.service';
import { HumanController } from './human.controller';

@Module({
  imports: [DaoModule],
  providers: [HumanService],
  controllers: [HumanController]
})
export class HumanModule { }
