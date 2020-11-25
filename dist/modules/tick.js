"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tick = void 0;
var Tick = /** @class */ (function () {
    function Tick(freq, modules) {
        this.freq = freq;
        this.modules = modules;
    }
    Tick.prototype.run = function () {
        var _this = this;
        this.modules.forEach(function (m) {
            m.exec(_this.freq);
        });
    };
    return Tick;
}());
exports.Tick = Tick;
//# sourceMappingURL=tick.js.map