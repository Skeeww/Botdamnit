import { Message } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        msg.content === "ping" ? msg.channel.send("Pong !") : msg.channel.send("Ping !")
    }
}

export { Command }