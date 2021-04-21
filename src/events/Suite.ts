import { client, config } from "../main"
import { Debug } from "../utils/debug"

export namespace Suite {
    Debug.bot("[Suite] event loaded")

    let n: number = 0

    client.on('message', (msg) => {
        if(msg.author.bot || msg.channel.id != config.CHANNELS.RECURENCE){ return }
        const input_number: number = parseInt(msg.content)
        if(input_number !== NaN && input_number === n + 1){
            msg.react('✅')
            n++
        }else{
            msg.react('❌')
            msg.channel.send(`Série de ${n} !`)
            n = 0
        }
    })
}