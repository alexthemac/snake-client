const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //console.logs data recieved from server ("data" is an event, there are multiple events eg "close", "connect", "data" etc...)
  conn.on("data", (data) => {
    console.log(data)
  })
  return conn;
};

console.log("Connecting ...");
connect();