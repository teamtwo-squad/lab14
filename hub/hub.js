'use strict';



// const socketio = require('socket.io');

const PORT = process.env.PORT || 3001;

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// const server = socketio(PORT);
// const caps = server.of('/caps');
// const caps = socketio.connect(`https://teamtwo-squad-lab-14.herokuapp.com/io`);
app.get('/', function(req, res) {
  res.sendfile('anxietyReciever.js');
});
// function newInsult(insult){
//   insultArray.push(insult);
// }

io.on('connection', (socket) =>  {
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

http.listen(PORT, function() {
  console.log('listening on *:3001');
});
// const server = express()
//   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));