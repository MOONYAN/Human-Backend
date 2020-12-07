import { HumanService } from './human.service';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {

    private readonly logger = new Logger(TaskService.name);

    constructor(private humanService: HumanService) { }

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleCorn(){
        this.logger.debug('Called every 10 seconds');
        await this.humanService.toRebornStage();
        await this.humanService.toDeadStage();
        await this.humanService.toGrowingStage();
    }
}