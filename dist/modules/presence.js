"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presence = void 0;
const presence_json_1 = __importDefault(require("../config/presence.json"));
const main_1 = require("../main");
const moment_1 = __importDefault(require("moment"));
const discord_js_1 = require("discord.js");
class Presence {
    constructor() {
        this.name = "Presence";
        this.exec = () => {
            var _a;
            if (Presence.i < presence_json_1.default.length) {
                (_a = main_1.client.user) === null || _a === void 0 ? void 0 : _a.setActivity({
                    name: presence_json_1.default[Presence.i] === "!DATE" ? `il est ${moment_1.default().format("HH:mm")}` : presence_json_1.default[Presence.i],
                    type: discord_js_1.ActivityType.Playing
                });
                Presence.i++;
            }
            else {
                Presence.i = 0;
            }
        };
    }
}
exports.Presence = Presence;
Presence.i = 0;
//# sourceMappingURL=presence.js.map