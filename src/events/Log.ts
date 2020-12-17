import { TextChannel } from "eris";
import { client } from "../main";
import { Config } from "../utils/config";

export namespace Log {
    const LogChannel: TextChannel = (client.guilds.get(Config.GUILD_ID)?.channels.get(Config.LOG_CHANNEL) as TextChannel)

    client.on("channelCreate", () => {
        LogChannel.createMessage({
            embed: {
                title: "Nouveau channel"
            }
        })
    })
    client.on("channelDelete", () => {
        LogChannel.createMessage({
            embed: {
                title: "Channel supprimé"
            }
        })
    })
    client.on("channelUpdate", () => {
        LogChannel.createMessage({
            embed: {
                title: "Channel mis à jour"
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
                }
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
                }
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
                }
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
                }
            }
        })
    })
}