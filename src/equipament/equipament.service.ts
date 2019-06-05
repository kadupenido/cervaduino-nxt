import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { EquipamentDto } from './dto/equipament.dto';
import { IEquipament } from './interfaces/equipament.interface';

@Injectable()
export class EquipamentService {

    constructor(@Inject('EQUIPAMENT_MODEL') private readonly equipamentModel: Model<IEquipament>) { }

    /**
     * Busca o equipamento cadastrado no sistema
     */
    async find(): Promise<IEquipament> {
        return await this.equipamentModel.findOne().exec();
    }

    /**
     * Salva um equipamento
     */
    async save(equipament: EquipamentDto): Promise<IEquipament> {
        let savedEquipament = await this.find();
        if (savedEquipament) {
            savedEquipament.set(equipament);
        } else {
            savedEquipament = new this.equipamentModel(equipament);
        }

        return await savedEquipament.save();
    }
}
