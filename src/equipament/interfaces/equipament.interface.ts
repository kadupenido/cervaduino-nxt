import { Document } from 'mongoose';

import { IFermenter } from './fermenter.interface';
import { ITank } from './tank.interface';

export interface IEquipament extends Document {
    hlt: ITank;
    mlt: ITank;
    bk: ITank;
    fermenter: IFermenter;
}
