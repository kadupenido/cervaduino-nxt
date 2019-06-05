import { AdditionDto } from './addition.dto';
import { RampDto } from './ramp.dto';

export class RecipeDto {
    readonly name: string;
    readonly style: string;
    readonly lkg: string;
    readonly grain: string;
    readonly liters: number;
    readonly ramps: [RampDto];
    readonly additions: [AdditionDto];
}
