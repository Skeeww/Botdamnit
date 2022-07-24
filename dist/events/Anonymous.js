"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anonymous = void 0;
const discord_js_1 = require("discord.js");
const main_1 = require("../main");
const config_1 = require("../utils/config");
const debug_1 = require("../utils/debug");
var Anonymous;
(function (Anonymous) {
    debug_1.Debug.bot('[Anonymous] event loaded');
    main_1.client.on('messageCreate', (msg) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        if (msg.author.bot || msg.channel.type !== discord_js_1.ChannelType.DM)
            return;
        ((_a = main_1.client.guilds.cache.find((g) => g.id === config_1.Config.get_instance().GUILD_ID)) === null || _a === void 0 ? void 0 : _a.channels.cache.find((c) => c.id === config_1.Config.get_instance().CHANNELS.ANO)).send(`${msg.content}\n==========`);
    }));
})(Anonymous = exports.Anonymous || (exports.Anonymous = {}));
//# sourceMappingURL=Anonymous.js.map