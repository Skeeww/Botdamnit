import { MessageEmbed } from "discord.js";
import { config } from "../main";
import { isCommand } from "../middlewares/checkCommands";
import { Command } from "../utils/command";
import { HandledCommand } from "../utils/commandHandler";

function sendHelpOfCommand(command: Command): MessageEmbed {
    let embed: MessageEmbed = new MessageEmbed()
    embed.setTitle(`====${command.name}====`)
    embed.setDescription(`${command.usage}`)
    if (command.param.length) {
        embed.addField("Paramètres", `${command.param.join(" ")}`)
    }
    embed.addField("Alias", `${command.aliases.join(", ")}`)
    return embed
}

function sendHelp(): MessageEmbed {
    let embed: MessageEmbed = new MessageEmbed()
    embed.setTitle("====ASSITANCE MICROSOFT====")
    embed.setDescription("Menu d'aide pour les différentes commandes")
    Command.getAllCommands().forEach(cmd => {
        embed.addField(cmd.name, `${cmd.command}`, true)
    })
    return embed
}

export function run(cmd: HandledCommand) {
    if (cmd.args.length) {
        if (isCommand(config.PREFIX + cmd.args[0])) {
            cmd.msg.channel.send(sendHelpOfCommand(new Command(cmd.args[0])))
        } else {
            cmd.msg.channel.send(`La commande \`${cmd.args[0]}\` n'existe pas !`)
        }
    } else {
        cmd.msg.channel.send(sendHelp())
    }
}