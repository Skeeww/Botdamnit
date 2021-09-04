import { HandledCommand } from "../utils/commandHandler";
import * as fs from "fs";
import { MessageAttachment, ReactionUserManager } from "discord.js";

export function run(cmd: HandledCommand) {
    fs.readdir(`./src/hidden/renegats`, {}, (err, files) => {
        if(err) throw err
        if(files.length <= 0) ReactionUserManager
        fs.readFile(`./src/hidden/renegats/${files[Math.floor(Math.random() * (files.length))]}`, (err, data) => {
            if(err) throw err
            cmd.msg.channel.send({ files: [new MessageAttachment(data)] })
        })
    })
}