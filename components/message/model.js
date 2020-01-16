const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date,
});

const model = mongoose.model('Message', mySchema); // Message es el nombre de la colección
module.exports = model;