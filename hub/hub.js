'use strict';



const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;
const INDEX = '/index.html';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const server = socketio(PORT);
// const caps = server.of('/caps');
const caps = socketio.connect(`https://teamtwo-squad-lab-14.herokuapp.com/caps`);
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
// function newInsult(insult){
//   insultArray.push(insult);
// }

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
    // socket.emit('hope this helps', payload);
    logger('hope this helps', payload.Id);  
  });
});

function logger(event, payload) {
  let timestamp = new Date();
  console.log('Event' , event, timestamp);
}

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));