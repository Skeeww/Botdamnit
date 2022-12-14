"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
const debug_1 = require("../utils/debug");
const jimp_1 = __importDefault(require("jimp"));
const font = jimp_1.default.FONT_SANS_32_WHITE;
function run(cmd) {
    if ((cmd.args.join(" ") || "").length < 20) {
        jimp_1.default.read("./src/assets/renaud.png").then((img) => {
            jimp_1.default.loadFont(font).then(f => {
                img.print(f, 305, 280, {
                    text: cmd.args.join(" "),
                    alignmentX: jimp_1.default.HORIZONTAL_ALIGN_LEFT,
                    alignmentY: jimp_1.default.VERTICAL_ALIGN_TOP
                }, (err, v) => {
                    if (err) {
                        debug_1.Debug.bot(err);
                        cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
                        return;
                    }
                    v.getBuffer(jimp_1.default.MIME_PNG, (err, v) => {
                        if (err) {
                            debug_1.Debug.bot(err);
                            cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
                            return;
                        }
                        cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment(v, 'renaud.png')] });
                    });
                });
            });
        }).catch((err) => {
            cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
        });
    }
    else {
        cmd.msg.channel.send("Pavé César");
    }
}
exports.run = run;
//# sourceMappingURL=renaud.js.map