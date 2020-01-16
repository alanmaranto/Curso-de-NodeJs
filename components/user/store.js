const Model = require("./model");

const getAllUsers = async () => {
    const users = await Model.find()
    return users;
}

const addUser = (user) => {
    const myUser = new Model(user);
    return myUser.save();
}

module.exports = {
    add: addUser,
    list: getAllUsers,
}