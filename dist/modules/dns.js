"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dns = void 0;
var child_process_1 = require("child_process");
var main_1 = require("../main");
var config_1 = require("../utils/config");
var Dns = /** @class */ (function () {
    function Dns() {
        this.name = "Dns";
        this.exec = function (freq) {
            setInterval(function () {
                var _a;
                var chan = (_a = main_1.client.guilds.resolve(config_1.Config.get_instance().GUILD_ID)) === null || _a === void 0 ? void 0 : _a.channels.resolve("894693735286317096");
                child_process_1.exec("dig @1.1.1.1 facebook.com", function (err, out, stderr) {
                    if (out) {
                        chan.send(out);
                    }
                });
            }, freq);
        };
    }
    return Dns;
}());
exports.Dns = Dns;
//# sourceMappingURL=dns.js.map