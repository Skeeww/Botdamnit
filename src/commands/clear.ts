import { Message, TextChannel } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        let msgNumber: number = 100;

        if(args?.length){
            msgNumber = parseInt(args[0])
        }
        
        (msg.channel as TextChannel).bulkDelete(msgNumber).then(() => {
            msg.channel.send(`Nettoyage de ${msgNumber} messages`)
        }).catch(() => {
            msg.channel.send(`Une erreur est survenu #sendUwU in the tchat !`)
        })
    }
}

export { Command }