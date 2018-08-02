var app = require("express")();
var server = require("http").Server("app");
var io = require("socket.io")(server);
var randomRoomCreator = require("./random_room_id");
var rooms = [];
var players = [];


server.listen(8080, function(){
    console.log("Server is running now")
})

io.on("connection" , function(socket){
    socket.emit("socketID",{id : socket.id});
    console.log("Player connected id:" + socket.id);    

    socket.on("disconnect", function(){
        console.log("Player disconnected id:" + socket.id);
    })
})

