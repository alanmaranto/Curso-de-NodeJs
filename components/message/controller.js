const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        };

        store.add(fullMessage)
        console.log(user);
        console.log(message);
    
        console.log(fullMessage);
        resolve(fullMessage);
    });
};

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessages
};