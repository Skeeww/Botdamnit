import { Message, MessageAttachment } from "discord.js";
import { readFile } from "fs";
import { Command as Cmd } from "../utils/command";
import { Debug } from "../utils/debug";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        readFile("./src/assets/notfunny.mp4", (err, data) => {
            if(err){
                Debug.bot(err)
                msg.channel.send("Le bot n'est pas très funny non plus ! *send uwu in the chat*\n```" + err + "```")
                return
            }
            msg.channel.send(new MessageAttachment(data, "notfunny.mp4"))
        })
    }
}

export { Command }