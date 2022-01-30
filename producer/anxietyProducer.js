//on crying do this
//client
// publisher and subscriber
'use strict';

const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3001/caps');



socket.on('roastme', payload => {
  console.log('Roast request from:', payload.customer, '***** Id number:', payload.Id);

  setTimeout(() => {
    socket.emit('thinking', payload);
  }, 3000);
  

  setTimeout(() => {
    socket.emit('hope this helps', payload);
  }, 3000);

  process.exit();
});
