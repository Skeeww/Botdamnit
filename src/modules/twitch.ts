import { Activity, GuildMember, MessageEmbed, TextChannel } from "discord.js";
import { client, config } from "../main";
import { Debug } from "../utils/debug";
import { IModule } from "./tick";

class Twitch implements IModule {
    name: string = "Twitch"
    exec: Function = (freq: number) => {
        let inStream: Array<GuildMember> = []
        setInterval(() => {
            client.guilds.cache.find(g => g.id === config.GUILD_ID)?.members.cache.forEach(m => {
                if (m.presence.status !== "offline" && m.presence.status !== "invisible") {
                    const a: Activity = m.presence.activities[0]
                    if (a != undefined) {
                        if (a.type === "STREAMING" && !inStream.includes(m as GuildMember)) {
                            inStream.push(m as GuildMember);
                            const embed: MessageEmbed = new MessageEmbed();
                            embed.setTitle(`${m.displayName} EST EN LIVE !`);
                            embed.setDescription(`${a.details}`);
                            embed.setThumbnail(a.assets?.smallImageURL() || '');
                            embed.setURL(a.url || '');
                            (m.guild.channels.cache.find(c => c.id === config.CHANNELS.SHARE) as TextChannel).send(embed);
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