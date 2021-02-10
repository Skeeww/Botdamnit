import { MessageEmbed, TextChannel } from "discord.js";
import { client, config } from "../main";
import { HandledCommand } from "../utils/commandHandler";

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

    constructor(question: string, answers: Array<string>) {
        this.question = question
        answers.forEach((answer, i) => {
            this.answers.set(answer, emotesReact[i])
        })
    }

    send() {
        client.guilds.fetch(config.GUILD_ID).then(guild => {
            const embed = new MessageEmbed();
            this.answers.forEach((v, k) => {
                embed.addField(k, v, true);
            });
            embed.setTitle(this.question);
            (guild.channels.cache.find(c => c.id === config.CHANNELS.POLLS) as TextChannel).send(embed).then((m) => {
                this.answers.forEach((v) => {
                    m.react(v)
                })
            })
        }).catch(() => {
            return false
        })
    }
}

const regexp: RegExp = /:([0-9]*)>/g

export function run(cmd: HandledCommand) {
    if (cmd.args.length) {
        cmd.args = cmd.args.join(" ").split(",")
        if (cmd.args.length < 2 && cmd.args.length > 10) {
            cmd.msg.channel.send("Attention ! Les sondages doivent contenir entre 1 et 10 réponses")
            return
        }
        const poll: Poll = new Poll(cmd.args.pop()!, cmd.args)
        poll.send()
        cmd.msg.channel.send("Sondage créé !")
    }
}