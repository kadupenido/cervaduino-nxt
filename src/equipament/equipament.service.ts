import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { IEquipament } from './interfaces/equipament.interface';

@Injectable()
export class EquipamentService {

    constructor(@Inject('EQUIPAMENT_MODEL') private readonly equipamentModel: Model<IEquipament>) { }

    /**
     * Busca o equipamento cadastrado no sistema
     */
    async find(): Promise<IEquipament> {
        return this.equipamentModel.findOne().exec();
    }

}
