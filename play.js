//Importing using ES6 Shorthand syntax
const {connect} = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

//this does not do anything extra for some reason...
const handleUserInput = function (key) {
  if(key === '\u0003') {
    process.exit();
  }
};

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin


