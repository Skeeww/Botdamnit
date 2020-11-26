"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var discord_js_1 = require("discord.js");
var fs_1 = require("fs");
var debug_1 = require("../utils/debug");
var Command;
(function (Command) {
    //const command = new FfmpegCommand()
    function run(msg, cmd, args) {
        fs_1.readFile("./src/assets/uknowtherule.mp4", function (err, data) {
            var _a;
            if (err) {
                debug_1.Debug.bot(err);
                msg.channel.send("Le bot a givup ! *send uwu in the chat*\n```" + err + "```");
                return;
            }
            if (msg.mentions) {
                (_a = msg.mentions.users.first()) === null || _a === void 0 ? void 0 : _a.avatarURL({ format: "jpeg" });
            }
            msg.channel.send(new discord_js_1.MessageAttachment(data, "uknowtherule.mp4"));
        });
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=goodbye.js.map