"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        msg.content === "ping" ? msg.channel.send("Pong !") : msg.channel.send("Ping !");
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=ping.js.map