"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twitch = void 0;
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
var config_1 = require("../utils/config");
var debug_1 = require("../utils/debug");
var Twitch = /** @class */ (function () {
    function Twitch() {
        this.name = "Twitch";
        this.exec = function (freq) {
            var inStream = [];
            setInterval(function () {
                var _a;
                (_a = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.members.cache.forEach(function (m) {
                    var _a;
                    if (m.presence.status !== "offline" && m.presence.status !== "invisible") {
                        var a = m.presence.activities[0];
                        if (a != undefined) {
                            if (a.type === "STREAMING" && !inStream.includes(m)) {
                                inStream.push(m);
                                var embed = new discord_js_1.MessageEmbed();
                                embed.setTitle(m.displayName + " EST EN LIVE !");
                                embed.setDescription("" + a.details);
                                embed.setThumbnail(((_a = a.assets) === null || _a === void 0 ? void 0 : _a.smallImageURL()) || '');
                                embed.setURL(a.url || '');
                                m.guild.channels.cache.find(function (c) { return c.id === config_1.Config.SHARE; }).send(embed);
                                debug_1.Debug.bot(m.user.username + " added to inStream");
                            }
                            if (a.type !== "STREAMING" && inStream.includes(m)) {
                                inStream.splice(inStream.indexOf(m), 1);
                                debug_1.Debug.bot(m.user.username + " removed from inStream");
                            }
                        }
                    }
                });
            }, freq);
        };
    }
    return Twitch;
}());
exports.Twitch = Twitch;
//# sourceMappingURL=twitch.js.map