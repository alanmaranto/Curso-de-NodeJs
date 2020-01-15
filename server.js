const express = require("express");
const router = express.Router();

const response = require("./network/response");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Error inesperado", 500, 'Es solo una simulacion de los errores');
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

router.put("/", (req, res) => {
  res.send("Mensaje editado (Hola desde put)");
});

router.patch("/", (req, res) => {
  res.send("Mensaje editado (Hola desde patch)");
});

router.delete("/", (req, res) => {
  res.send("Mensaje eliminado (Hola desde delete");
});

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log("Telegram listening on port 3000");
});
