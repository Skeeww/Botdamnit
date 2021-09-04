import { GuildMember, MessageEmbed } from "discord.js";
import { isCommand } from "../middlewares/checkCommands";
import { checkPerm } from "../middlewares/guard";
import { Command } from "../utils/command";
import { HandledCommand } from "../utils/commandHandler";
import { Config } from "../utils/config";

function sendHelpOfCommand(command: Command): MessageEmbed {
    let embed: MessageEmbed = new MessageEmbed()
    embed.setColor("#FF22AA")
    embed.setTitle(`${command.name}`)
    embed.setDescription(`${command.usage}`)
    if (command.param.length) {
        embed.addField("Paramètres", `${command.param.join(" ")}`)
    }
    embed.addField("Alternatives", `${command.aliases.join(", ")}`)
    return embed
}

function sendHelp(member: GuildMember): MessageEmbed {
    let embed: MessageEmbed = new MessageEmbed()
    embed.setColor("#FF22AA")
    embed.setTitle("Menu d'aide")
    embed.setDescription("Pour avoir plus d'information sur une commande spécifique faites .help <command>")
    Command.getAllCommands().forEach(cmd => {
        if(checkPerm(member, cmd)){
            embed.addField(cmd.name, `\`${Config.get_instance().PREFIX}${cmd.command}\` ${cmd.usage}`, false)
        }
    })
    return embed
}

export async function run(cmd: HandledCommand) {
    if (cmd.args.length) {
        if (isCommand(Config.get_instance().PREFIX + cmd.args[0])) {
            cmd.msg.channel.send({embeds: [sendHelpOfCommand(new Command(cmd.args[0]))]})
        } else {
            cmd.msg.channel.send(`La commande \`${cmd.args[0]}\` n'existe pas !`)
        }
    } else {
        (await cmd.author.createDM()).send({embeds: [sendHelp(cmd.msg.member!)]})
    }
}