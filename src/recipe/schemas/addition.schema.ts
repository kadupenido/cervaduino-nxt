import * as mongoose from 'mongoose';

export const AdditionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    minutes: {
        type: String,
        required: true,
    },
});
