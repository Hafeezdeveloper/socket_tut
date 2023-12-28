const express = require('express');
const app = express();
const mongoose= require('mongoose');
require('dotenv').config();
// const passport = require('passport');
// const session = require('express-session');
const cors = require('cors');
const Studentrouter = require('./Router/StudentPortal');
const router = require('./Router/User');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { initializeSocket } = require('./Router/SocketmANAGER.JS');
const { getIO } = require('./Router/SocketmANAGER.JS');
const { conversationModel } = require('./Modal/StudentModel');
const { sendResponse } = require('./Helper/sendRespose');
// socketManager.js
const http = require('http'); // Node.js core module for creating HTTP servers
const socketIO = require('socket.io');

app.use(express.json());

app.use(cors());

app.post("/api/userMessage/send", async (req, res) => {
    let {from, to, message} = req.body
    let obj =  {from, to, message}
    try {
        console.log("api ok h ")
        let result = conversationModel(obj) 
        await result.save()
        if(!result){
            res.send(sendResponse("false",null , "Data not Send" , "error")).status(404)
        }else{
            io.emit(`${req.body.to}-${req.body.from}`, result);
            res.send("sucessfu").status(200)
        }
    } catch (e) {
        console.log(e)
        res.status(500).send(sendResponse(false,null , "Error occurred", "error"));
    }
})


app.use("/api/admin" , Studentrouter);
app.use("/api/user" ,router);



const server = http.createServer(app);
let io;
// handing over server access to socket.io
io = new socketIO.Server(server, { cors: { origin: '*', methods: '*' } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    // to emit data to a certain client
    socket.emit("topic 1", "some data")
    

    // collecting connected users in a array
    // connectedUsers.push(socket)

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});





mongoose.connect(process.env.MONGO_URI)
.then( (succ) =>{
    server.listen(process.env.PORT, () =>{
        console.log("server is start and Mongo is connected")
    })
})  
.catch( (err) =>{
    console.log(err)
})
