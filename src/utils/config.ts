import dotEnv, { DotenvParseOutput } from "dotenv";

class Config {
    public static instance: Config;

    TOKEN: string
    PREFIX: string
    PERMISSION_DENIED_MSG: string
    GUILD_ID: string
    OPENAI_API: string
    IMDB_API_KEY: string
    CHANNELS: {
        ANNONCES: string
        SHARE: string
        POLLS: string
        MEME: string
        ANO: string
        RECURENCE: string,
        KAPI_RADIO: string
    }
    private RANKS: {}


    private constructor() {
        const EnvConfig: DotenvParseOutput = dotEnv.config().parsed as DotenvParseOutput;

        this.TOKEN = EnvConfig.BOT_TOKEN
        this.PREFIX = EnvConfig.PREFIX
        this.PERMISSION_DENIED_MSG = EnvConfig.PERMISSION_DENIED_MSG
        this.GUILD_ID = EnvConfig.GUILD_ID
        this.OPENAI_API = EnvConfig.OPENAI_API
        this.CHANNELS = {
            ANNONCES: EnvConfig.ANNONCES,
            SHARE: EnvConfig.SHARE,
            POLLS: EnvConfig.POLLS,
            MEME: EnvConfig.MEME,
            ANO: EnvConfig.ANO,
            RECURENCE: EnvConfig.RECURENCE,
            KAPI_RADIO: EnvConfig.KAPI_RADIO
        }
        this.RANKS = {}
        this.IMDB_API_KEY = EnvConfig.IMDB_API_KEY
    }

    public static get_instance(): Config {
        if(!Config.instance){
            Config.instance = new this()
        }
        return Config.instance
    }
}

export { Config }
