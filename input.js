//imports the connect function from client.js
const connect = require("./client.js");

let connection;
console.log(connection)
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'm') {
    connection.write("Say: HOWDY");
  }  else if (key === 'n') {
    connection.write("Say: YEEHAW");
  } else if (key === 'b') {
    connection.write("Say: GIDDY UP!");
  }
};



module.exports = {setupInput};

