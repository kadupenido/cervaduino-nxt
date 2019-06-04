import { Controller, Get, Param } from '@nestjs/common';

import { EquipamentService } from './equipament.service';
import { IEquipament } from './interfaces/equipament.interface';

@Controller('equipament')
export class EquipamentController {
    constructor(private readonly equipamentService: EquipamentService) { }

    @Get()
    async find(): Promise<IEquipament> {
        return this.equipamentService.find();
    }
}
