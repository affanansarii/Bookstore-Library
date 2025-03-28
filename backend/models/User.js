const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
        type: String, default: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
    },
    role: { type: String, required: true, enum: ['user', 'admin'] },
}, { timestamps: true });

module.exports = mongoose.model("user", user)