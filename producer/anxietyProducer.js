//on crying do this
//client
// publisher and subscriber
'use strict';

const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3001/caps');

socket.on('roastme', payload => {
  console.log('Picked up order: ', payload.orderId);

  socket.emit('thinking', payload);

  setTimeout(() => {
    socket.emit('hope ts helps', payload);
  }, 3000);
});
