import { getChats } from './api/Users'

const options = { /* ... */ };
const io = require('socket.io')(9000, options);


io.on('connection', (socket:any) => {
    console.log("connection up")
    socket.on('chats', (id: any) => {
        console.log(id)
        const chats = getChats(id)
        console.log(chats)
        socket.emit('chats', chats)

    })
});