import { MessageEmbed } from "discord.js";
import mc from "minecraft-server-util";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    if (!cmd.args.length) {
        cmd.msg.channel.send("Vous devez passer en paramètre une IP")
        return
    }
    const ip: string = cmd.args[0]
    mc.status(ip.split(":")[0], { port: parseInt(ip.split(":")[1]) || 25565 }).then((res) => {
        let embed: MessageEmbed = new MessageEmbed()
        embed.setTitle(`${res.host}:${res.port}`)
        embed.setDescription(res.description)
        embed.addField("Nombre de joueurs:", `${res.onlinePlayers}/${res.maxPlayers}`, true)
        embed.addField("Version:", res.version, true)
        embed.setColor(0x00ff00)
        cmd.msg.channel.send(embed)
    }).catch(() => {
        let embed: MessageEmbed = new MessageEmbed()
        embed.setTitle(`${ip.split(":")[0]}:${ip.split(":")[1] || 25565}`)
        embed.setDescription("Serveur inaccessible")
        embed.setColor(0xff0000)
        cmd.msg.channel.send(embed)
    })
}