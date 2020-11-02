import { Message } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    const tar: Date = new Date(2020, 12, 1)

    let t: Number

    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        const now: Date = new Date(Date.now())
        if(tar.getTime() - now.getTime() > 0){
            switch(Math.floor((Math.random() * 3) + 1)){
                case 1:
                    t = Math.round(tar.getTime() / 1000 - now.getTime() / 1000)
                    msg.channel.send(`Il reste exactement \`${t} secondes\` avant la fin du **No Nut November**`)
                    break
                case 2:
                    t = Math.round(31 - now.getDate())
                    msg.channel.send(`Il reste \`${t} jours\` avant la fin du **No Nut November**`)
                    break
                case 3:
                    t = Math.round(tar.getTime() / 3600000 - now.getTime() / 3600000)
                    msg.channel.send(`Il reste exactement \`${t} heures\` avant la fin du **No Nut November**`)
                    break
            }
        }else{
            msg.channel.send(`C'est fini félicitation sur tu l'as réussi ! Sinon ce n'est pas grave tu seras meilleur pour la prochaine fois`)
        }
    }
}

export { Command }