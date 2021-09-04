"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suite = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var debug_1 = require("../utils/debug");
var Suite;
(function (Suite) {
    debug_1.Debug.bot("[Suite] event loaded");
    var n = 0;
    main_1.client.on('message', function (msg) {
        var _a, _b;
        if (msg.author.bot || msg.channel.id != config_1.Config.get_instance().CHANNELS.RECURENCE) {
            return;
        }
        var input_number = parseInt(msg.content);
        if (input_number !== NaN && input_number === n + 1) {
            msg.react('✅');
            n++;
        }
        else {
            if (n >= 100) {
                (_b = (_a = main_1.client.guilds.resolve(config_1.Config.get_instance().GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.resolve(msg.author.id)) === null || _b === void 0 ? void 0 : _b.kick("Image ne pas savoir compter");
                msg.channel.send("Salut " + msg.author.username + " !");
            }
            msg.react('❌');
            msg.channel.send("S\u00E9rie de " + n + " !");
            n = 0;
        }
    });
})(Suite = exports.Suite || (exports.Suite = {}));
//# sourceMappingURL=Suite.js.map