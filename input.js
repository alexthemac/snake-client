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
  if(key === '\u0003') {
    process.exit();
  }
  if(key === "w") {
    // for(let i = 0; i < 20; i++) {
    //   connection.write("Move: up")
    // }
    connection.write("Move: up")
    // setInterval(() => connection.write('Move: up'), 200)


  }
  if(key === "a") {
    // for(let i = 0; i < 10; i++) {
    //   connection.write("Move: left")
    // }
    connection.write("Move: left")

    // setInterval(() => connection.write('Move: left'), 200);
  }
  if(key === "s") {
    // for(let i = 0; i < 10; i++) {
    //   connection.write("Move: down")
    // }
    connection.write("Move: down")
    //console.log("Move: down")
    // setInterval(() => connection.write('Move: down'), 200);
  }
  if(key === "d") {
    // for(let i = 0; i < 10; i++) {
    //   connection.write("Move: right")
    // }
    connection.write("Move: right")
    //console.log("Move: right")
    // setInterval(() => connection.write('Move: right'), 200);
  }
};

module.exports = {setupInput};
