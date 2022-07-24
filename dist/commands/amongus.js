"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const main_1 = require("../main");
const config_1 = require("../utils/config");
function run(cmd) {
    var _a, _b, _c, _d;
    let content = ((_a = cmd.msg.member) === null || _a === void 0 ? void 0 : _a.displayName) || "unknown";
    if (cmd.args.length > 0) {
        content = cmd.args.join(" ");
        if (cmd.msg.mentions.members) {
            content = ((_c = (_b = cmd.msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first()) === null || _c === void 0 ? void 0 : _c.displayName) || "unknown";
        }
    }
    cmd.msg.channel.send(`
        \`\`\`
        . 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ　　 ${content} was ${Math.floor(Math.random() * 2) ? 'not' : ''} An Impostor.　 。　.

　　'　　　 ${Math.floor(Math.random() * ((((_d = main_1.client.guilds.cache.find(g => g.id === config_1.Config.get_instance().GUILD_ID)) === null || _d === void 0 ? void 0 : _d.memberCount) || 5) + 1) + 2)} Impostors remains 　 　　。

　　ﾟ　　　.　　　. ,　　　　.　 .
        \`\`\`
    `);
}
exports.run = run;
//# sourceMappingURL=amongus.js.map