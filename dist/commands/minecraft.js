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
        var _a;
        var embed = new discord_js_1.MessageEmbed();
        embed.setTitle(res.host + ":" + res.port);
        embed.setDescription(((_a = res.description) === null || _a === void 0 ? void 0 : _a.descriptionText) || "Aucune description");
        embed.addField("Nombre de joueurs:", res.onlinePlayers + "/" + res.maxPlayers, true);
        embed.addField("Version:", res.version || "Version inconnue", true);
        embed.setColor(0x00ff00);
        cmd.msg.channel.send({ embeds: [embed] });
    }).catch(function () {
        var embed = new discord_js_1.MessageEmbed();
        embed.setTitle(ip.split(":")[0] + ":" + (ip.split(":")[1] || 25565));
        embed.setDescription("Serveur inaccessible");
        embed.setColor(0xff0000);
        cmd.msg.channel.send({ embeds: [embed] });
    });
}
exports.run = run;
//# sourceMappingURL=minecraft.js.map