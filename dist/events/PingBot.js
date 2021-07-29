"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingBot = void 0;
var axios_1 = __importDefault(require("axios"));
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var PingBot;
(function (PingBot) {
    debug_1.Debug.bot("[PingBot] event loaded");
    var last_command_exec = new Date();
    main_1.client.on("message", function (msg) {
        if (!msg.author.bot && msg.content.startsWith("diantre ?")) {
            var now = new Date().getTime();
            if (now - last_command_exec.getTime() > 5000) {
                last_command_exec = new Date();
                var payload = msg.content.replace(/<@(.*?)>/g, "");
                axios_1.default.post("https://api.openai.com/v1/engines/davinci/completions", {
                    "prompt": payload + "\nBWOAT: ",
                    "temperature": 0,
                    "max_tokens": 60,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0,
                    "stop": ["\n"]
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + main_1.config.OPENAI_API
                    }
                }).then(function (res) {
                    var _a;
                    msg.reply((_a = res.data.choices[0].text) !== null && _a !== void 0 ? _a : "je ne sais quoi te répondre face à cela");
                }).catch(function () { return msg.reply("Sorry je sleep"); });
            }
            else {
                msg.reply("Attends laisse moi " + Math.round((5000 - (now - last_command_exec.getTime())) / 1000) + " secondes");
            }
        }
    });
})(PingBot = exports.PingBot || (exports.PingBot = {}));
//# sourceMappingURL=PingBot.js.map