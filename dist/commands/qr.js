"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var qrcode_1 = __importDefault(require("qrcode"));
var discord_js_1 = require("discord.js");
var fs_1 = __importDefault(require("fs"));
function run(cmd) {
    if (cmd.args.length === 0) {
        cmd.msg.channel.send("Il manque du texte");
        return;
    }
    qrcode_1.default.toFile('./qr.png', cmd.args.join(' '), {
        errorCorrectionLevel: 'L',
        type: 'png',
        width: 250
    }).then(function () {
        fs_1.default.readFile("./qr.png", function (err, data) {
            if (err) {
                cmd.msg.channel.send("Erreur: `" + err + "`");
                return;
            }
            cmd.msg.channel.send(new discord_js_1.MessageAttachment(data));
        });
    }).catch(function (err) {
        cmd.msg.channel.send("Erreur: `" + err + "`");
    });
}
exports.run = run;
//# sourceMappingURL=qr.js.map