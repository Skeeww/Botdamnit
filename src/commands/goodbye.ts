import { Message, MessageAttachment } from "discord.js";
import { readFile } from "fs";
import { client } from "../main";
import { Command as Cmd } from "../utils/command";
import { Config } from "../utils/config";
import { Debug } from "../utils/debug";
import { FfmpegCommand } from "fluent-ffmpeg";

namespace Command {
    //const command = new FfmpegCommand()

    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        readFile("./src/assets/uknowtherule.mp4", (err, data) => {
            if(err){
                Debug.bot(err)
                msg.channel.send("Le bot a givup ! *send uwu in the chat*\n```" + err + "```")
                return
            }
            if(msg.mentions){
                msg.mentions.users.first()?.avatarURL({format: "jpeg"})
            }
            msg.channel.send(new MessageAttachment(data, "uknowtherule.mp4"))
        })
    }
}

export { Command }