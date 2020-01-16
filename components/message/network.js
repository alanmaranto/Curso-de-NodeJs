const express = require("express");
const response = require("../../network/response");

const router = express.Router();
const controller = require("./controller.js");

router.get("/", (req, res) => {
  controller
    .getMessages()
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpected error", 500, e);
    });
});

router.post("/", (req, res) => {
  console.log(req.query);
  controller
    .addMessage(req.body.user, req.body.message)
    .then(fullMessage => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(
        req,
        res,
        "Informacion invalida",
        400,
        "Error en el controlador"
      );
    });
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
