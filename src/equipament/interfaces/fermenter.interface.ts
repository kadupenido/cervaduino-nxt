import { Document } from 'mongoose';

export interface IFermenter extends Document {
    readonly capacity: number;
    readonly lostSpace: number;
}
