import { MessageAttachment } from "discord.js";
import { Debug } from "../utils/debug";
import { HandledCommand } from "../utils/commandHandler";
import Jimp from "jimp";

const font: string = Jimp.FONT_SANS_16_WHITE

export function run(cmd: HandledCommand) {
    cmd.args = cmd.args.join(" ").split(",")
    if (cmd.args.length > 0 && cmd.args.join(" ").length <= 15) {
        Jimp.read("./src/assets/sardoche.png").then((img) => {
            Jimp.loadFont(font).then(f => {
                img.print(f, 294, 188, {
                    text: cmd.args.join(" "),
                    alignmentX: Jimp.HORIZONTAL_ALIGN_LEFT,
                    alignmentY: Jimp.VERTICAL_ALIGN_TOP
                }).getBuffer(Jimp.MIME_PNG, (err, v) => {
                    if (err) {
                        Debug.bot(err)
                        cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
                        return
                    }
                    cmd.msg.channel.send({ files: [new MessageAttachment(v, 'feu.png')] })
                })
            })
        }).catch((err) => {
            cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```")
        })
    } else {
        cmd.msg.channel.send("Faites du bruit les gars")
    }
}