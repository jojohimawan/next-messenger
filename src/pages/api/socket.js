// import { Server as NetServer } from 'http';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Server as ServerIO, Socket } from 'socket.io';

// type NextApiResponseServerIo = {
//     NextApiResponse & {
//         socket: Socket & {
//             server: NetServer & {
//                 io: ServerIO;
//             }
//         }
//     }
// }

// const SocketHandler = (req: any, res: any) => {
//     if(!res.socket.server.io) {
//         console.log('setting up')
//         const path = "/api/socket";
//         const httpServer: NetServer = res.socket.server as any;
//         const io = new ServerIO(httpServer, {
//             path: path,
//             addTrailingSlash: false,
//         });

//         io.on("connection", (socket) => {
//                         console.log(`Socket connected: ${socket.id}`);
            
//                         socket.on('message', (message) => {
//                             io.emit('message', message);
//                         })
            
//                         socket.on('disconnect', () => {
//                             console.log(`Socket disconnected: ${socket.id}`);
//                         });
//         res.socket.server.io = io;
//     }

//     res.end();
// }

// export default SocketHandler

import { Server } from "socket.io";

export default function handler(req, res) {
    if(res.socket.server.io) {
        console.log('socket udh ada');
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
        })

        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });

        socket.on('sendTyping', (data) => {
            io.emit('accTyping', data);
            console.log('typing');
        })
    });

    console.log('setting up socket woyyyy');
    res.end();
}