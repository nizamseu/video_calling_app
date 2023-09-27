const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");

app.use(cors());
const { Server } = require("socket.io");
const expresssServer = http.createServer(app);

const io = new Server(expresssServer, {
  cors: true,
});

const emailToSocketMap = new Map();
const socketIdToEmailMap = new Map();
io.on("connection", (socket) => {
  // Join the room
  socket.emit("room:join", (data) => {
    console.log("data", data);
    const { email, roomid } = data;
    emailToSocketMap(email);
    socketIdToEmailMap(roomid);
    io.to(socket.id).emit("room:join", data);
  });
  console.log("socket Connected", socket.id);
});

expresssServer.listen(4000, function () {
  console.log("listening on port 4000");
});
