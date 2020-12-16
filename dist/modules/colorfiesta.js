"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFiesta = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var crypto_1 = require("crypto");
var ColorFiesta = /** @class */ (function () {
    function ColorFiesta() {
        this.name = "ColorFiesta";
        this.exec = function (freq) {
            setInterval(function () {
                var _a, _b;
                (_b = (_a = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.roles.cache.find(function (r) { return r.id === config_1.Config.SATAN; })) === null || _b === void 0 ? void 0 : _b.setColor([crypto_1.randomInt(255), crypto_1.randomInt(255), crypto_1.randomInt(255)]);
            }, freq);
        };
    }
    return ColorFiesta;
}());
exports.ColorFiesta = ColorFiesta;
//# sourceMappingURL=colorfiesta.js.map