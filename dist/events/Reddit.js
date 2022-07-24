"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reddit = void 0;
const main_1 = require("../main");
const config_1 = require("../utils/config");
const debug_1 = require("../utils/debug");
var Reddit;
(function (Reddit) {
    debug_1.Debug.bot("[Reddit] event loaded");
    main_1.client.on("messageReactionAdd", (react) => {
        if (react.emoji.name === "upvote" && (react.count || 0) >= 20) {
            react.message.pin().catch((err) => {
                debug_1.Debug.bot(err);
            });
            debug_1.Debug.bot("trigger");
        }
        if (react.emoji.name === "downvote" && (react.count || 0) >= 10) {
            react.message.delete().catch((err) => {
                debug_1.Debug.bot(err);
            });
        }
    });
    main_1.client.on("messageCreate", (msg) => {
        var _a, _b;
        if (msg.content.startsWith("REDDIT") || msg.channel.id === config_1.Config.get_instance().CHANNELS.MEME) {
            msg.react(((_a = msg.guild) === null || _a === void 0 ? void 0 : _a.emojis.cache.find(e => e.name === "upvote")) || "").catch((err) => {
                debug_1.Debug.bot(err);
            });
            msg.react(((_b = msg.guild) === null || _b === void 0 ? void 0 : _b.emojis.cache.find(e => e.name === "downvote")) || "").catch((err) => {
                debug_1.Debug.bot(err);
            });
        }
    });
})(Reddit = exports.Reddit || (exports.Reddit = {}));
//# sourceMappingURL=Reddit.js.map