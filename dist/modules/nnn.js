"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NNN = void 0;
var discord_js_1 = require("discord.js");
var axios_1 = __importDefault(require("axios"));
var main_1 = require("../main");
var config_1 = require("../utils/config");
var NNN = /** @class */ (function () {
    function NNN() {
        this.name = "NNN";
        this.exec = function (freq) {
            var tar = new Date(2020, 12, 1);
            setInterval(function () {
                if (new Date(Date.now()).getHours() === 1 && new Date(Date.now()).getMinutes() === 10) {
                    var embed_1 = new discord_js_1.MessageEmbed();
                    axios_1.default.get("https://quotes.rest/qod", { headers: { "Accept": "application/json" } }).then(function (res) {
                        var _a;
                        embed_1.setTitle(30 - new Date(Date.now()).getDate() + " jours restants (" + Math.round(new Date(Date.now()).getDate() * 100 / 31) + "%)");
                        embed_1.setDescription("> " + res.data.contents.quotes[0].quote + "\n----------\n*" + res.data.contents.quotes[0].author + "*");
                        embed_1.setColor(0x00ff00);
                        ((_a = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.channels.cache.find(function (c) { return c.id === config_1.Config.NNN; })).send(embed_1);
                    });
                }
            }, freq);
        };
    }
    return NNN;
}());
exports.NNN = NNN;
//# sourceMappingURL=nnn.js.map