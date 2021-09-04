import { HandledCommand } from "../utils/commandHandler";
import QRCode from 'qrcode';
import { MessageAttachment } from "discord.js";
import fs from "fs";

export function run(cmd: HandledCommand) {
    if(cmd.args.length === 0){
        cmd.msg.channel.send("Il manque du texte")
        return
    }
    QRCode.toFile('./qr.png', cmd.args.join(' '), {
        errorCorrectionLevel: 'L',
        type: 'png',
        width: 250
    }).then(() => {
        fs.readFile(`./qr.png`, (err, data) => {
            if(err){
                cmd.msg.channel.send(`Erreur: \`${err}\``)
                return
            }
            cmd.msg.channel.send({ files: [new MessageAttachment(data)] })
        })
    }).catch(err => {
        cmd.msg.channel.send(`Erreur: \`${err}\``)
    })
}