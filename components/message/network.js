const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  });
  response.success(req, res, "Lista de mensajes");
});

router.post("/", (req, res) => {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "Es solo una simulacion de los errores"
    );
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

module.exports = router;
