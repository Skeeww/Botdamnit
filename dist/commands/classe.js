"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(cmd) {
    if (cmd.args.length == 1) {
        cmd.msg.channel.messages.fetch(cmd.args[0], true).then(function (m) {
            cmd.msg.channel.send("Le message de " + m.author.username + " est maintenant dans le cache");
        }).catch(function (err) {
            cmd.msg.channel.send(" ``` " + err + " ``` ");
        });
    }
    else {
        cmd.msg.channel.send("Mec ta classe STP bro");
    }
}
exports.run = run;
//# sourceMappingURL=classe.js.map