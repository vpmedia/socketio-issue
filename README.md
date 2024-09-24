# socketio-issue

Reproducing issue reported at https://github.com/socketio/socket.io/issues/5194

1. sio-server % npm start
2. sio-client % npm start
3. close sio-server process (CTRL-C)
4. notice max. callstack error in sio-client window
