"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
const checkCommands_1 = require("../middlewares/checkCommands");
const guard_1 = require("../middlewares/guard");
const command_1 = require("../utils/command");
const config_1 = require("../utils/config");
function sendHelpOfCommand(command) {
    let embed = new discord_js_1.MessageEmbed();
    embed.setColor("#FF22AA");
    embed.setTitle(`${command.name}`);
    embed.setDescription(`${command.usage}`);
    if (command.param.length) {
        embed.addField("Paramètres", `${command.param.join(" ")}`);
    }
    embed.addField("Alternatives", `${command.aliases.join(", ")}`);
    return embed;
}
function sendHelp(member) {
    let embed = new discord_js_1.MessageEmbed();
    embed.setColor("#FF22AA");
    embed.setTitle("Menu d'aide");
    embed.setDescription("Pour avoir plus d'information sur une commande spécifique faites .help <command>");
    command_1.Command.getAllCommands().forEach(cmd => {
        if (guard_1.checkPerm(member, cmd)) {
            embed.addField(cmd.name, `\`${config_1.Config.get_instance().PREFIX}${cmd.command}\` ${cmd.usage}`, false);
        }
    });
    return embed;
}
function run(cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        if (cmd.args.length) {
            if (checkCommands_1.isCommand(config_1.Config.get_instance().PREFIX + cmd.args[0])) {
                cmd.msg.channel.send({ embeds: [sendHelpOfCommand(new command_1.Command(cmd.args[0]))] });
            }
            else {
                cmd.msg.channel.send(`La commande \`${cmd.args[0]}\` n'existe pas !`);
            }
        }
        else {
            (yield cmd.author.createDM()).send({ embeds: [sendHelp(cmd.msg.member)] });
        }
    });
}
exports.run = run;
//# sourceMappingURL=help.js.map