// socketManager.js
const socketIO = require('socket.io');

let io;

const initializeSocket = (server) => {
  io = new socketIO.Server(server, { cors: { origin: '*', methods: '*' } });

  io.on('connection', (socket) => {
    console.log('connected');

    // Handle events here
    socket.on('Test topic', (message) => {
      console.log('Received message:', message);
      io.emit('chat message', message); // Broadcast to all connected clients
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};

const getIO = () => {
  return io; // Return the io object directly
};

module.exports = {
  initializeSocket,
  getIO,
};
