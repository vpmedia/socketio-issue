import { createServer } from "node:http";
import { Server } from "socket.io";

process.on("uncaughtException", (error) => {
    console.error(error);
})

export const srv = createServer();

export const server = new Server(srv, {
    cors: {
        origin: "*",
    },
    transports: ['websocket'],
    allowUpgrades: false,
    serveClient: false,
});
server.on("connection", (/** @type {import('socket.io').Socket} */ socket) => {
    console.log("connection", socket.id);
});

server.on("disconnected", (/** @type {import('socket.io').Socket} */ socket) => {
    console.log("disconnected", socket.id);
});

const port = 8080;
srv.listen(port, () => {
    console.log(`Listening on port ${port}`);
});