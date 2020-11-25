import { Message } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        msg.channel.send("https://media.discordapp.net/attachments/750403075751149673/781178745791971368/unknown.png");
    }
}

export { Command }