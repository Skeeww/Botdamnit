"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
function run(cmd) {
    let time = 30;
    if (cmd.args.length === 1) {
        time = parseInt(cmd.args[0]);
    }
    cmd.msg.channel.setRateLimitPerUser(time, "bot").then(() => {
        cmd.msg.channel.send("https://media1.tenor.com/images/8dc4387d86af21d417809358fa982f22/tenor.gif");
    }).catch((err) => {
        cmd.msg.channel.send(`Oh fuck une erreur: #sendUwUinthechat \`${err}\` `);
    });
}
exports.run = run;
//# sourceMappingURL=ilfaitunechaleur.js.map