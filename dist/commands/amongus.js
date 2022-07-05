"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
function run(cmd) {
    var _a, _b, _c, _d;
    var content = ((_a = cmd.msg.member) === null || _a === void 0 ? void 0 : _a.displayName) || "unknown";
    if (cmd.args.length > 0) {
        content = cmd.args.join(" ");
        if (cmd.msg.mentions.members) {
            content = ((_c = (_b = cmd.msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first()) === null || _c === void 0 ? void 0 : _c.displayName) || "unknown";
        }
    }
    cmd.msg.channel.send("\n        ```\n        . \u3000\u3000\u3000\u3002\u3000\u3000\u3000\u3000\u2022\u3000 \u3000\uFF9F\u3000\u3000\u3002 \u3000\u3000.\n\n\u3000\u3000\u3000.\u3000\u3000\u3000 \u3000\u3000.\u3000\u3000\u3000\u3000\u3000\u3002\u3000\u3000 \u3002\u3000. \u3000\n\n.\u3000\u3000 \u3002\u3000\u3000\u3000\u3000\u3000 \u0D9E \u3002 . \u3000\u3000 \u2022 \u3000\u3000\u3000\u3000\u2022\n\n\u3000\u3000\uFF9F\u3000\u3000 ".concat(content, " was ").concat(Math.floor(Math.random() * 2) ? 'not' : '', " An Impostor.\u3000 \u3002\u3000.\n\n\u3000\u3000'\u3000\u3000\u3000 ").concat(Math.floor(Math.random() * ((((_d = main_1.client.guilds.cache.find(function (g) { return g.id === config_1.Config.get_instance().GUILD_ID; })) === null || _d === void 0 ? void 0 : _d.memberCount) || 5) + 1) + 2), " Impostors remains \u3000 \u3000\u3000\u3002\n\n\u3000\u3000\uFF9F\u3000\u3000\u3000.\u3000\u3000\u3000. ,\u3000\u3000\u3000\u3000.\u3000 .\n        ```\n    "));
}
exports.run = run;
//# sourceMappingURL=amongus.js.map