const store = require("./store");

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

const addUser = name => {
  if (!name) {
    return Promise.reject("Invalid name");
  }
  const user = {
    name
  };

  return store.add(user);
};

module.exports = {
  addUser,
  getAllUsers
};
