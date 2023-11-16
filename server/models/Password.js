const mongoose = require('mongoose');

const PasswordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    passwordStrength: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Password', PasswordSchema);