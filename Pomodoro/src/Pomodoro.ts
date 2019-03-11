import net from "net";
import { Notify } from "./Notify";

/**
 * Pomodoro server interface. Running in background, client will be used to communicate with it
 */
export class Pomodoro {

    private server: any;
    private notifications: Notify;

    constructor() {
        const self = this;

        this.notifications = new Notify();

        this.server = net.createServer((socket) => {
            socket.on("data", (data: string) => {
                const response = data.toString();

                self.notifications.send(response, 2000);
            });
        });
    }

    public messageServer() {
        //
    }

    public startServer() {
        this.server.listen(6152, "127.0.0.1");
    }
}
