"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var config_1 = require("../utils/config");
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        if (args !== undefined) {
            if (args.length >= 2) {
                var type = args.shift();
                var payload = args.join('').toUpperCase();
                switch (type) {
                    case "bin2hex":
                        msg.channel.send("`" + payload + "` (2) => `" + parseInt(payload, 2).toString(16).toUpperCase() + "` (16)");
                        break;
                    case "hex2bin":
                        msg.channel.send("`" + payload + "` (16) => `" + parseInt(payload, 16).toString(2) + "` (2)");
                        break;
                    case "dec2bin":
                        msg.channel.send("`" + payload + "` (10) => `" + parseInt(payload, 10).toString(2) + "` (2)");
                        break;
                    case "bin2dec":
                        msg.channel.send("`" + payload + "` (2) => `" + parseInt(payload, 2).toString(10) + "` (10)");
                        break;
                    default:
                        msg.channel.send("__Types disponibles__ `bin2hex` `hex2bin` `dec2bin` `bin2dec`");
                        break;
                }
            }
            else {
                msg.channel.send("La commande doit \u00EAtre sous la forme `" + config_1.Config.PREFIX + cmd.command + "(ou " + cmd.aliases + ") <type> <valeur>`");
            }
        }
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=convert.js.map