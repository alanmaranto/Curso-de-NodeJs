const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
});

const model = mongoose.model('User', mySchema); // User es el nombre de la colección
module.exports = model;