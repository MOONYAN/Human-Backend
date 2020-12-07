import { HumanEntity } from './../dao/human.entity';
import { ResHumanDto } from './interface/res-human-dto';
import { CreateHumanDto } from './dto/create-human.dto';
import { Injectable } from '@nestjs/common';
import { HumanDao } from 'src/dao/human.dao';


@Injectable()
export class HumanService {

    constructor(private humanDao: HumanDao) { }

    async createOne(dto: CreateHumanDto): Promise<ResHumanDto> {
        const human = await this.humanDao.createOne(dto.name, false, false, false, false);
        return this.toDto(human);
    }

    async getOne(id: number): Promise<ResHumanDto> {
        const human = await this.humanDao.getOne(id);
        return this.toDto(human);
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
