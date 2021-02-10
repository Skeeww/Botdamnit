import { TextChannel } from "discord.js";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    let time = 30
    if (cmd.args.length === 1) { time = parseInt(cmd.args[0]) }
    (cmd.msg.channel as TextChannel).setRateLimitPerUser(time, "bot").then(() => {
        cmd.msg.channel.send("https://media1.tenor.com/images/8dc4387d86af21d417809358fa982f22/tenor.gif")
    }).catch((err) => {
        cmd.msg.channel.send(`Oh fuck une erreur: #sendUwUinthechat \`${err}\` `)
    })
}