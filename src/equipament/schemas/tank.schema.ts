import * as mongoose from 'mongoose';

export const TankSchema = new mongoose.Schema({
    height: {
        type: Number,
        required: true,
    },
    diameter: {
        type: Number,
        required: true,
    },
    lostSpace: {
        type: Number,
        required: true,
    },
    evaporationRate: {
        type: Number,
        required: false,
    },
    capacity: {
        type: Number,
        required: true,
    },
    offsetTemp: {
        type: Number,
        required: true,
    },
});
