"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tick = void 0;
var debug_1 = require("../utils/debug");
var Tick = /** @class */ (function () {
    function Tick(freq, modules) {
        this.freq = freq;
        this.modules = modules;
        this.modules.forEach(function (m) {
            debug_1.Debug.bot("[".concat(m.name, "] module loaded"));
        });
    }
    Tick.prototype.run = function () {
        var _this = this;
        this.modules.forEach(function (m) {
            m.exec();
            setInterval(function () { return m.exec(); }, _this.freq);
        });
    };
    return Tick;
}());
exports.Tick = Tick;
//# sourceMappingURL=tick.js.map