import { Message } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {

    interface IGameRank {
        name: string
        rank_id: string
    }

    const ranks = require("../config/ranks.json")
    let rName: Array<string> = []
    let rId: Array<string> = []

    ranks.forEach((r: IGameRank) => {
        rName.push(r.name)
        rId.push(r.rank_id)
    })

    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if(!args?.length){
            msg.channel.send(`Liste des jeux disponibles: ${rName.join(", ")}`)
            return
        }
        if(rName.includes(args[0])){
            msg.member?.roles.add(rId[rName.indexOf(args[0])]).then(() => {
                msg.channel.send(":white_check_mark: Grade assigné !")
            })
            return
        }
        msg.channel.send("Jeu non trouvé ! La liste est disponible avec la commande `*rank`")
    }
}

export { Command }