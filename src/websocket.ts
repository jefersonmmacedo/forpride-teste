import { io } from "./http";



io.on("connection", (socket) => {
    console.log(`User Connection ${socket.id}`)
    console.log("Connection successfully established!");



    // Recebendo e listando users online
    socket.on("userOnline", (data) => {

      console.log(`acabou de entrar`)

   })

  
    socket.on("select_room", (data, callback)=> {
    });

  });