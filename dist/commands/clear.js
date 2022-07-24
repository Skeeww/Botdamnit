"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(cmd) {
    let msgNumber = 100;
    if (cmd.args.length) {
        msgNumber = parseInt(cmd.args[0]);
    }
    cmd.msg.channel.bulkDelete(msgNumber).then(() => {
        cmd.msg.channel.send(`Nettoyage de ${msgNumber} messages`);
    }).catch(() => {
        cmd.msg.channel.send(`Une erreur est survenu #sendUwU in the tchat !`);
    });
}
exports.run = run;
//# sourceMappingURL=clear.js.map