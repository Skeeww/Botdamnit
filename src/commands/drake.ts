import { MessageAttachment } from "discord.js";
import { Debug } from "../utils/debug";
import { HandledCommand } from "../utils/commandHandler";
import Jimp from "jimp";

const font: string = Jimp.FONT_SANS_32_WHITE

export function run(cmd: HandledCommand) {
    cmd.args = cmd.args.join(" ").split(",")
    if (cmd.args.length === 2) {
        const textUp: string = cmd.args[0].trim()
        const textDown: string = cmd.args[0].trim()
        Jimp.read("./src/assets/big_papoo_yes_no.png").then((img) => {
            Jimp.loadFont(font).then(f => {
                img.print(f, 305, 280, {
                    text: cmd.args.join(" "),
                    alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
                    alignmentY: Jimp.VERTICAL_ALIGN_TOP
                }, (err, v) => {
                    if (err) {
                        Debug.bot(err)
                        cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
                        return
                    }
                    v.getBuffer(Jimp.MIME_PNG, (err, v) => {
                        if (err) {
                            Debug.bot(err)
                            cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
                            return
                        }
                        cmd.msg.channel.send(new MessageAttachment(v, 'renaud.png'))
                    })
                })
            })
        }).catch((err) => {
            cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
        })
    } else {
        cmd.msg.channel.send("Pavé César")
    }
}