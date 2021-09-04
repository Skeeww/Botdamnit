"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
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
var config = config_1.Config.get_instance();
var client = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS
    ]
});
exports.client = client;
client.on("ready", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        require("./events/index");
        new tick_1.Tick(10000, [new twitch_1.Twitch, new presence_1.Presence]).run();
        debug_1.Debug.bot("Bot ready");
        return [2 /*return*/];
    });
}); });
client.on("messageCreate", function (msg) {
    if (msg.author.bot)
        return;
    if (msg.channel.type === "DM") {
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