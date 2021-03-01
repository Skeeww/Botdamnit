"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var axios_1 = __importDefault(require("axios"));
var discord_js_1 = require("discord.js");
function run(cmd) {
    axios_1.default.get("https://api.thecatapi.com/v1/images/search").then(function (res) {
        cmd.msg.channel.send(new discord_js_1.MessageEmbed({
            image: { url: res.data.url }
        }));
    });
}
exports.run = run;
//# sourceMappingURL=cat.js.map