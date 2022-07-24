import { config, DotenvParseOutput } from "dotenv";
import { existsSync, lstatSync, mkdirSync } from "fs";

class Config {
    public static instance: Config;

    TOKEN: string
    PREFIX: string
    PERMISSION_DENIED_MSG: string
    GUILD_ID: string
    OPENAI_API: string
    IMDB_API_KEY: string
    STORAGE_PATH: string
    MONGODB: {
        URL: string
        COLLECTION: string
    }
    CHANNELS: {
        ANNONCES: string
        SHARE: string
        POLLS: string
        MEME: string
        ANO: string
        RECURENCE: string,
        KAPI_RADIO: string,
        SECTION_MEMBERS: string,
        LIGMA: string
    }
    private RANKS: {}


    private constructor() {
        const EnvConfig: DotenvParseOutput = config().parsed as DotenvParseOutput;

        this.TOKEN = EnvConfig.BOT_TOKEN
        this.PREFIX = EnvConfig.PREFIX || '.'
        this.PERMISSION_DENIED_MSG = EnvConfig.PERMISSION_DENIED_MSG || 'Vous n\'avez pas la permission d\'exécuter cette commande'
        this.GUILD_ID = EnvConfig.GUILD_ID
        this.OPENAI_API = EnvConfig.OPENAI_API
        this.STORAGE_PATH = EnvConfig.STORAGE_PATH || './storage'
        this.MONGODB = {
            URL: EnvConfig.MONGODB_URL,
            COLLECTION: EnvConfig.MONGODB_COLLECTION
        }
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
        }
        this.RANKS = {}
        this.IMDB_API_KEY = EnvConfig.IMDB_API_KEY
    }

    public check_storage_folder(): boolean {
        if (existsSync(this.STORAGE_PATH)) {
            return lstatSync(this.STORAGE_PATH).isDirectory()
        }
        return false
    }

    public create_storage_folder(): boolean {
        mkdirSync(this.STORAGE_PATH, {recursive: true})
        return lstatSync(this.STORAGE_PATH).isDirectory()
    }

    public static get_instance(): Config {
        if(!Config.instance){
            Config.instance = new this()
        }
        return Config.instance
    }
}

export { Config }
