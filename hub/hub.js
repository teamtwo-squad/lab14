'use strict';


const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;

const server = socketio(PORT);
const caps = server.of('/caps');



caps.on('connection', (socket) =>  {
  console.log('socket connected');

  // socket.on('join', room => {
  //   socket.join(room);
  // });

  socket.on('roastme', payload => {

    socket.broadcast.emit('roastme', payload);
    logger('roastme', payload.Id)
  });
  socket.on('think', (payload) => {
    // run logger
    socket.emit('thinking', payload);
  });
  socket.on('hope this helps', payload => {
    socket.broadcast.emit('hope this helps', payload);
  });
});




function logger(event, payload) {
  let timestamp = new Date();

  console.log('Event' , event, timestamp);
}