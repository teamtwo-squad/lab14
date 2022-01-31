'use strict';

// on crying do this
// client
// publisher and subscriber

const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3001/caps');

socket.on('roastme', payload => {
  console.log('Picked up order: ', payload.Id);

  setTimeout(() => {
    socket.emit('thinking', payload);
  }, 2000);

  setTimeout(() => {
    socket.emit('hope this helps', payload);  
  }, 2000);

  setTimeout(() => {
    process.exit();  
  }, 2000);
});
