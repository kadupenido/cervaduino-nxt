import * as mongoose from 'mongoose';

export const RampSchema = new mongoose.Schema({
    temperature: {
        type: Number,
        required: true,
    },
    minutes: {
        type: Number,
        required: true,
    },
});
