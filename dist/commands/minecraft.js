"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var discord_js_1 = require("discord.js");
var minecraft_server_util_1 = __importDefault(require("minecraft-server-util"));
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        if (!(args === null || args === void 0 ? void 0 : args.length)) {
            msg.channel.send("Vous devez passer en paramètre une IP");
            return;
        }
        var ip = args[0];
        minecraft_server_util_1.default.status(ip.split(":")[0], { port: parseInt(ip.split(":")[1]) || 25565 }).then(function (res) {
            var embed = new discord_js_1.MessageEmbed();
            embed.setTitle(res.host + ":" + res.port);
            embed.setDescription(res.description);
            embed.addField("Nombre de joueurs:", res.onlinePlayers + "/" + res.maxPlayers, true);
            embed.addField("Version:", res.version, true);
            embed.setColor(0x00ff00);
            msg.channel.send(embed);
        }).catch(function (r) {
            var embed = new discord_js_1.MessageEmbed();
            embed.setTitle(ip.split(":")[0] + ":" + (ip.split(":")[1] || 25565));
            embed.setDescription("Serveur inaccessible");
            embed.setColor(0xff0000);
            msg.channel.send(embed);
        });
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=minecraft.js.map