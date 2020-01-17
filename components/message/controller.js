const store = require("./store");
const { config } = require('../../config/index');
const { socket } = require("../../socket.js");

const addMessage = (chat, user, message, file) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[messageController] No hay chat, usuario o mensaje");
      reject("Los datos son incorrectos");
      return false;
    }

    let fileUrl = "";
    if (file) {
      fileUrl = `${config.dbHost}${config.port}/app/files/` + file.filename;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
    };

    store.add(fullMessage);

    socket.io.emit("message", fullMessage);
    resolve(fullMessage);
  });
};

const getMessages = filterChat => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    console.log(id);
    console.log(message);
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }

    const result = await store.updateText(id, message);

    resolve(result);
  });
};

const deleteMessage = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }

    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
