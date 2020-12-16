"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../main");
var config_1 = require("../utils/config");
var debug_1 = require("../utils/debug");
var Event;
(function (Event) {
    debug_1.Debug.bot("[Rules] event loaded");
    /* Add rank if rules are accepted or remove */
    main_1.client.on("messageReactionAdd", function (react, user) {
        var _a, _b;
        if (react.message.id === config_1.Config.RULES_MESSAGE) {
            (_b = (_a = react.message.guild) === null || _a === void 0 ? void 0 : _a.members.cache.find(function (m) { return m.id === user.id; })) === null || _b === void 0 ? void 0 : _b.roles.add(config_1.Config.SATAN).then(function () {
                debug_1.Debug.bot(user.tag + " has accepted the rules " + react.emoji.name);
            });
        }
    });
    main_1.client.on("messageReactionRemove", function (react, user) {
        var _a, _b;
        if (react.message.id === config_1.Config.RULES_MESSAGE) {
            (_b = (_a = react.message.guild) === null || _a === void 0 ? void 0 : _a.members.cache.find(function (m) { return m.id === user.id; })) === null || _b === void 0 ? void 0 : _b.roles.remove(config_1.Config.SATAN).then(function () {
                debug_1.Debug.bot(user.tag + " has refused the rules");
            });
        }
    });
})(Event || (Event = {}));
//# sourceMappingURL=Rules.js.map