const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,


    },
    imageId: {
        type: String,
        required: true,


    }
}, {
    timestamps: true
})