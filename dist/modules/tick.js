"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tick = void 0;
const debug_1 = require("../utils/debug");
class Tick {
    constructor(freq, modules) {
        this.freq = freq;
        this.modules = modules;
        this.modules.forEach((m) => {
            debug_1.Debug.bot(`[${m.name}] module loaded`);
        });
    }
    run() {
        this.modules.forEach((m) => {
            m.exec();
            setInterval(() => m.exec(), this.freq);
        });
    }
}
exports.Tick = Tick;
//# sourceMappingURL=tick.js.map