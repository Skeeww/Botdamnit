import { Message, TextChannel } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        let time = 30
        if(args?.length === 1){ time = parseInt(args[0]) }
        (msg.channel as TextChannel).setRateLimitPerUser(time, "bot").then(() => {
            msg.channel.send("https://media1.tenor.com/images/8dc4387d86af21d417809358fa982f22/tenor.gif")
        }).catch((err) => {
            msg.channel.send(`Oh fuck une erreur: #sendUwUinthechat \`${err}\` `)
        })
    }
}

export { Command }