import { HumanEntity } from './../dao/human.entity';
import { ResHumanDto } from './interface/res-human-dto';
import { CreateHumanDto } from './dto/create-human.dto';
import { Injectable } from '@nestjs/common';
import { HumanDao } from 'src/dao/human.dao';


@Injectable()
export class HumanService {

    constructor(private humanDao: HumanDao) { }

    async createOne(dto: CreateHumanDto): Promise<ResHumanDto> {
        const human = await this.humanDao.createOne(dto.name, true, false, false, false);
        return this.toDto(human);
    }

    async getOne(id: number): Promise<ResHumanDto> {
        const human = await this.humanDao.getOne(id);
        return this.toDto(human);
    }

    async toGrowingStage(): Promise<void> {
        let humans = await this.humanDao.getMany();
        const updated = humans.filter(e => e.born && !e.growing).map(e => {
            return {
                id: e.id,
                name: e.name,
                born: e.born,
                growing: true,
                dead: e.dead,
                reborn: e.reborn
            } as HumanEntity
        });
        this.humanDao.updateMany(updated);
    }

    async toDeadStage(): Promise<void> {
        let humans = await this.humanDao.getMany();
        const updated = humans.filter(e => e.growing && !e.dead).map(e => {
            return {
                id: e.id,
                name: e.name,
                born: e.born,
                growing: e.growing,
                dead: true,
                reborn: e.reborn
            } as HumanEntity
        });
        this.humanDao.updateMany(updated);
    }

    async toRebornStage(): Promise<void> {
        let humans = await this.humanDao.getMany();
        const updated = humans.filter(e => e.dead && !e.reborn).map(e => {
            return {
                id: e.id,
                name: e.name,
                born: e.born,
                growing: e.growing,
                dead: e.dead,
                reborn: true
            } as HumanEntity
        });
        this.humanDao.updateMany(updated);
    }

    private toDto(human: HumanEntity): ResHumanDto {

        return {
            id: human.id,
            name: human.name,
            born: human.born,
            growing: human.growing,
            dead: human.dead,
            reborn: human.reborn
        };
    }
}
