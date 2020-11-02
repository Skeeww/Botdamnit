import { GuildMember, MessageEmbed, TextChannel } from "discord.js";
import { client } from "../main";
import { Config } from "../utils/config";
import { IModule } from "./tick";

class Twitch implements IModule{
    name: string = "Twitch"
    exec: Function = (freq: number) => {
        let inStream: Array<GuildMember> = []
        setInterval(() => {
            client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.members.cache.forEach(m => {
                m.presence.activities.forEach(a => {
                    if(a.type === "STREAMING" && !inStream.includes(m)){
                        const embed: MessageEmbed = new MessageEmbed()
                        embed.setTitle(`${m.displayName} EST EN LIVE !`)
                        embed.setDescription(`${a.details}`)
                        embed.setThumbnail(a.assets?.smallImageURL() || '')
                        embed.setURL(a.url || '')
                        inStream.push(m);
                        (m.guild.channels.cache.find(c => c.id === Config.SHARE) as TextChannel).send(embed)
                    }
                    if(a.type !== "STREAMING" && inStream.includes(m)){
                        inStream.splice(inStream.indexOf(m), 1)
                    }
                })
            })
        }, freq)
    }
}

export { Twitch }