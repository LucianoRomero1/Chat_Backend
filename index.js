const express = require("express");
const path = require("path");
require("dotenv").config();

//DB Config
const { dbConnection } = require("./database/config");
dbConnection();

//Express App
const app = express();

//Body parser
app.use(express.json());

//Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");

//Public path
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//Routes
app.use('/api/login', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/messages', require('./routes/messages'));


server.listen(process.env.PORT, (error) => {
  if (error) throw new Error(error);

  console.log("Server running in port ", process.env.PORT);
});
