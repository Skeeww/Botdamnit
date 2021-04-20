"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomAnswer = void 0;
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var RandomAnswer;
(function (RandomAnswer) {
    debug_1.Debug.bot("[RandomAnswer] event loaded");
    main_1.client.on("message", function (msg) {
        if (msg.author.bot)
            return;
        var odd = Math.random();
        if (odd < 0.02) {
            msg.channel.send("FUCK TOI " + msg.author.username + " MOI JE PENSE QUE " + msg.content);
        }
        else if (odd >= 0.02 && odd < 0.04) {
            msg.channel.send("En vrai " + msg.author.username + " tu devrais \u00E9couter VALD");
        }
        else if (odd >= 0.04 && odd < 0.08) {
            msg.channel.send(msg.author.username + " zap ni la un ni la dos ni la tres");
        }
    });
})(RandomAnswer = exports.RandomAnswer || (exports.RandomAnswer = {}));
//# sourceMappingURL=RandomAnswer.js.map