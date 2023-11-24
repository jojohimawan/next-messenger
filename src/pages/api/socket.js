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

        socket.on('message', (message) => {
            io.emit('message', message);
        });

        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });

        socket.on('sendTyping', (data) => {
            io.emit('accTyping', data);
            console.log('typing');
        });

        socket.on('message-sent', (data) => {
            io.emit('message-received', data);
            console.log('message sent');
        });
    });

    console.log('setting up socket...');
    res.end();
}