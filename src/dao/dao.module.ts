import { HumanDao } from './human.dao';
import { HumanEntity } from './human.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forFeature([HumanEntity])
    ],
    providers: [HumanDao],
    exports: [HumanDao]
})
export class DaoModule { }
