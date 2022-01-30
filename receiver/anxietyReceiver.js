// emit crying
//client
//publisher and subscriber
// measure tph
'use strict';


const uuid = require('uuid').v4;






const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3001/caps');
const insultArray = [
  'remember that one super embarrassing thing you did in HS?', 
  'You are loved and appreciated by no one', 
  'I know you are not 6ft bro', 
  'Peep the hairline', 
  'You dont drink enough water', 
  'Do you even lift bro?', 
  'I think you are ok no matter what anyone says.', 
  'Look up your symptoms on google', 'you dont call your family members enough'];

function insultGenerator(){
  let anxiety = insultArray[Math.floor(Math.random() * (insultArray.length - 1))];

  return 'Heres your extra anxiety: ' + anxiety;
}

function nameGenerator(){
  const nameArray = [
    'Refrigerator', 
    'Steve', 
    'Dark',
    'Pants',
    'Thunder', 
    'Star',
    'Steves Mom', 
    'Danger', 
    'Hospital', 
    'Fire', 
    'Dagger', 
    'Tree', 
    'Bird', 
    'Butt', 
    'Penguin', 
    'Water', 
    'Earth', 
    'Air', 
    'Emily is trash', 
    'Candle', 
    'Socks', 
    'Pirate', 
    'Wings', 
    'Light', 
    'Andriod17', 
    'Rain', 
    'Tornado', 
    'Volcano', 
    'Person', 
    'Car', 
  ];

  let firstName = nameArray[Math.floor(Math.random() * (nameArray.length - 1))];

  let lastName = nameArray[Math.floor(Math.random() * (nameArray.length - 1))];

  let userName = firstName + ' ' + lastName;
  
  return userName;
}


let payload = {
  Id: uuid(),
  customer: nameGenerator(),
  message: 'Help I need to be humbled',
};

setInterval(() => {

  socket.emit('roastme', payload);
  console.log('Roast request from customer' , payload.customer);

}, 6000);

socket.on('thinking', (payload) => {

  console.log('Order #', payload.Id, 'received');
});


socket.on('hope this helps', payload => {

  console.log('roast complete : ' +  insultGenerator());

  setTimeout(() => {
    process.exit();
  
  }, 2000);

});

