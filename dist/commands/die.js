"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var discord_js_1 = require("discord.js");
var fs_1 = require("fs");
var debug_1 = require("../utils/debug");
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        fs_1.readFile("./src/assets/godie.mp4", function (err, data) {
            if (err) {
                debug_1.Debug.bot(err);
                msg.channel.send("Le bot n'est pas très funny non plus ! *send uwu in the chat*\n```" + err + "```");
                return;
            }
            msg.channel.send(new discord_js_1.MessageAttachment(data, "godie.mp4"));
        });
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=die.js.map