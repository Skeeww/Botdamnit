import { client } from "../main"
import { Config } from "../utils/config"
import { Debug } from "../utils/debug"

export namespace Suite {
    Debug.bot("[Suite] event loaded")

    let n: number = 102

    client.on('messageCreate', (msg) => {
        if(msg.author.bot || msg.channel.id != Config.get_instance().CHANNELS.RECURENCE){ return }
        const input_number: number = parseInt(msg.content)
        if(input_number !== NaN && input_number === n + 1){
            msg.channel.send(`Le dernier nombre trouvé est ${++n}`)
            msg.react('✅')
        }else{
            msg.react('❌')
            msg.channel.send(`Série de ${n} !`)
            n = 0
        }
    })
}
