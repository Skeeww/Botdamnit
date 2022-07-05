"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var discord_js_1 = require("discord.js");
var members_1 = require("./modules/members");
var presence_1 = require("./modules/presence");
var tick_1 = require("./modules/tick");
var config_1 = require("./utils/config");
var debug_1 = require("./utils/debug");
process.env.TZ = 'Europe/Paris';
var config = config_1.Config.get_instance();
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.DIRECT_MESSAGES,
        discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
    ],
    partials: [
        "CHANNEL"
    ]
});
exports.client = client;
client.on("ready", function () {
    require("./events/index");
    new tick_1.Tick(10 * 1000, [new presence_1.Presence]).run();
    new tick_1.Tick(3600 * 1000, [new members_1.Members]).run();
    debug_1.Debug.bot("Bot ready");
});
client.login(config.TOKEN).then(function () {
    debug_1.Debug.discord('Connection established');
}).catch(function (r) {
    debug_1.Debug.discord(r);
});
//# sourceMappingURL=main.js.map