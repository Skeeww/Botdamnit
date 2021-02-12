"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theo = void 0;
var moment_1 = __importDefault(require("moment"));
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var hours = ["07:03", "08:30", "13:32", "16:07", "18:35", "20:02"];
var Theo = /** @class */ (function () {
    function Theo() {
        this.name = "Theo";
        this.exec = function (freq) {
            setInterval(function () {
                var _a, _b;
                if (hours.includes(moment_1.default().format("HH:mm"))) {
                    (_b = (_a = main_1.client.guilds.cache.find(function (g) { return g.id === main_1.config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.members.cache.find(function (m) { return m.id === "305765614872559618"; })) === null || _b === void 0 ? void 0 : _b.send("Il est l'heure Théo !").then(function () {
                        debug_1.Debug.bot("Called Theo");
                    }).catch(function (err) {
                        debug_1.Debug.bot(err);
                    });
                }
            }, freq);
        };
    }
    return Theo;
}());
exports.Theo = Theo;
//# sourceMappingURL=theo.js.map