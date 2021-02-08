import { Message } from "discord.js";
import { Command as Cmd } from "../utils/command";
import { Config } from "../utils/config";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if(args !== undefined){
            if(args.length >= 2){
                const type = args.shift()
                const payload = args.join('').toUpperCase()
                switch (type) {
                    case "bin2hex":
                        msg.channel.send(`\`${payload}\` (2) => \`${parseInt(payload, 2).toString(16).toUpperCase()}\` (16)`)
                        break;
                    case "hex2bin":
                        msg.channel.send(`\`${payload}\` (16) => \`${parseInt(payload, 16).toString(2)}\` (2)`)
                        break;
                    case "dec2bin":
                        msg.channel.send(`\`${payload}\` (10) => \`${parseInt(payload, 10).toString(2)}\` (2)`)
                        break;
                    case "bin2dec":
                        msg.channel.send(`\`${payload}\` (2) => \`${parseInt(payload, 2).toString(10)}\` (10)`)
                        break;
                    default:
                        msg.channel.send("__Types disponibles__ `bin2hex` `hex2bin` `dec2bin` `bin2dec`")
                        break;
                }
            }else{
                msg.channel.send(`La commande doit être sous la forme \`${Config.PREFIX}${cmd.command}(ou ${cmd.aliases}) <type> <valeur>\``)
            }
        }
    }
}

export { Command }