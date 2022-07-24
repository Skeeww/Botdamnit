"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
const minecraft_server_util_1 = __importDefault(require("minecraft-server-util"));
function run(cmd) {
    if (!cmd.args.length) {
        cmd.msg.channel.send("Vous devez passer en paramètre une IP");
        return;
    }
    const ip = cmd.args[0];
    const port = parseInt(ip.split(":")[1]) || 25565;
    minecraft_server_util_1.default.status(ip.split(":")[0], port).then((res) => {
        let embed = new discord_js_1.MessageEmbed();
        embed.setTitle(`${ip}:${port}`);
        embed.setDescription(res.motd.clean || "Aucune description");
        embed.addField("Nombre de joueurs:", `${res.players.online}/${res.players.max}`, true);
        embed.addField("Version:", res.version.name || "Version inconnue", true);
        embed.setColor(0x00ff00);
        cmd.msg.channel.send({ embeds: [embed] });
    }).catch(() => {
        let embed = new discord_js_1.MessageEmbed();
        embed.setTitle(`${ip}:${port}`);
        embed.setDescription("Serveur inaccessible");
        embed.setColor(0xff0000);
        cmd.msg.channel.send({ embeds: [embed] });
    });
}
exports.run = run;
//# sourceMappingURL=minecraft.js.map