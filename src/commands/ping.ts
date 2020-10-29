import { Message } from "discord.js";

namespace Command {
    export function run(msg: Message, args?: Array<string>){
        msg.channel.send("Pong !")
    }
}

export { Command }