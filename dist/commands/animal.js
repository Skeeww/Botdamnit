"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var axios_1 = __importDefault(require("axios"));
var discord_js_1 = require("discord.js");
var command_1 = require("../utils/command");
function run(cmd) {
    var _a;
    switch ((_a = cmd.args[0]) !== null && _a !== void 0 ? _a : command_1.Command.extractCommand(cmd.msg.content)) {
        case "cat":
            axios_1.default.get("https://api.thecatapi.com/v1/images/search").then(function (res) {
                cmd.msg.channel.send(new discord_js_1.MessageEmbed({ image: { url: res.data[0].url } }));
            });
            break;
        case "dog":
            axios_1.default.get("https://dog.ceo/api/breeds/image/random").then(function (res) {
                cmd.msg.channel.send(new discord_js_1.MessageEmbed({ image: { url: res.data.message } }));
            });
            break;
        default:
            cmd.msg.channel.send("Désolé il faut spécifier un animal (*moi j'adore les animals* - Renaud)");
            break;
    }
}
exports.run = run;
//# sourceMappingURL=animal.js.map