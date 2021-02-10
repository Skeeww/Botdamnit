"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(cmd) {
    cmd.msg.content === "ping" ? cmd.msg.channel.send("Pong !") : cmd.msg.channel.send("Ping !");
}
exports.run = run;
//# sourceMappingURL=ping.js.map