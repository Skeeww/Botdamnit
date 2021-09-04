import { Activity, GuildMember, MessageEmbed, TextChannel } from "discord.js";
import { client } from "../main";
import { Config } from "../utils/config";
import { Debug } from "../utils/debug";
import { IModule } from "./tick";

class Twitch implements IModule {
    name: string = "Twitch"
    exec: Function = (freq: number) => {
        let inStream: Array<GuildMember> = []
        setInterval(() => {
            client.guilds.cache.find(g => g.id === Config.get_instance().GUILD_ID)?.members.cache.forEach(m => {
                if (m.presence === null) return
                if(m.presence.status !== "offline" && m.presence.status !== "invisible") {
                    const a: Activity = m.presence!.activities[0]
                    if (a) {
                        if (a.type === "STREAMING" && !inStream.includes(m as GuildMember)) {
                            inStream.push(m as GuildMember);
                            const embed: MessageEmbed = new MessageEmbed();
                            embed.setTitle(`${m.displayName} EST EN LIVE !`);
                            embed.setDescription(`${a.details}`);
                            embed.setThumbnail(a.assets?.smallImageURL() || '');
                            embed.setURL(a.url || '');
                            (m.guild.channels.cache.find(c => c.id === Config.get_instance().CHANNELS.SHARE) as TextChannel).send({embeds: [embed]});
                            Debug.bot(`${m.user.username} added to inStream`);
                        }
                        if (a.type !== "STREAMING" && inStream.includes(m as GuildMember)) {
                            inStream.splice(inStream.indexOf(m as GuildMember), 1);
                            Debug.bot(`${m.user.username} removed from inStream`);
                        }
                    }
                }
            })
        }, freq)
    }
}

export { Twitch }