import axios from "axios";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    if(cmd.args.length === 0){
        cmd.msg.channel.send("Il manque un lien")
        return
    }
    axios.get(cmd.args[0]).then(v => {
        cmd.msg.channel.send(`Le site **${cmd.args[0]}** à répondu avec le code \`${v.status} - ${v.statusText}\``)
    }).catch(err => {
        cmd.msg.channel.send(`Le site **${cmd.args[0]}** est innaccessible \`${err}\``)
    })
}