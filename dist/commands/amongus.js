"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var Command;
(function (Command) {
    function run(msg, cmd, args) {
        var _a, _b, _c, _d;
        if (args === void 0) { args = []; }
        var content = ((_a = msg.member) === null || _a === void 0 ? void 0 : _a.displayName) || "unknown";
        if ((args === null || args === void 0 ? void 0 : args.length) > 0) {
            content = args === null || args === void 0 ? void 0 : args.join(" ");
            if (msg.mentions.members) {
                content = ((_c = (_b = msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first()) === null || _c === void 0 ? void 0 : _c.displayName) || "unknown";
            }
        }
        msg.channel.send("\n            ```\n            . \u3000\u3000\u3000\u3002\u3000\u3000\u3000\u3000\u2022\u3000 \u3000\uFF9F\u3000\u3000\u3002 \u3000\u3000.\n\n\u3000\u3000\u3000.\u3000\u3000\u3000 \u3000\u3000.\u3000\u3000\u3000\u3000\u3000\u3002\u3000\u3000 \u3002\u3000. \u3000\n\n.\u3000\u3000 \u3002\u3000\u3000\u3000\u3000\u3000 \u0D9E \u3002 . \u3000\u3000 \u2022 \u3000\u3000\u3000\u3000\u2022\n\n\u3000\u3000\uFF9F\u3000\u3000 " + content + " was " + (Math.floor(Math.random() * 2) ? 'not' : '') + " An Impostor.\u3000 \u3002\u3000.\n\n\u3000\u3000'\u3000\u3000\u3000 " + Math.floor(Math.random() * ((((_d = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.GUILD_ID; })) === null || _d === void 0 ? void 0 : _d.memberCount) || 5) + 1) + 2) + " Impostors remains \u3000 \u3000\u3000\u3002\n\n\u3000\u3000\uFF9F\u3000\u3000\u3000.\u3000\u3000\u3000. ,\u3000\u3000\u3000\u3000.\u3000 .\n            ```\n        ");
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=amongus.js.map