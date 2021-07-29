// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //Exits connection if ctl + c is input
  if(key === '\u0003') {
    process.exit(); 
  }
  //Keys below cause the snake to move in certain direction
  if(key === "w") {
    connection.write("Move: up")
  }
  if(key === "a") {
    connection.write("Move: left")
  }
  if(key === "s") {
    connection.write("Move: down")
  }
  if(key === "d") {
    connection.write("Move: right")
  }
  //Keys below allow the snake to say stuff
  if(key === "q") {
    connection.write("Say: MOOOOOO")
  }
  if(key === "r") {
    connection.write("Say: BUCKBUCKBUCK")
  }
  if(key === "e") {
    connection.write("Say: riiiiiiiii")
  }
};

module.exports = {setupInput};
