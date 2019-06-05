import * as mongoose from 'mongoose';

import { AdditionSchema } from './addition.schema';
import { RampSchema } from './ramp.schema';

export const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true,
    },
    lkg: {
        type: Number,
        required: true,
    },
    grain: {
        type: Number,
        required: true,
    },
    liters: {
        type: Number,
        required: true,
    },
    ramps: {
        type: [RampSchema],
        required: true,
    },
    additions: {
        type: [AdditionSchema],
        required: true,
    },
});
