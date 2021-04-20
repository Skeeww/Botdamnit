"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var discord_js_1 = require("discord.js");
var minecraft_server_util_1 = __importDefault(require("minecraft-server-util"));
function run(cmd) {
    if (!cmd.args.length) {
        cmd.msg.channel.send("Vous devez passer en paramètre une IP");
        return;
    }
    var ip = cmd.args[0];
    minecraft_server_util_1.default.status(ip.split(":")[0], { port: parseInt(ip.split(":")[1]) || 25565 }).then(function (res) {
        var embed = new discord_js_1.MessageEmbed();
        embed.setTitle(res.host + ":" + res.port);
        embed.setDescription(res.description);
        embed.addField("Nombre de joueurs:", res.onlinePlayers + "/" + res.maxPlayers, true);
        embed.addField("Version:", res.version, true);
        embed.setColor(0x00ff00);
        cmd.msg.channel.send(embed);
    }).catch(function () {
        var embed = new discord_js_1.MessageEmbed();
        embed.setTitle(ip.split(":")[0] + ":" + (ip.split(":")[1] || 25565));
        embed.setDescription("Serveur inaccessible");
        embed.setColor(0xff0000);
        cmd.msg.channel.send(embed);
    });
}
exports.run = run;
//# sourceMappingURL=minecraft.js.map