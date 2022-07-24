"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const members_1 = require("./modules/members");
const presence_1 = require("./modules/presence");
const tick_1 = require("./modules/tick");
const config_1 = require("./utils/config");
const debug_1 = require("./utils/debug");
process.env.TZ = 'Europe/Paris';
const config = config_1.Config.get_instance();
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildMessageReactions,
        discord_js_1.GatewayIntentBits.GuildMessageTyping,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildVoiceStates,
        discord_js_1.GatewayIntentBits.DirectMessages,
        discord_js_1.GatewayIntentBits.DirectMessageReactions,
        discord_js_1.GatewayIntentBits.DirectMessageTyping,
        discord_js_1.GatewayIntentBits.MessageContent
    ],
    partials: [
        discord_js_1.Partials.Channel,
        discord_js_1.Partials.GuildMember,
        discord_js_1.Partials.Message
    ]
});
exports.client = client;
client.on("ready", () => {
    require("./events/index");
    if (!config.check_storage_folder()) {
        debug_1.Debug.bot('Storage folder not found, try creating it...');
        if (config.create_storage_folder()) {
            debug_1.Debug.bot('Storage folder created');
        }
        else {
            debug_1.Debug.bot('Creation of storage folder failed');
        }
    }
    new tick_1.Tick(10 * 1000, [new presence_1.Presence]).run();
    new tick_1.Tick(3600 * 1000, [new members_1.Members]).run();
    debug_1.Debug.bot("Bot ready");
});
client.login(config.TOKEN).then(() => {
    debug_1.Debug.discord('Connection established');
}).catch((r) => {
    debug_1.Debug.discord(r);
});
//# sourceMappingURL=main.js.map