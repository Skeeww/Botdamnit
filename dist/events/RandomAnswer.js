"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomAnswer = void 0;
var node_crypto_1 = require("node:crypto");
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var RandomAnswer;
(function (RandomAnswer) {
    debug_1.Debug.bot("[RandomAnswer] event loaded");
    main_1.client.on("message", function (msg) {
        var odd = node_crypto_1.randomInt(100);
        if (odd < 2) {
            msg.channel.send("Okay " + msg.author.username + " mais du coup " + msg.content + " c'est genre super interessant en faite !");
        }
        else if (odd >= 2 && odd < 4) {
            msg.channel.send("En vrai " + msg.author.username + " tu devrais \u00E9couter VALD");
        }
        else if (odd >= 4 && odd < 8) {
            msg.channel.send(msg.author.username + " zap ni la un ni la dos ni la tres");
        }
    });
})(RandomAnswer = exports.RandomAnswer || (exports.RandomAnswer = {}));
//# sourceMappingURL=RandomAnswer.js.map