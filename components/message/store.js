const Model = require("./model");

const addMessage = message => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = filterChat => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterChat !== null) {
      filter = { chat: filterChat };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populatedData) => {
        if (error) {
          reject(error);
          return false;
        }

        resolve(populatedData);
      })
  });
};

const updateText = async (id, message) => {
  const foundedMessage = await Model.findOne({
    _id: id
  });

  foundedMessage.message = message;
  const newMessage = await foundedMessage.save();
  return newMessage;
};

const removeMessage = id => {
  return Model.deleteOne({
    _id: id
  });
};

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
};
