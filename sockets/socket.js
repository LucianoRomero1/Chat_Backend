const { io } = require("../index");
//Lo busco del index porque en ese archivo lo exporté

//Sockets
io.on("connection", (client) => {
  console.log("Connected client");

  client.on("disconnect", () => {
    console.log("Disconnected client");
  });

  // client.on("message", (payload) => {
  //   console.log("Message!", payload);

  //   io.emit("message", { admin: "New message" });
  // });
});
