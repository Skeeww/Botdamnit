"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const discord_js_1 = require("discord.js");
const fs_1 = __importDefault(require("fs"));
function run(cmd) {
    if (cmd.args.length === 0) {
        cmd.msg.channel.send("Il manque du texte");
        return;
    }
    qrcode_1.default.toFile('./qr.png', cmd.args.join(' '), {
        errorCorrectionLevel: 'L',
        type: 'png',
        width: 250
    }).then(() => {
        fs_1.default.readFile(`./qr.png`, (err, data) => {
            if (err) {
                cmd.msg.channel.send(`Erreur: \`${err}\``);
                return;
            }
            cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment(data)] });
        });
    }).catch(err => {
        cmd.msg.channel.send(`Erreur: \`${err}\``);
    });
}
exports.run = run;
//# sourceMappingURL=qr.js.map