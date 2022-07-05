"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var config_1 = require("../utils/config");
function run(cmd) {
    if (cmd.args.length >= 2) {
        var type = cmd.args.shift();
        var payload = cmd.args.join("").toUpperCase();
        switch (type) {
            case "bin2hex":
                cmd.msg.channel.send("`".concat(payload, "` (2) => `").concat(parseInt(payload, 2).toString(16).toUpperCase(), "` (16)"));
                break;
            case "hex2bin":
                cmd.msg.channel.send("`".concat(payload, "` (16) => `").concat(parseInt(payload, 16).toString(2), "` (2)"));
                break;
            case "dec2bin":
                cmd.msg.channel.send("`".concat(payload, "` (10) => `").concat(parseInt(payload, 10).toString(2), "` (2)"));
                break;
            case "bin2dec":
                cmd.msg.channel.send("`".concat(payload, "` (2) => `").concat(parseInt(payload, 2).toString(10), "` (10)"));
                break;
            default:
                cmd.msg.channel.send("__Types disponibles__ `bin2hex` `hex2bin` `dec2bin` `bin2dec`");
                break;
        }
    }
    else {
        cmd.msg.channel.send("La commande doit \u00EAtre sous la forme `".concat(config_1.Config.get_instance().PREFIX).concat(cmd.command, "(ou ").concat(cmd.command, ") <type> <valeur>`"));
    }
}
exports.run = run;
//# sourceMappingURL=convert.js.map