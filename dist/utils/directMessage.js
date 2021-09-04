"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectMessage = void 0;
var config_1 = require("./config");
var DirectMessage;
(function (DirectMessage) {
    function handle(msg) {
        var _a;
        ((_a = msg.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.find(function (c) { return c.id === config_1.Config.get_instance().CHANNELS.ANO; })).send(msg.content + "\n==========");
    }
    DirectMessage.handle = handle;
})(DirectMessage || (DirectMessage = {}));
exports.DirectMessage = DirectMessage;
//# sourceMappingURL=directMessage.js.map