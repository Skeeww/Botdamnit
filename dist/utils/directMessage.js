"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectMessage = void 0;
var main_1 = require("../main");
var DirectMessage;
(function (DirectMessage) {
    function handle(msg) {
        var _a;
        ((_a = main_1.client.guilds.cache.find(function (g) { return g.id === main_1.config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.channels.cache.find(function (c) { return c.id === main_1.config.CHANNELS.ANO; })).send(msg.content + "\n==========");
    }
    DirectMessage.handle = handle;
})(DirectMessage || (DirectMessage = {}));
exports.DirectMessage = DirectMessage;
//# sourceMappingURL=directMessage.js.map