"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mod = void 0;
var pusher_1 = __importDefault(require("pusher"));
var main_1 = require("../main");
var config_1 = require("../utils/config");
var Mod;
(function (Mod) {
    var _a;
    var pusher = new pusher_1.default({
        appId: config_1.Config.PUSHER_APP_ID,
        key: config_1.Config.PUSHER_API_KEY,
        secret: config_1.Config.PUSHER_APP_SECRET,
        cluster: config_1.Config.PUSHER_REGION,
        useTLS: true
    });
    main_1.client.on("messageCreate", function (msg) {
        pusher.trigger("discordmod", "message", JSON.stringify({
            message: msg,
            channelinfo: main_1.client.getChannel(msg.channel.id)
        }));
    });
    pusher.trigger("discordmod", "meta", (_a = main_1.client.guilds.get(config_1.Config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.filter(function (m) { return m.status === "online" || m.status === "dnd"; }).length);
    setInterval(function () {
        var _a;
        pusher.trigger("discordmod", "meta", (_a = main_1.client.guilds.get(config_1.Config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.filter(function (m) { return m.status === "online" || m.status === "dnd"; }).length);
    }, 60000);
})(Mod = exports.Mod || (exports.Mod = {}));
//# sourceMappingURL=Mod.js.map