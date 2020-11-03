import { Message, MessageEmbed } from "discord.js";
import { Command as Cmd } from "../utils/command";
import mc from "minecraft-server-util";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if(!args?.length){
            msg.channel.send("Vous devez passer en paramètre une IP")
            return
        }
        const ip: string = args[0]
        mc.status(ip.split(":")[0], {port: parseInt(ip.split(":")[1]) || 25565}).then(res => {
            let embed: MessageEmbed = new MessageEmbed()
            embed.setTitle(`${res.host}:${res.port}`)
            embed.setDescription(res.description)
            embed.addField("Nombre de joueurs:", `${res.onlinePlayers}/${res.maxPlayers}`, true)
            embed.addField("Version:", res.version, true)
            embed.setColor(0x00ff00)
            msg.channel.send(embed)
        }).catch(r => {
            let embed: MessageEmbed = new MessageEmbed()
            embed.setTitle(`${ip.split(":")[0]}:${ip.split(":")[1] || 25565}`)
            embed.setDescription("Serveur inaccessible")
            embed.setColor(0xff0000)
            msg.channel.send(embed)
        })
    }
}

export { Command }