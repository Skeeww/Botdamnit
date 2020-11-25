"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        var msgNumber = 100;
        if (args === null || args === void 0 ? void 0 : args.length) {
            msgNumber = parseInt(args[0]);
        }
        msg.channel.bulkDelete(msgNumber).then(function () {
            msg.channel.send("Nettoyage de " + msgNumber + " messages");
        }).catch(function () {
            msg.channel.send("Une erreur est survenu #sendUwU in the tchat !");
        });
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=clear.js.map