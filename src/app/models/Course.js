const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, maxLength: 100 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Course', Course);
