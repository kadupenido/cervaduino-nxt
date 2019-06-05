import { Document } from 'mongoose';

export interface IAddition extends Document {
    readonly name: string;
    readonly qty: number;
    readonly minutes: number;
}
