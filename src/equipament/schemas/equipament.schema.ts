import * as mongoose from 'mongoose';

import { FermenterSchema } from './fermenter.schema';
import { TankSchema } from './tank.schema';

export const EquipamentSchema = new mongoose.Schema({
    hlt: TankSchema,
    mlt: TankSchema,
    bk: TankSchema,
    fermenter: FermenterSchema,
});
