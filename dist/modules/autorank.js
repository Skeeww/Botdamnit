"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoRank = void 0;
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
var config_1 = require("../utils/config");
var AutoRank = /** @class */ (function () {
    function AutoRank() {
        this.name = "AutoRank";
        this.exec = function (freq) {
            var _a, _b;
            var IN_GAME = ((_a = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.roles.cache.find(function (r) { return r.id === config_1.Config.IN_GAME; })) || new discord_js_1.Role(main_1.client, {}, new discord_js_1.Guild(main_1.client, {}));
            var MUSIC = ((_b = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _b === void 0 ? void 0 : _b.roles.cache.find(function (r) { return r.id === config_1.Config.MUSIC; })) || new discord_js_1.Role(main_1.client, {}, new discord_js_1.Guild(main_1.client, {}));
            setInterval(function () {
                var _a;
                (_a = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.members.fetch({ withPresences: true }).then(function (v) { return v.forEach(function (m) {
                    if (m.presence.status !== "invisible" && m.presence.status !== "offline") {
                        if (m.presence.activities[0] !== undefined) {
                            switch (m.presence.activities[0].type) {
                                case "PLAYING":
                                    if (!m.roles.cache.array().includes(IN_GAME)) {
                                        m.roles.add(IN_GAME);
                                    }
                                    break;
                                case "LISTENING":
                                    if (!m.roles.cache.array().includes(MUSIC)) {
                                        m.roles.add(MUSIC);
                                    }
                                    break;
                                default:
                                    if (m.roles.cache.array().includes(IN_GAME)) {
                                        m.roles.remove(IN_GAME);
                                    }
                                    if (m.roles.cache.array().includes(MUSIC)) {
                                        m.roles.remove(MUSIC);
                                    }
                                    break;
                            }
                        }
                        else {
                            if (m.roles.cache.array().includes(IN_GAME)) {
                                m.roles.remove(IN_GAME);
                            }
                            if (m.roles.cache.array().includes(MUSIC)) {
                                m.roles.remove(MUSIC);
                            }
                        }
                    }
                }); });
            }, freq);
        };
    }
    return AutoRank;
}());
exports.AutoRank = AutoRank;
//# sourceMappingURL=autorank.js.map