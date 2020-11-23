import { Message } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if(args?.length === 0){
            msg.channel.send("Il manque le message ducon")
        }else{
            for(let i = 0; i < 10; i++){
                msg.channel.send(args?.join(" ") || "").catch(() => {
                    msg.channel.send("Putain j'suis en sueur là !")
                });
            }
        }
    }
}

export { Command }