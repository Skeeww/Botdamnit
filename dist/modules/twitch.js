"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twitch = void 0;
const discord_js_1 = require("discord.js");
const main_1 = require("../main");
const config_1 = require("../utils/config");
const debug_1 = require("../utils/debug");
class Twitch {
    constructor() {
        this.name = "Twitch";
        this.exec = () => {
            var _a;
            let inStream = [];
            (_a = main_1.client.guilds.cache.find(g => g.id === config_1.Config.get_instance().GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.cache.forEach(m => {
                var _a;
                if (m.presence === null)
                    return;
                if (m.presence.status !== "offline" && m.presence.status !== "invisible") {
                    const a = m.presence.activities[0];
                    if (a) {
                        if (a.type === "STREAMING" && !inStream.includes(m)) {
                            inStream.push(m);
                            const embed = new discord_js_1.MessageEmbed();
                            embed.setTitle(`${m.displayName} EST EN LIVE !`);
                            embed.setDescription(`${a.details}`);
                            embed.setThumbnail(((_a = a.assets) === null || _a === void 0 ? void 0 : _a.smallImageURL()) || '');
                            embed.setURL(a.url || '');
                            m.guild.channels.cache.find(c => c.id === config_1.Config.get_instance().CHANNELS.SHARE).send({ embeds: [embed] });
                            debug_1.Debug.bot(`${m.user.username} added to inStream`);
                        }
                        if (a.type !== "STREAMING" && inStream.includes(m)) {
                            inStream.splice(inStream.indexOf(m), 1);
                            debug_1.Debug.bot(`${m.user.username} removed from inStream`);
                        }
                    }
                }
            });
        };
    }
}
exports.Twitch = Twitch;
//# sourceMappingURL=twitch.js.map