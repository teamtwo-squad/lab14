'use strict';


const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;

const server = socketio(PORT);
const caps = server.of('/caps');

const insultArray = ['remember that one super embarrassing thing you did in HS?', 'You are loved and appreciated by no one', 'I know youre not 6ft bro', 'Peep the hairline', 'You dont drink enough water', 'Look up your symptoms on google', 'you dont call your family members enough'];



function insultGenerator(){
  let anxiety = insultArray[Math.floor(Math.random() * (insultArray.length - 1))];
  console.log(anxiety);
  return 'Heres your extra anxiety ' + anxiety;
}
function newInsult(insult){
  insultArray.push(insult);
}



caps.on('connection', (socket) =>  {
  console.log('socket connected');

  // socket.on('join', room => {
  //   socket.join(room);
  // });

  socket.on('roastme', payload => {

    socket.broadcast.emit('roastme', payload);

    logger('roastme', payload.Id);
  });


  socket.on('thinking', (payload) => {
    socket.emit('thinking', payload);
    logger('thinking', payload.Id);
  });

  
  socket.on('hope this helps', payload => {
    socket.broadcast.emit('hope this helps', payload);
    socket.emit('hope this helps', payload);
    insultGenerator();
    logger('hope this helps', payload.Id);
  
  });
});




function logger(event, payload) {
  let timestamp = new Date();

  console.log('Event' , event, timestamp);
}


