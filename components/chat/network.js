const express = require("express");
const response = require("../../network/response");

const router = express.Router();
const controller = require("./controller.js");

//  Crea un chat
router.post('/', (req, res) => {
    controller.addChat(req.body.users)
    .then(data => {
        response.success(req,res, data, 201);
    })
    .catch(err => {
        response.error(req,res, 'Internal Error', 500, err)
    })
})

// Trae solo los chats de un user
router.get('/:userId', (req,res) => {
    controller.listChats(req.params.userId)
    .then(users => {
        response.success(req, res, users, 200);
    })
    .catch(err => {
        response.error(req,res, 'Internal error', 500, err);
    })
});

module.exports = router;