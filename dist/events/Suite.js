"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suite = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var debug_1 = require("../utils/debug");
var Suite;
(function (Suite) {
    debug_1.Debug.bot("[Suite] event loaded");
    var n = 102;
    main_1.client.on('messageCreate', function (msg) {
        if (msg.author.bot || msg.channel.id != config_1.Config.get_instance().CHANNELS.RECURENCE) {
            return;
        }
        var input_number = parseInt(msg.content);
        if (input_number !== NaN && input_number === n + 1) {
            msg.channel.send("Le dernier nombre trouv\u00E9 est ".concat(++n));
            msg.react('✅');
        }
        else {
            msg.react('❌');
            msg.channel.send("S\u00E9rie de ".concat(n, " !"));
            n = 0;
        }
    });
})(Suite = exports.Suite || (exports.Suite = {}));
//# sourceMappingURL=Suite.js.map