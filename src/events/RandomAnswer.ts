import { client } from "../main";
import { Debug } from "../utils/debug";

export namespace RandomAnswer {
    Debug.bot("[RandomAnswer] event loaded")

    const quoi_words = [
        "ffer",
        "tron",
        "ffeur",
    ]

    client.on("messageCreate", async msg => {
        if(msg.author.bot) return
        const odd = Math.random();
        const text = msg.content.replace("?", "").replace("!", "").trim()
        if(odd < 0.002){
            msg.channel.send(`AH OUAIS ${msg.member?.displayName} ?! ${msg.content.toUpperCase()}`)
        }else if(odd < 0.004){
            msg.channel.send(`${msg.author.username} tu viens vraiment de dire ça sur ${msg.guild?.members.cache.random()?.displayName} !!!!`)
        }else if(odd < 0.008){
            msg.channel.send(`${msg.author.username} en vrai ce que tu dis est interessant`)
        }else if(odd < 0.1 && text.endsWith("quoi")) {
            msg.channel.send(quoi_words[Math.floor(quoi_words.length * Math.random())])
        } else if(odd < 0.1 && text.endsWith("ner") || text.endsWith("nez") || text.endsWith("né") || text.endsWith("née")) {
            msg.channel.send("gros")
        }
    })
}