// emit crying
//client
//publisher and subscriber
// measure tph
'use strict';

const uuid = require('uuid').v4
// const  faker  = require('@faker-js/faker');


const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3001/caps');

let payload = {
  Id: uuid(),
  customer: 'arthur',
  message: 'help i need to be humbled'
}

console.log(payload.Id);

socket.emit('roastme',payload);


socket.on('hope this helps', payload => {
  console.log('thanks for delivering : ' + payload.Id);
});
