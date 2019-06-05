import { Document } from 'mongoose';

import { IAddition } from './addition.interface';
import { IRamp } from './ramp.interface';

export interface IRecipe extends Document {
    readonly name: string;
    readonly style: string;
    readonly lkg: string;
    readonly grain: string;
    readonly liters: number;
    readonly ramps: [IRamp];
    readonly additions: [IAddition];
}
