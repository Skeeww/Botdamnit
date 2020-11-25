"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        if ((args === null || args === void 0 ? void 0 : args.length) === 0) {
            msg.channel.send("Il manque le message ducon");
        }
        else {
            for (var i = 0; i < 10; i++) {
                msg.channel.send((args === null || args === void 0 ? void 0 : args.join(" ")) || "").catch(function () {
                    msg.channel.send("Putain j'suis en sueur là !");
                });
            }
        }
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=spam.js.map