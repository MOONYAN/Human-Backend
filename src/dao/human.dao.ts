import { HumanEntity } from './human.entity';
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class HumanDao {

    constructor(
        @InjectRepository(HumanEntity)
        private repo: Repository<HumanEntity>) { }

    async createOne(name: string): Promise<HumanEntity> {
        let human = this.repo.create();
        human.name = name;
        return await this.repo.save(human);
    }

    async getOne(id: number): Promise<HumanEntity> {
        const human = await this.repo.findOne(id);
        if (human === undefined) {
            throw new BadRequestException();
        }
        return human;
    }

    async updateOne(humanId: number, updatedhuman: HumanEntity): Promise<HumanEntity> {
        let human = await this.repo.findOne(humanId);
        if (human === undefined) {
            throw new BadRequestException();
        }
        return await this.repo.save(updatedhuman);
    }
}