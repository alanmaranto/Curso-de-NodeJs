const express = require("express");

const router = require('./network/routes');
const db = require('./db');

db("mongodb+srv://db_user_telegram:rgI8WhoyqiBNNWj2@cluster0-7l7x7.mongodb.net/telegram")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app)

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log("Telegram listening on port 3000");
});
