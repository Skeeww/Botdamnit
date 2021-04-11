import { Message, TextChannel } from "discord.js"
import * as fs from "fs"
import { client, config } from "../main"

namespace DirectMessage {
    let banwords: Array<string> = new Array()

    banwords = fs.readFileSync("./banwords.txt").toString().replace('\r', '').split('\n')

    console.log(banwords)

    export function handle(msg: Message){
        let found: boolean = false
        let i: number = 0
        while(!found && i < banwords.length){
            if(msg.content.indexOf(banwords[i]) != -1){
                found = true
            }else{
                i++
            }
        }
        if(!found){
            (client.guilds.cache.find(g => g.id === config.GUILD_ID)?.channels.cache.find(c => c.id === config.CHANNELS.ANO) as TextChannel).send(
                `${msg.content}\n==========`
            )
        }else{
            msg.channel.send("Ton message contient du contenu pouvant être offenssant. Il n'a donc pas été envoyé")
        }
    }
}

export { DirectMessage }