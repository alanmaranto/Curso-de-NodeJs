const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat' // De que coleccion obtendremos el chat
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String,
});

const model = mongoose.model('Message', mySchema); // Message es el nombre de la colección
module.exports = model;