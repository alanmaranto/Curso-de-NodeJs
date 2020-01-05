const express = require('express');
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(router);

router.get('/', (req,res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    })
    res.send('Lista de mensajes (hola desde get)');
});

router.post('/', (req,res) => {
    res.status(201).send([{ error: '', body: 'mensaje eliminado'}]);
});

router.put('/', (req,res) => {
    res.send('Mensaje editado (Hola desde put)');
});

router.patch('/', (req,res) => {
    res.send('Mensaje editado (Hola desde patch)');
});

router.delete('/', (req,res) => {
    res.send('Mensaje eliminado (Hola desde delete');
});

app.listen(3000, () => {
    console.log('Telegram listening on port 3000')
});