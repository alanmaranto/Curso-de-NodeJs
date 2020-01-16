const db = require("mongoose");
const Model = require("./model");

const uri = "mongodb+srv://db_user_telegram:rgI8WhoyqiBNNWj2@cluster0-7l7x7.mongodb.net/telegram"
db.Promise = global.Promise;
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] Base De Datos Conectada con éxito'))
    .catch(err => console.error('[db]', err));

const addMessage = message => {
    const myMessage = new Model(message);
    myMessage.save();
};

 const getMessages = async (filterUser) => {
     let filter = {};
     if(filterUser !== null) {
        filter = { user: filterUser };
     }
  const messages = await Model.find(filter);
  return messages;
};

 const updateText = async (id, message) => {
    const foundedMessage = await Model.findOne({
        _id:id
    });

    foundedMessage.message = message;
    const newMessage = await foundedMessage.save();
    return newMessage;
}

const removeMessage = (id) => {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};
