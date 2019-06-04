import * as mongoose from 'mongoose';

import { FermenterSchema } from './fermenter.schema';
import { TankSchema } from './tank.schema';

const EquipamentSchema = new mongoose.Schema({
    hlt: TankSchema,
    mlt: TankSchema,
    bk: TankSchema,
    fermenter: FermenterSchema,
});

EquipamentSchema.pre('save', (next) => {

    this.hlt.capacidade = calcCapacity(this.hlt.diametro, this.hlt.altura);
    this.mlt.capacidade = calcCapacity(this.mlt.diametro, this.mlt.altura);
    this.bk.capacidade = calcCapacity(this.bk.diametro, this.bk.altura);

    next();
});

// EquipamentSchema.pre('save', function(next) {

//     this.hlt.capacity = calcCapacity(this.hlt.diameter, this.hlt.height);
//     this.mlt.capacity = calcCapacity(this.mlt.diameter, this.mlt.height);
//     this.bk.capacity = calcCapacity(this.bk.diameter, this.bk.height);

//     next();
// });

function calcCapacity(diameter, height) {
    const raio = diameter / 2;
    return Math.round(Math.PI * raio * raio * (height / 1000) * 100) / 100;
}

export {
    EquipamentSchema,
};
