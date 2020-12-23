"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var eris_1 = __importDefault(require("eris"));
var debug_1 = require("./utils/debug");
var config_1 = require("./utils/config");
process.env.TZ = 'Europe/Paris';
exports.client = new eris_1.default.CommandClient(config_1.Config.BOT_TOKEN, {}, {
    name: "Botdamnit",
    description: "Incredible bot full of useless features !",
    prefix: ".",
    owner: "Skew",
    argsSplitter: function (str) {
        return str.split(",");
    }
});
exports.client.on("ready", function () {
    debug_1.Debug.discord('\'ready\' event is triggered');
    require('./events');
});
exports.client.on("rawWS", function (packet, id) {
    debug_1.Debug.bot(id + ": " + packet.t);
});
exports.client.connect().then(function () {
    debug_1.Debug.discord("Bot connected");
}).catch(function () {
    debug_1.Debug.discord("Failure to connect the bot");
});
//# sourceMappingURL=main.js.map