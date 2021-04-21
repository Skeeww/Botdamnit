"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
var checkCommands_1 = require("../middlewares/checkCommands");
var command_1 = require("../utils/command");
function sendHelpOfCommand(command) {
    var embed = new discord_js_1.MessageEmbed();
    embed.setTitle("====" + command.name + "====");
    embed.setDescription("" + command.usage);
    if (command.param.length) {
        embed.addField("Paramètres", "" + command.param.join(" "));
    }
    embed.addField("Alias", "" + command.aliases.join(", "));
    return embed;
}
function sendHelp() {
    var embed = new discord_js_1.MessageEmbed();
    embed.setTitle("====ASSITANCE MICROSOFT====");
    embed.setDescription("Menu d'aide pour les différentes commandes");
    command_1.Command.getAllCommands().forEach(function (cmd) {
        embed.addField(cmd.name, "" + cmd.command, true);
    });
    return embed;
}
function run(cmd) {
    if (cmd.args.length) {
        if (checkCommands_1.isCommand(main_1.config.PREFIX + cmd.args[0])) {
            cmd.msg.channel.send(sendHelpOfCommand(new command_1.Command(cmd.args[0])));
        }
        else {
            cmd.msg.channel.send("La commande `" + cmd.args[0] + "` n'existe pas !");
        }
    }
    else {
        cmd.msg.channel.send(sendHelp());
    }
}
exports.run = run;
//# sourceMappingURL=help.js.map