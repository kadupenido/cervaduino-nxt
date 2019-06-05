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
    offsetTemp: {
        type: Number,
        required: true,
    },
}, {
        toJSON: {
            virtuals: true,
        },
    });

TankSchema.virtual('capacity').get(function() {
    return calcCapacity(this.diameter, this.height);
});

function calcCapacity(diameter, height) {
    const raio = diameter / 2;
    return Math.round(Math.PI * raio * raio * (height / 1000) * 100) / 100;
}
