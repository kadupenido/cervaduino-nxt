import { Document } from 'mongoose';

export interface ITank extends Document {
    readonly height: number;
    readonly diameter: number;
    readonly lostSpace: number;
    readonly evaporationRate: number;
    readonly capacity: number;
    readonly offsetTemp: number;
}
