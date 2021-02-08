import { Message, MessageAttachment } from "discord.js";
import { Command as Cmd } from "../utils/command";
import { Debug } from "../utils/debug";
import Jimp from "jimp";
namespace Command {
    const font: string = Jimp.FONT_SANS_16_WHITE

    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if((args?.join(" ") || "").length < 20){
            Jimp.read("./src/assets/orthmonkey.png").then(img => {
                Jimp.loadFont(font).then(f => {
                    img.print(f, 59, 40, {
                        text: args?.join(" "),
                        alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
                        alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM
                    }, (err, v) => {
                        if(err){
                            Debug.bot(err)
                            msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
                            return
                        }
                        v.getBuffer(Jimp.MIME_PNG, (err, v) => {
                            if(err){
                                Debug.bot(err)
                                msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
                                return
                            }
                            msg.channel.send(new MessageAttachment(v, 'orthograf.png'))
                        })
                    })
                })
            }).catch(err => {
                msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
            })
        }else{
            msg.channel.send("Pavé César")
        }
    }
}

export { Command }