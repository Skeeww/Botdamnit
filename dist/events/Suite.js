"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suite = void 0;
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var Suite;
(function (Suite) {
    debug_1.Debug.bot("[Suite] event loaded");
    var n = 0;
    main_1.client.on('message', function (msg) {
        if (msg.author.bot || msg.channel.id != main_1.config.CHANNELS.RECURENCE) {
            return;
        }
        var input_number = parseInt(msg.content);
        if (input_number !== NaN && input_number === n + 1) {
            msg.react('✅');
            n++;
        }
        else {
            msg.react('❌');
            msg.channel.send("S\u00E9rie de " + n + " !");
            n = 0;
        }
    });
})(Suite = exports.Suite || (exports.Suite = {}));
//# sourceMappingURL=Suite.js.map