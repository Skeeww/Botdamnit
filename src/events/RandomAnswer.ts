import { randomInt } from "node:crypto";
import { client } from "../main";
import { Debug } from "../utils/debug";

export namespace RandomAnswer {
    Debug.bot("[RandomAnswer] event loaded")

    client.on("message", msg => {
        const odd = randomInt(100);
        if(odd < 2){
            msg.channel.send(`Okay ${msg.author.username} mais du coup ${msg.content} c'est genre super interessant en faite !`)
        }else if(odd >= 2 && odd < 4){
            msg.channel.send(`En vrai ${msg.author.username} tu devrais écouter VALD`)
        }else if(odd >= 4 && odd < 8){
            msg.channel.send(`${msg.author.username} zap ni la un ni la dos ni la tres`)
        }
    })
}