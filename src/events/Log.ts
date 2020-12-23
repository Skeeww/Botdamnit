import { TextChannel, EmbedField } from "eris";
import { client } from "../main";
import { Config } from "../utils/config";

export namespace Log {
    const LogChannel: TextChannel = (client.guilds.get(Config.GUILD_ID)?.channels.get(Config.LOG_CHANNEL) as TextChannel)

    client.on("channelCreate", (chan) => {
        LogChannel.createMessage({
            embed: {
                title: "Nouveau channel",
                fields: [
                    ({name: "Nom", value: LogChannel.guild.channels.get(chan.id)?.name, inline: false} as EmbedField)
                ],
                color: 0x00ff00
            }
        })
    })
    client.on("channelDelete", (chan) => {
        LogChannel.createMessage({
            embed: {
                title: "Channel supprimé",
                color: 0xff0000
            }
        })
    })
    client.on("channelUpdate", (chan, oldchan) => {
        LogChannel.createMessage({
            embed: {
                title: "Channel mis à jour",
                fields: [
                    ({name: "Nom", value: LogChannel.guild.channels.get(chan.id)?.name, inline: false} as EmbedField)
                ],
                color: 0x0000ff
            }
        })
    })
    client.on("guildBanAdd", (guild, user) => {
        LogChannel.createMessage({
            embed: {
                title: "Utilisateur banni",
                description: user.username,
                thumbnail: {
                    url: user.avatarURL
                },
                color: 0xff0000
            }
        })
    })
    client.on("guildBanRemove", (guild, user) => {
        LogChannel.createMessage({
            embed: {
                title: "Utilisateur débanni",
                description: user.username,
                thumbnail: {
                    url: user.avatarURL
                },
                color: 0xff0000
            }
        })
    })
    client.on("guildMemberAdd", (guild, member) => {
        LogChannel.createMessage({
            embed: {
                title: "Nouveau membre",
                description: member.username,
                thumbnail: {
                    url: member.avatarURL
                },
                color: 0x00ff00
            }
        })
    })
    client.on("guildMemberRemove", (guild, member) => {
        LogChannel.createMessage({
            embed: {
                title: "Membre parti",
                description: member.user.username,
                thumbnail: {
                    url: member.user.avatarURL
                },
                color: 0xff0000
            }
        })
    })
}