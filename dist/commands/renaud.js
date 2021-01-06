"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var discord_js_1 = require("discord.js");
var debug_1 = require("../utils/debug");
var jimp_1 = __importDefault(require("jimp"));
var Command;
(function (Command) {
    var font = jimp_1.default.FONT_SANS_32_WHITE;
    function run(msg, cmd, args) {
        if (((args === null || args === void 0 ? void 0 : args.join(" ")) || "").length < 20) {
            jimp_1.default.read("./src/assets/rena.png").then(function (img) {
                jimp_1.default.loadFont(font).then(function (f) {
                    img.print(f, 305, 330, {
                        text: args === null || args === void 0 ? void 0 : args.join(" "),
                        alignmentX: jimp_1.default.HORIZONTAL_ALIGN_LEFT,
                        alignmentY: jimp_1.default.VERTICAL_ALIGN_BOTTOM
                    }, function (err, v) {
                        if (err) {
                            debug_1.Debug.bot(err);
                            msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
                            return;
                        }
                        v.getBuffer(jimp_1.default.MIME_PNG, function (err, v) {
                            if (err) {
                                debug_1.Debug.bot(err);
                                msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
                                return;
                            }
                            msg.channel.send(new discord_js_1.MessageAttachment(v, 'renaud.png'));
                        });
                    });
                });
            }).catch(function (err) {
                msg.channel.send("Fuck une erreur est survenu ! *send uwu in the chat*\n```" + err + "```");
            });
        }
        else {
            msg.channel.send("Pavé César");
        }
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=renaud.js.map