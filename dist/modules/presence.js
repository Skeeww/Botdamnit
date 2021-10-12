"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presence = void 0;
var presence_json_1 = __importDefault(require("../config/presence.json"));
var main_1 = require("../main");
var moment_1 = __importDefault(require("moment"));
var Presence = /** @class */ (function () {
    function Presence() {
        this.name = "Presence";
        this.exec = function () {
            var _a;
            if (Presence.i < presence_json_1.default.length) {
                (_a = main_1.client.user) === null || _a === void 0 ? void 0 : _a.setActivity({
                    name: presence_json_1.default[Presence.i] === "!DATE" ? "il est " + moment_1.default().format("HH:mm") : presence_json_1.default[Presence.i],
                    type: "PLAYING"
                });
                Presence.i++;
            }
            else {
                Presence.i = 0;
            }
        };
    }
    Presence.i = 0;
    return Presence;
}());
exports.Presence = Presence;
//# sourceMappingURL=presence.js.map