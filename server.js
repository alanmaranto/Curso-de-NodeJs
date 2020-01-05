const express = require('express');
const app = express();

app.use('/', (req,res) => {
    res.send('Hola');
});

app.listen(3000, () => {
    console.log('Telegram listening on port 3000')
});