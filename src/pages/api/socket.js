import { Server } from "socket.io";

export default function handler(req, res) {
    if(res.socket.server.io) {
        console.log('socket already exists');
        res.end();
        return;
    }

    const io = new Server(res.socket.server, {
        path: '/api/socket',
        addTrailingSlash: false,
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
            transports: ['websocket', 'polling'],
        },
        allowEIO3: true
    }).listen(3000);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        socket.on('joinRoom', (data) => {
            socket.join(data);
            console.log('joined room: ' + data);
            io.to(data).emit('joinedRoom', `join room: ${data}`);
        });

        socket.on('leaveRoom', (data) => {
            socket.leave(data);
            console.log('left room: ' + data);
            io.to(data).emit('leftRoom', `left room: ${data}`);
        });
        
        socket.on('message-sent', (data) => {
            console.log(data.room_id)
            io.to(data.room_id).emit('message-received', data);
            console.log('message sent');
        });
        
        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });

    console.log('setting up socket...');
    res.end();
}