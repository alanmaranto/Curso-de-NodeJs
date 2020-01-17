const socketIO = require('socket.io');
const socket = {}; // Generamos socket como un objeto 

function connect(server) {
    socket.io = socketIO(server) // Inicializzamos io dentro la variable socket
}

module.exports = {
    connect,
    socket,
}