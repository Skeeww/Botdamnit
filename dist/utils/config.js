"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
class Config {
    constructor() {
        const EnvConfig = dotenv_1.config().parsed;
        this.TOKEN = EnvConfig.BOT_TOKEN;
        this.PREFIX = EnvConfig.PREFIX || '.';
        this.PERMISSION_DENIED_MSG = EnvConfig.PERMISSION_DENIED_MSG || 'Vous n\'avez pas la permission d\'exécuter cette commande';
        this.GUILD_ID = EnvConfig.GUILD_ID;
        this.OPENAI_API = EnvConfig.OPENAI_API;
        this.STORAGE_PATH = EnvConfig.STORAGE_PATH || './storage';
        this.MONGODB = {
            URL: EnvConfig.MONGODB_URL,
            COLLECTION: EnvConfig.MONGODB_COLLECTION
        };
        this.CHANNELS = {
            ANNONCES: EnvConfig.ANNONCES,
            SHARE: EnvConfig.SHARE,
            POLLS: EnvConfig.POLLS,
            MEME: EnvConfig.MEME,
            ANO: EnvConfig.ANO,
            RECURENCE: EnvConfig.RECURENCE,
            KAPI_RADIO: EnvConfig.KAPI_RADIO,
            SECTION_MEMBERS: EnvConfig.SECTION_MEMBERS,
            LIGMA: EnvConfig.LIGMA
        };
        this.RANKS = {};
        this.IMDB_API_KEY = EnvConfig.IMDB_API_KEY;
    }
    check_storage_folder() {
        if (fs_1.existsSync(this.STORAGE_PATH)) {
            return fs_1.lstatSync(this.STORAGE_PATH).isDirectory();
        }
        return false;
    }
    create_storage_folder() {
        fs_1.mkdirSync(this.STORAGE_PATH, { recursive: true });
        return fs_1.lstatSync(this.STORAGE_PATH).isDirectory();
    }
    static get_instance() {
        if (!Config.instance) {
            Config.instance = new this();
        }
        return Config.instance;
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map