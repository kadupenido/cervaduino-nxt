import { BadRequestException, Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';

import { EquipamentDto } from './dto/equipament.dto';
import { EquipamentService } from './equipament.service';
import { IEquipament } from './interfaces/equipament.interface';

@Controller('equipament')
export class EquipamentController {

    constructor(private readonly equipamentService: EquipamentService) { }

    /**
     * Busca o equipamento cadastrado
     */
    @Get()
    async find(): Promise<any> {
        try {
            return await this.equipamentService.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    /**
     * Salva os dados do equipamento
     * @param equipamentDto Equipamento
     */
    @Post()
    async save(@Body() equipamentDto: EquipamentDto): Promise<IEquipament> {
        try {
            return await this.equipamentService.save(equipamentDto);
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
}
