"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var discord_js_1 = require("discord.js");
var debug_1 = require("./utils/debug");
var commandHandler_1 = require("./utils/commandHandler");
var config_1 = require("./utils/config");
var tick_1 = require("./modules/tick");
var presence_1 = require("./modules/presence");
var directMessage_1 = require("./utils/directMessage");
var twitch_1 = require("./modules/twitch");
var autorank_1 = require("./modules/autorank");
var colorfiesta_1 = require("./modules/colorfiesta");
var birthday_1 = require("./modules/birthday");
process.env.TZ = 'Europe/Paris';
exports.client = new discord_js_1.Client();
exports.client.on("ready", function () {
    require('./events/Reddit');
    //require('./events/Rules')
    debug_1.Debug.discord('\'ready\' event is triggered');
    new tick_1.Tick(parseInt(config_1.Config.TIME_BEFORE_CHANGE), [new presence_1.Presence(), new autorank_1.AutoRank()]).run();
    new tick_1.Tick(60000, [new birthday_1.Birthday()]).run();
    new tick_1.Tick(600000, [new twitch_1.Twitch()]).run();
    new tick_1.Tick(21600000, [new colorfiesta_1.ColorFiesta()]).run();
});
exports.client.on("message", function (msg) {
    if (msg.author.bot)
        return;
    (msg.channel.type === "dm") ? directMessage_1.DirectMessage.handle(msg) : commandHandler_1.Handler.handle(msg);
});
exports.client.login(config_1.Config.BOT_TOKEN).then(function () {
    debug_1.Debug.discord('Connection established');
}).catch(function (r) {
    debug_1.Debug.discord(r);
});
//# sourceMappingURL=main.js.map