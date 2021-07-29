const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // console.logs locally (client side) data received from server ("data" is an event, there are multiple events eg "close", "connect", "data" etc...)
  conn.on("data", (data) => {
    console.log(data)
  });
  // console.logs locally (client side) "Succesfully connected to server! :)" when "connect" event occurs (ie when we connect to server succesfully)
  conn.on("connect", () => {
    console.log("Succesfully connected to server! :)")
  });
  // sends 'Name: ALX' (to server) when "connect" event occurs (ie when we connect to server succesfully) 
  conn.on('connect', () => {
    conn.write('Name: ALX');
  });
  conn.on('connect', () => {
    //conn.write('Move: up'); //=> moves up immediately after connecting
    // setInterval(() => conn.write('Move: up'), 50) //=> moves up every 50 mS. 
    // setTimeout(() => conn.write('Move: left'), 1000); //=> moves left after 1 second
  });
 
  return conn;
};

//Exporting using ES6 Shorthand syntax
module.exports = {connect};
