const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }, 
    friends: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ], 
    games: [
        {
            game: {
                type: Schema.Types.ObjectId,
                ref: 'games'
            }
        }
    ]
})

module.exports = UserSchema