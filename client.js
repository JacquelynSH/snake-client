// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    port: PORT,
    ip: IP
  });

  conn.on("connect", () => {
    console.log("Name: JH");

  });
  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log('you ded cuz you idled');
  });
  return conn;
};

console.log("Connecting ...");


module.exports = {connect};