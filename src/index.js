import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import io from 'socket.io-client';


var ws = new WebSocket("ws://127.0.0.1:8081/");
ws.onmessage = function (event) {
  console.log(event);
};

ws.onopen = function(event) {
  ws.send("ok");
};

let worker = new Worker('/worker.js');
worker.onmessage = function(e) {
  console.log(e.data);
};
worker.postMessage(['a']);
//worker = worker.terminate();

ReactDOM.render(
  <p>Test</p>,
  document.getElementById("main")
);
