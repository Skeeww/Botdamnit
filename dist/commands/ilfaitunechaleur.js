"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        var time = 30;
        if ((args === null || args === void 0 ? void 0 : args.length) === 1) {
            time = parseInt(args[0]);
        }
        msg.channel.setRateLimitPerUser(time, "bot").then(function () {
            msg.channel.send("https://media1.tenor.com/images/8dc4387d86af21d417809358fa982f22/tenor.gif");
        }).catch(function (err) {
            msg.channel.send("Oh fuck une erreur: #sendUwUinthechat `" + err + "` ");
        });
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=ilfaitunechaleur.js.map