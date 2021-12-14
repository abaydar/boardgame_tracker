const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    players: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            scores: {
                type: Number
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})