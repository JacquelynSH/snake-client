// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    port: PORT,
    ip: IP
  });
  // adds inititials upon connection
  conn.on("connect", () => {
    console.log("Name: JH");
  });
  conn.setEncoding("utf8");
  // logs message when you've idled for to long
  conn.on("data", () => {
    console.log('you ded cuz you idled');
  });
  return conn;
};
// logged while the connection is connecting.
console.log("Connecting ...");

// exports the connect function to input.js
module.exports = {connect};