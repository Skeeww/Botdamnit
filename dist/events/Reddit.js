"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main");
var config_1 = require("../utils/config");
var debug_1 = require("../utils/debug");
var Event;
(function (Event) {
    debug_1.Debug.bot("[Reddit] event loaded");
    main_1.client.on("messageReactionAdd", function (react) {
        if (react.emoji.name === "upvote" && (react.count || 0) >= 20) {
            react.message.pin({ reason: "upvoted" }).catch(function (err) {
                debug_1.Debug.bot(err);
            });
            debug_1.Debug.bot("trigger");
        }
        if (react.emoji.name === "downvote" && (react.count || 0) >= 10) {
            react.message.delete().catch(function (err) {
                debug_1.Debug.bot(err);
            });
        }
    });
    main_1.client.on("message", function (msg) {
        var _a, _b;
        if (msg.content.startsWith("REDDIT") || msg.channel.id === config_1.Config.MEME) {
            msg.react(((_a = msg.guild) === null || _a === void 0 ? void 0 : _a.emojis.cache.find(function (e) { return e.name === "upvote"; })) || "").catch(function (err) {
                debug_1.Debug.bot(err);
            });
            msg.react(((_b = msg.guild) === null || _b === void 0 ? void 0 : _b.emojis.cache.find(function (e) { return e.name === "downvote"; })) || "").catch(function (err) {
                debug_1.Debug.bot(err);
            });
        }
    });
})(Event || (Event = {}));
//# sourceMappingURL=Reddit.js.map