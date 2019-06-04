import * as mongoose from 'mongoose';

export const FermenterSchema = new mongoose.Schema({
    capacity: {
        type: Number,
        required: true,
    },
    lostSpace: {
        type: Number,
        required: true,
    },
});
