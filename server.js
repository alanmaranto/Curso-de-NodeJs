const express = require("express");
const router = require('./network/routes');
const db = require('./db');
const socket = require('./socket')
const cors = require('cors')
const {config} = require('./config/index')

db(config.dbUrl);

const app = express();
const server = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server)

router(app)

app.use('/', express.static('public'));

server.listen(config.port, () => {
  console.log(`Telegram listening on port ${config.port}`);
});
