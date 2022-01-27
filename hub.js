'use strict';


const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = socketio(PORT);
const caps = server.of('/caps');


caps.on('connection', (socket) =>  {
  console.log('socket connected');

  socket.on('join', room => {
    socket.join(room);
  });

  socket.on('pickup', payload => {

    socket.broadcast.emit('pickup', payload);
  });
  socket.on('in-transit', payload => {
    // run logger
    socket.emit('in-transit', payload);
  });
  socket.on('delivery', payload => {
    socket.broadcast.emit('delivery', payload);
  });

});

function logger() {

}