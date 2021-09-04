import { MessageAttachment } from "discord.js";
import { readFileSync } from "fs";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    let content: string = ""
    if (cmd.args.length > 0) {
        content = cmd.args.join(" ")
    }
    if(Math.random() >= 0.5){
        cmd.msg.channel.send(`Alors, ${content} comme ça tu triches ?`)
    }else{
        cmd.msg.channel.send(`${content}, mais avant, je lance la procédure prévue en cas de triche !`)
    }
    cmd.msg.channel.send({ files: [new MessageAttachment(readFileSync("./src/assets/NEDEREX.png"))] })
}