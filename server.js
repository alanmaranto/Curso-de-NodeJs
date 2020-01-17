const express = require("express");
const router = require('./network/routes');
const db = require('./db');
const socket = require('./socket')
const cors = require('cors')

db("mongodb+srv://db_user_telegram:rgI8WhoyqiBNNWj2@cluster0-7l7x7.mongodb.net/telegram")

const app = express();
const server = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server)

router(app)

app.use('/', express.static('public'));

server.listen(3000, () => {
  console.log("Telegram listening on port 3000");
});
