"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var discord_js_1 = require("discord.js");
var debug_1 = require("../utils/debug");
var jimp_1 = __importDefault(require("jimp"));
var font = jimp_1.default.FONT_SANS_16_WHITE;
function run(cmd) {
    cmd.args = cmd.args.join(" ").split(",");
    if (cmd.args.length > 0 && cmd.args.join(" ").length <= 15) {
        jimp_1.default.read("./src/assets/sardoche.png").then(function (img) {
            jimp_1.default.loadFont(font).then(function (f) {
                img.print(f, 294, 188, {
                    text: cmd.args.join(" "),
                    alignmentX: jimp_1.default.HORIZONTAL_ALIGN_LEFT,
                    alignmentY: jimp_1.default.VERTICAL_ALIGN_TOP
                }).getBuffer(jimp_1.default.MIME_PNG, function (err, v) {
                    if (err) {
                        debug_1.Debug.bot(err);
                        cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
                        return;
                    }
                    cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment(v, 'feu.png')] });
                });
            });
        }).catch(function (err) {
            cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
        });
    }
    else {
        cmd.msg.channel.send("Faites du bruit les gars");
    }
}
exports.run = run;
//# sourceMappingURL=feu.js.map