import { Message, MessageEmbed, TextChannel } from "discord.js";
import { client } from "../main";
import { Command as Cmd } from "../utils/command";
import { Config } from "../utils/config";

const emotesReact = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]

interface IPoll {
    question: string,
    answers: Map<string, string>,
    startTime: Date
}

class Poll implements IPoll {
    question = ""
    answers = new Map()
    startTime = new Date()

    constructor(question: string, answers: Array<string>){
        this.question = question
        answers.forEach((answer, i) => {
            this.answers.set(answer, emotesReact[i])
        })
    }

    send(){
        client.guilds.fetch(Config.GUILD_ID).then(guild => {
            const embed = new MessageEmbed();
            this.answers.forEach((v, k) => {
                embed.addField(k, v, true);
            });
            embed.setTitle(this.question);
            (guild.channels.cache.find(c => c.id === Config.POLLS) as TextChannel).send(embed).then((m) => {
                this.answers.forEach((v) => {
                    m.react(v)
                })
            })
        }).catch(() => {
            return false
        })
    }
}

namespace Command {
    const regexp: RegExp = /:([0-9]*)>/g

    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>) {
        if(typeof args === "undefined") return
        args = args.join(" ").split(",")
        if(args.length < 2 && args.length > 10){
            msg.channel.send("Attention ! Les sondages doivent contenir entre 1 et 10 réponses")
            return
        }
        const poll: Poll = new Poll(args.pop() || "ERROR", args)
        poll.send()
        msg.channel.send("Sondage créé !")
    }
}

export { Command }