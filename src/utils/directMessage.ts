import { Message, TextChannel } from "discord.js"
import * as fs from "fs"
import { client, config } from "../main"

namespace DirectMessage {
    export function handle(msg: Message){
        console.log(`${msg.author.username}: ${msg.content}`)
        fs.readFile("./banwords.txt", (err, data) => {
            console.log(data)
        })
        console.log(msg.content.indexOf('pute'))
        /*(client.guilds.cache.find(g => g.id === config.GUILD_ID)?.channels.cache.find(c => c.id === config.CHANNELS.ANO) as TextChannel).send(
            `${msg.content}\n==========`
        )*/
    }
}

export { DirectMessage }