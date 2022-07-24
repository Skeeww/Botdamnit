"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
const debug_1 = require("../utils/debug");
const jimp_1 = __importDefault(require("jimp"));
const font = jimp_1.default.FONT_SANS_64_BLACK;
function run(cmd) {
    cmd.args = cmd.args.join(" ").split(",");
    if (cmd.args.length === 2) {
        const textUp = cmd.args[0].trim();
        const textDown = cmd.args[1].trim();
        jimp_1.default.read("./src/assets/big_papoo_yes_no.png").then((img) => {
            jimp_1.default.loadFont(font).then(f => {
                let imgModified = img.print(f, 620, 40, {
                    text: textUp,
                    alignmentX: jimp_1.default.HORIZONTAL_ALIGN_LEFT,
                    alignmentY: jimp_1.default.VERTICAL_ALIGN_TOP
                }, 570);
                imgModified = imgModified.print(f, 620, 520, {
                    text: textDown,
                    alignmentX: jimp_1.default.HORIZONTAL_ALIGN_LEFT,
                    alignmentY: jimp_1.default.VERTICAL_ALIGN_TOP
                }, 570);
                imgModified.getBuffer(jimp_1.default.MIME_PNG, (err, v) => {
                    if (err) {
                        debug_1.Debug.bot(err);
                        cmd.msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
                        return;
                    }
                    cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment(v, 'drake_papoo.png')] });
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
//# sourceMappingURL=drake.js.map