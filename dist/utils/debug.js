"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
var debug_1 = __importDefault(require("debug"));
var Debug;
(function (Debug) {
    var dDiscord = debug_1.default('Discord');
    var dBot = debug_1.default('Bot');
    function discord(content) {
        dDiscord(content);
    }
    Debug.discord = discord;
    function bot(content) {
        dBot(content);
    }
    Debug.bot = bot;
})(Debug || (Debug = {}));
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map