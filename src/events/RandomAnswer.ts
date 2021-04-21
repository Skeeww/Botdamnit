import { client } from "../main";
import { Debug } from "../utils/debug";

export namespace RandomAnswer {
    Debug.bot("[RandomAnswer] event loaded")

    client.on("message", msg => {
        if(msg.author.bot) return
        const odd = Math.random();
        if(odd < 0.002){
            msg.channel.send(`AH OUAIS ${msg.author.username} ?! ${msg.content.toUpperCase()}`)
        }else if(odd >= 0.002 && odd < 0.004){
            msg.channel.send(`${msg.author.username} tu viens vraiment de dire ça sur ${msg.guild?.members.cache.random().displayName} !!!!`)
        }else if(odd >= 0.004 && odd < 0.008){
            msg.channel.send(`${msg.author.username} en vrai ce que tu dis est interessant`)
        }
    })
}