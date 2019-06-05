import { Document } from 'mongoose';

import { IFermenter } from './fermenter.interface';
import { ITank } from './tank.interface';

export interface IEquipament extends Document {
    readonly hlt: ITank;
    readonly mlt: ITank;
    readonly bk: ITank;
    readonly fermenter: IFermenter;
}
