import { Guild, GuildChannel, Message, TextChannel } from "discord.js";
import { client } from "../main";
import { Config } from "./config";

namespace DirectMessage {
    export function handle(msg: Message){
        const guild = client.guilds.cache.find(g => g.id === Config.GUILD_ID)
        if(guild){
            const chann = guild.channels.cache.find(c => c.id === Config.GROUPE_CALIN)
            if(chann){
                (chann as TextChannel).send(msg.content)
                msg.channel.send(":white_check_mark: Message envoyé !")
            }
        }
    }
}

export { DirectMessage }