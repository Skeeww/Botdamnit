"use strict";
/*
curl https://api.openai.com/v1/engines/ada/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "prompt": "Salut comment tu vas ?\nBWOAT: Je vais bien.",
  "temperature": 0,
  "max_tokens": 128,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "stop": ["\n"]
}'
*/
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
        var _a;
        if (!msg.author.bot && msg.mentions.users.has((_a = main_1.client.user) === null || _a === void 0 ? void 0 : _a.id)) {
            var now = new Date().getTime();
            if (now - last_command_exec.getTime() > 10000) {
                last_command_exec = new Date();
                var payload = msg.content.replace(/<@(.*?)>/g, "");
                axios_1.default.post("https://api.openai.com/v1/engines/ada/completions", {
                    "prompt": payload + "\nBWOAT: ",
                    "temperature": 0,
                    "max_tokens": 80,
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
                msg.reply("Attends laisse moi " + Math.round((10000 - (now - last_command_exec.getTime())) / 1000) + " secondes");
            }
        }
    });
})(PingBot = exports.PingBot || (exports.PingBot = {}));
//# sourceMappingURL=PingBot.js.map