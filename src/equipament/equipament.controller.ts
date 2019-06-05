import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpStatus,
    InternalServerErrorException,
    Post,
    Res,
} from '@nestjs/common';
import { Response } from 'express';

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
    async find(@Res() res: Response): Promise<any> {
        try {
            res.status(HttpStatus.OK).send(await this.equipamentService.find());
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
