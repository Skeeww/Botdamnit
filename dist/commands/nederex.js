"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var discord_js_1 = require("discord.js");
var fs_1 = require("fs");
function run(cmd) {
    var content = "";
    if (cmd.args.length > 0) {
        content = cmd.args.join(" ");
    }
    if (Math.random() >= 0.5) {
        cmd.msg.channel.send("Alors, ".concat(content, " comme \u00E7a tu triches ?"));
    }
    else {
        cmd.msg.channel.send("".concat(content, ", mais avant, je lance la proc\u00E9dure pr\u00E9vue en cas de triche !"));
    }
    cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment((0, fs_1.readFileSync)("./src/assets/NEDEREX.png"))] });
}
exports.run = run;
//# sourceMappingURL=nederex.js.map