import * as mongoose from 'mongoose';

import { FermenterSchema } from './fermenter.schema';
import { TankSchema } from './tank.schema';

const EquipamentSchema = new mongoose.Schema({
    hlt: TankSchema,
    mlt: TankSchema,
    bk: TankSchema,
    fermenter: FermenterSchema,
});

export {
    EquipamentSchema,
};
