const { userConectted, userDisconnect, saveMessage } = require("../controllers/socket");
const { checkJWT } = require("../helpers/jwt");
const { io } = require("../index");
//Lo busco del index porque en ese archivo lo exporté

//Sockets
io.on("connection", (client) => {
  console.log("Connected client");

  const [valid, uid] = checkJWT(client.handshake.headers['x-token']);
  //Verifico que llegue un JWT sino lo saco
  if(!valid){
    return client.disconnect();
  }

  userConectted(uid);

  client.join(uid);

  client.on('personal-message', async (payload) => {
    await saveMessage(payload);
    io.to(payload.to).emit('personal-message', payload);
  });

  client.on("disconnect", () => {
    console.log("Disconnected client");
    userDisconnect(uid);
  });

  // client.on("message", (payload) => {
  //   console.log("Message!", payload);

  //   io.emit("message", { admin: "New message" });
  // });
});
