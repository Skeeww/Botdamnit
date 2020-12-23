"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
var debug_1 = __importDefault(require("debug"));
var log = require('simple-node-logger');
var LOGGER = log.createRollingFileLogger({
    logDirectory: './src/log',
    fileNamePattern: '<DATE>.log',
    dateFormat: 'YYYY-MM-DD',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
});
var Debug;
(function (Debug) {
    var dDiscord = debug_1.default('Discord');
    var dBot = debug_1.default('Bot');
    function discord(content) {
        dDiscord(content);
        LOGGER.info("[DISCORD] " + content);
    }
    Debug.discord = discord;
    function bot(content) {
        dBot(content);
        LOGGER.info("[BOT] " + content);
    }
    Debug.bot = bot;
    process.on("uncaughtException", function (err) {
        Debug.bot(err);
    });
    process.on("unhandledRejection", function (err) {
        Debug.bot(err);
    });
})(Debug || (Debug = {}));
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map