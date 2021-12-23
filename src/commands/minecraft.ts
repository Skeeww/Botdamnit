import { MessageEmbed } from "discord.js";
import mc from "minecraft-server-util";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    if (!cmd.args.length) {
        cmd.msg.channel.send("Vous devez passer en paramètre une IP")
        return
    }
    const ip: string = cmd.args[0]
    const port: number = parseInt(ip.split(":")[1]) || 25565
    mc.status(ip.split(":")[0], port).then((res) => {
        let embed: MessageEmbed = new MessageEmbed()
        embed.setTitle(`${ip}:${port}`)
        embed.setDescription(res.motd.clean || "Aucune description")
        embed.addField("Nombre de joueurs:", `${res.players.online}/${res.players.max}`, true)
        embed.addField("Version:", res.version.name || "Version inconnue", true)
        embed.setColor(0x00ff00)
        cmd.msg.channel.send({ embeds: [embed] })
    }).catch(() => {
        let embed: MessageEmbed = new MessageEmbed()
        embed.setTitle(`${ip}:${port}`)
        embed.setDescription("Serveur inaccessible")
        embed.setColor(0xff0000)
        cmd.msg.channel.send({ embeds: [embed] })
    })
}