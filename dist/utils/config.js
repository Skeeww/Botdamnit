"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var Config = /** @class */ (function () {
    function Config() {
        var EnvConfig = dotenv_1.default.config()
            .parsed;
        this.PREFIX = EnvConfig.PREFIX;
        this.PERMISSION_DENIED_MSG = EnvConfig.PERMISSION_DENIED_MSG;
        this.GUILD_ID = EnvConfig.GUILD_ID;
        this.CHANNELS = {
            ANNONCES: EnvConfig.ANNONCES,
            SHARE: EnvConfig.SHARE,
            POLLS: EnvConfig.POLLS,
            MEME: EnvConfig.MEME,
        };
        this.RANKS = {};
    }
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map