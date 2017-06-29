onmessage = function(e) {
  console.log("message", e.data);
  postMessage([]);
};
