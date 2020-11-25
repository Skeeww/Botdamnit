"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var discord_js_1 = require("discord.js");
var checkCommands_1 = require("../middlewares/checkCommands");
var command_1 = require("../utils/command");
var config_1 = require("../utils/config");
var Command;
(function (Command) {
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
            embed.addField(cmd.name, cmd.command + "\n" + cmd.aliases, true);
        });
        return embed;
    }
    function run(msg, cmd, args) {
        if (args === null || args === void 0 ? void 0 : args.length) {
            if (checkCommands_1.CheckCommands.isCommand(config_1.Config.PREFIX + args[0])) {
                msg.channel.send(sendHelpOfCommand(new command_1.Command.Command(args[0])));
            }
            else {
                msg.channel.send("La commande `" + args[0] + "` n'existe pas !");
            }
        }
        else {
            msg.channel.send(sendHelp());
        }
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=help.js.map