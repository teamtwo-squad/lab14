// emit crying
//client
//publisher and subscriber
// measure tph
'use strict';


const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3000/caps');

socket.emit('pickup', {
  storeId: ';alskdj92839847',
  orderId: '23764hjaseiaf',
  customer: 'Jacob',
  address: '123 Super Cool St.',
});

socket.on('delivery', payload => {
  console.log('thanks for delivering : ' + payload.orderId);
});