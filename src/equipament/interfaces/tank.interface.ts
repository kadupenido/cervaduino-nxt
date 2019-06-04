import { Document } from 'mongoose';

export interface ITank extends Document {
    height: number;
    diameter: number;
    lostSpace: number;
    evaporationRate: number;
    capacity: number;
    offsetTemp: number;
}
