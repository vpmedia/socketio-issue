import { WebSocket } from "engine.io-client";
import { io } from "socket.io-client";

process.on("uncaughtException", (error) => {
    console.error(error);
})

const socketOptions = {
    autoConnect: true,
    transports: [WebSocket], // NodeWebSocket, WebSocket, WebTransport
};
export const client = io("http://127.0.0.1:8080", socketOptions);
client.on("connect", () => {
    console.log("connect");
});
client.on("disconnect", () => {
    console.log("disconnect");
});
client.on("connect_error", (error) => {
    console.log("connect_error", error.type);
});
client.on("error", (error) => {
    console.log("error", error.type);
});
