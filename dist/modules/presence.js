"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presence = void 0;
var main_1 = require("../main");
var Presence = /** @class */ (function () {
    function Presence() {
        this.name = "Presence";
        this.exec = function (freq) {
            var presence = require("../config/presence.json");
            var date = new Date();
            var i = 0;
            setInterval(function () {
                var _a;
                if (i < presence.length) {
                    (_a = main_1.client.user) === null || _a === void 0 ? void 0 : _a.setActivity({
                        name: presence[i] === "!DATE" ? "il est " + date.getHours() + "h" + date.getMinutes() : presence[i],
                        type: "PLAYING",
                        url: "https://www.bigpapoo.fr"
                    });
                    i++;
                }
                else {
                    i = 0;
                }
            }, freq);
        };
    }
    return Presence;
}());
exports.Presence = Presence;
//# sourceMappingURL=presence.js.map