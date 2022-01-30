// emit crying
//client
//publisher and subscriber
// measure tph
'use strict';


const uuid = require('uuid').v4;






const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3001/caps');


function nameGenerator(){
  const nameArray = ['Pants','Thunder', 'Star', 'Danger', 'Hospital', 'Fire', 'Dagger', 'Tree', 'Bird', 'Butt', 'Penguin', 'Water', 'Earth', 'Air', 'Candle', 'Socks', 'Pirate', 'Wing', 'Light', 'Andriod17', 'Rain', 'Tornado', 'Volcano', 'Person', 'Car'];

  let firstName = nameArray[Math.floor(Math.random() * (nameArray.length - 1))];

  let lastName = nameArray[Math.floor(Math.random() * (nameArray.length - 1))];

  let userName = firstName + ' ' + lastName;
  
  console.log(userName);
  return userName;
}


let payload = {
  Id: uuid(),
  customer: nameGenerator(),
  message: 'Help I need to be humbled',
};

setInterval(() => {

  socket.emit('roastme',payload);
  console.log('Roast request from customer' , payload.customer);

}, 5000);

socket.on('thinking', (payload) => {

  console.log('Order #', payload.Id, 'received');
});


socket.on('hope this helps', payload => {

  console.log('roast complete : ' + payload.Id);

  process.exit();
});

