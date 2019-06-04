import { Document } from 'mongoose';

export interface IFermenter extends Document {
    capacity: number;
    lostSpace: number;
}
