import { Message, MessageEmbed } from "discord.js";
import { CheckCommands } from "../middlewares/checkCommands";
import { Command as Cmd } from "../utils/command";
import { Config } from "../utils/config";

namespace Command {

    function sendHelpOfCommand(command: Cmd.Command): MessageEmbed{
        let embed: MessageEmbed = new MessageEmbed()
        embed.setTitle(`====${command.name}====`)
        embed.setDescription(`${command.usage}`)
        if(command.param.length){
            embed.addField("Paramètres", `${command.param.join(" ")}`)
        }
        embed.addField("Alias", `${command.aliases.join(", ")}`)
        return embed
    }

    function sendHelp(): MessageEmbed{
        let embed: MessageEmbed = new MessageEmbed()
        embed.setTitle("====ASSITANCE MICROSOFT====")
        embed.setDescription("Menu d'aide pour les différentes commandes")
        Cmd.getAllCommands().forEach(cmd => {
            embed.addField(cmd.name, `${cmd.command}\n${cmd.aliases}`, true)
        })
        return embed
    }

    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if(args?.length){
            if(CheckCommands.isCommand(Config.PREFIX + args[0])){
                msg.channel.send(sendHelpOfCommand(new Cmd.Command(args[0])))
            }else{
                msg.channel.send(`La commande \`${args[0]}\` n'existe pas !`)
            }
        }else{
            msg.channel.send(sendHelp())
        }
    }
}

export { Command }