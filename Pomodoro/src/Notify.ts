import NodeNotifier from "node-notifier";

const NotifySend: any = NodeNotifier.NotifySend;

export class Notify {
    private sender: any = NotifySend;

    constructor() {
        this.sender = new NotifySend();
    }

    public send(message: string, wait?: number) {
        this.sender.notify(
            {
              icon: __dirname + "/../res/icon.png",
              message,
              title: "Pomodoro Timer!",
            });
    }
}