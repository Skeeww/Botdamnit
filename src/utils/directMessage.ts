import { Message, TextChannel } from "discord.js"
import { Config } from "./config"

namespace DirectMessage {
    export function handle(msg: Message){
        (msg.guild?.channels.cache.find(c => c.id === Config.get_instance().CHANNELS.ANO) as TextChannel).send(
            `${msg.content}\n==========`
        )
    }
}

export { DirectMessage }