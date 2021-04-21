"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomAnswer = void 0;
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var RandomAnswer;
(function (RandomAnswer) {
    debug_1.Debug.bot("[RandomAnswer] event loaded");
    main_1.client.on("message", function (msg) {
        var _a;
        if (msg.author.bot)
            return;
        var odd = Math.random();
        if (odd < 0.002) {
            msg.channel.send("AH OUAIS " + msg.author.username + " ?! " + msg.content.toUpperCase());
        }
        else if (odd >= 0.002 && odd < 0.004) {
            msg.channel.send(msg.author.username + " tu viens vraiment de dire \u00E7a sur " + ((_a = msg.guild) === null || _a === void 0 ? void 0 : _a.members.cache.random().displayName) + " !!!!");
        }
        else if (odd >= 0.004 && odd < 0.008) {
            msg.channel.send(msg.author.username + " en vrai ce que tu dis est interessant");
        }
    });
})(RandomAnswer = exports.RandomAnswer || (exports.RandomAnswer = {}));
//# sourceMappingURL=RandomAnswer.js.map