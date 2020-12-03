import { Message, MessageAttachment } from "discord.js";
import { readFile } from "fs";
import { Command as Cmd } from "../utils/command";
import { Debug } from "../utils/debug";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        readFile("./src/assets/cringe.mp4", (err, data) => {
            if(err){
                Debug.bot(err)
                msg.channel.send("Tellement cringe que le bot a crash ! *send uwu in the chat*\n```" + err + "```")
                return
            }
            msg.channel.send(new MessageAttachment(data, "cringe.mp4"))
        })
    }
}

export { Command }