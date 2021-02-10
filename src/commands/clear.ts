import { TextChannel } from "discord.js";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    let msgNumber: number = 100;

    if (cmd.args.length) {
        msgNumber = parseInt(cmd.args[0])
    }

    (cmd.msg.channel as TextChannel).bulkDelete(msgNumber).then(() => {
        cmd.msg.channel.send(`Nettoyage de ${msgNumber} messages`)
    }).catch(() => {
        cmd.msg.channel.send(`Une erreur est survenu #sendUwU in the tchat !`)
    })
}