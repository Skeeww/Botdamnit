import { HandledCommand } from "../utils/commandHandler";
import * as fs from "fs";
import { MessageAttachment, MessageEmbed, ReactionUserManager } from "discord.js";

export function run(cmd: HandledCommand) {
    fs.readdir(`./src/hidden/`, {}, (err, files) => {
        if(err) throw err
        if(files.length <= 0) ReactionUserManager
        fs.readFile(`./src/hidden/${files[Math.floor(Math.random() * (files.length))]}`, (err, data) => {
            if(err) throw err
            cmd.msg.channel.send({ attachments: [new MessageAttachment(data)]})
        })
    })
}