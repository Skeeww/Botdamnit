import { client } from "../main"
import { Config } from "../utils/config"
import { Debug } from "../utils/debug"

export namespace Suite {
    Debug.bot("[Suite] event loaded")

    let n: number = 0

    client.on('messageCreate', (msg) => {
        if(msg.author.bot || msg.channel.id != Config.get_instance().CHANNELS.RECURENCE){ return }
        const input_number: number = parseInt(msg.content)
        if(input_number !== NaN && input_number === n + 1){
            msg.react('✅')
            n++
        }else{
            if(n >= 100){
                client.guilds.resolve(Config.get_instance().GUILD_ID)?.members.resolve(msg.author.id)?.kick("Image ne pas savoir compter")
                msg.channel.send(`Salut ${msg.author.username} !`)
            }
            msg.react('❌')
            msg.channel.send(`Série de ${n} !`)
            n = 0
        }
    })
}
