"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectMessage = void 0;
var main_1 = require("../main");
var config_1 = require("./config");
var DirectMessage;
(function (DirectMessage) {
    function handle(msg) {
        var guild = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; });
        if (guild) {
            var chann = guild.channels.cache.find(function (c) { return c.id === config_1.Config.GROUPE_CALIN; });
            if (chann) {
                chann.send(msg.content + "\n-----------");
                msg.channel.send(":white_check_mark: Message envoyé !");
            }
        }
    }
    DirectMessage.handle = handle;
})(DirectMessage || (DirectMessage = {}));
exports.DirectMessage = DirectMessage;
//# sourceMappingURL=directMessage.js.map