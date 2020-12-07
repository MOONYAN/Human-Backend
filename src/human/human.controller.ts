import { ResHumanDto } from './interface/res-human-dto';
import { CreateHumanDto } from './dto/create-human.dto';
import { HumanService } from './human.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('human')
export class HumanController {

    constructor(private humanService: HumanService) { }

    @Post()
    createOne(@Body() dto: CreateHumanDto): Promise<ResHumanDto> {
        return this.humanService.createOne(dto);
    }

    @Get()
    getMany() {
        return this.humanService.getMany();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.humanService.getOne(id);
    }
}
