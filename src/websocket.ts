import { io } from "./http";



io.on("connection", (socket) => {
    console.log("Connection successfully established!");
    socket.on("userOnline", (data) => {

      console.log(`acabou de entrar`)

   })
 
    socket.on("select_room", (data, callback)=> {
    });

  });