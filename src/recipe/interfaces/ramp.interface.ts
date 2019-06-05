import { Document } from 'mongoose';

export interface IRamp extends Document {
    readonly temperature: number;
    readonly minutes: number;
}
