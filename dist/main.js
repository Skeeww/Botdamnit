"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.client = void 0;
var discord_js_1 = require("discord.js");
var checkCommands_1 = require("./middlewares/checkCommands");
var guard_1 = require("./middlewares/guard");
var presence_1 = require("./modules/presence");
var tick_1 = require("./modules/tick");
var twitch_1 = require("./modules/twitch");
var command_1 = require("./utils/command");
var commandHandler_1 = require("./utils/commandHandler");
var config_1 = require("./utils/config");
var debug_1 = require("./utils/debug");
var directMessage_1 = require("./utils/directMessage");
process.env.TZ = 'Europe/Paris';
var config = new config_1.Config();
exports.config = config;
var client = new discord_js_1.Client();
exports.client = client;
client.on("ready", function () {
    require("./events/index");
    new tick_1.Tick(10000, [new twitch_1.Twitch(), new presence_1.Presence()]).run();
    debug_1.Debug.bot("Bot ready");
});
client.on("message", function (msg) {
    if (msg.author.bot)
        return;
    if (msg.channel.type === "dm") {
        directMessage_1.DirectMessage.handle(msg);
    }
    else if (checkCommands_1.isCommand(msg.content)) {
        (guard_1.checkPerm(msg.member, new command_1.Command(command_1.Command.extractCommand(msg.content)))) ? new commandHandler_1.HandledCommand(msg) : msg.channel.send(config.PERMISSION_DENIED_MSG);
    }
});
client.login(config.TOKEN).then(function () {
    debug_1.Debug.discord('Connection established');
}).catch(function (r) {
    debug_1.Debug.discord(r);
});
//# sourceMappingURL=main.js.map