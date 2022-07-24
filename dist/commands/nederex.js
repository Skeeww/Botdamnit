"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
function run(cmd) {
    let content = "";
    if (cmd.args.length > 0) {
        content = cmd.args.join(" ");
    }
    if (Math.random() >= 0.5) {
        cmd.msg.channel.send(`Alors, ${content} comme ça tu triches ?`);
    }
    else {
        cmd.msg.channel.send(`${content}, mais avant, je lance la procédure prévue en cas de triche !`);
    }
    cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment(fs_1.readFileSync("./src/assets/NEDEREX.png"))] });
}
exports.run = run;
//# sourceMappingURL=nederex.js.map