import { client } from "../main";
import { Debug } from "../utils/debug";

export namespace RandomAnswer {
    Debug.bot("[RandomAnswer] event loaded")

    client.on("message", msg => {
        if(msg.author.bot) return
        const odd = Math.random();
        if(odd < 0.02){
            msg.channel.send(`FUCK TOI ${msg.author.username} MOI JE PENSE QUE ${msg.content}`)
        }else if(odd >= 0.02 && odd < 0.04){
            msg.channel.send(`En vrai ${msg.author.username} tu devrais écouter VALD`)
        }else if(odd >= 0.04 && odd < 0.08){
            msg.channel.send(`${msg.author.username} zap ni la un ni la dos ni la tres`)
        }
    })
}