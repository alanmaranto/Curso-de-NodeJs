const express = require('express');
const router = express.Router();

const app = express();
app.use(router);

router.get('/', (req,res) => {
    res.send('Lista de mensajes (hola desde get)');
});

router.post('/', (req,res) => {
    res.send('Mensaje añadido (Hola desde post)');
});

router.put('/', (req,res) => {
    res.send('Mensaje editado (Hola desde put)');
});

router.patch('/', (req,res) => {
    res.send('Mensaje editado (Hola desde patch)');
});

router.delete('/', (req,res) => {
    res.send('Mensaje borrado (Hola desde delete)');
});

app.listen(3000, () => {
    console.log('Telegram listening on port 3000')
});