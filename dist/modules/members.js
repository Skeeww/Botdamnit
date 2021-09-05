"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var mongo_1 = __importDefault(require("../utils/mongo"));
var Members = /** @class */ (function () {
    function Members() {
        this.name = "Members";
        this.exec = function (freq) {
            var guild = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.get_instance().GUILD_ID; });
            setInterval(function () {
                var _a;
                (_a = guild.channels.cache.find(function (c) { return c.type === "GUILD_CATEGORY" && c.id === config_1.Config.get_instance().CHANNELS.SECTION_MEMBERS; })) === null || _a === void 0 ? void 0 : _a.setName("#DEFINE NB_MEMBERS " + guild.memberCount);
                mongo_1.default.get_instance().updateMembers(guild);
            }, freq);
        };
    }
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map