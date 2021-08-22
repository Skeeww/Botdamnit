import { Message, TextChannel } from "discord.js"
import { client, config } from "../main"

namespace DirectMessage {
    export function handle(msg: Message){
        (client.guilds.cache.find(g => g.id === config.GUILD_ID)?.channels.cache.find(c => c.id === config.CHANNELS.ANO) as TextChannel).send(
            `${msg.content}\n==========`
        )
    }
}

export { DirectMessage }