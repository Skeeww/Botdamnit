import dotEnv, { DotenvParseOutput } from "dotenv";

class Config {
    TOKEN: string
    PREFIX: string
    PERMISSION_DENIED_MSG: string
    GUILD_ID: string
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


    constructor() {
        const EnvConfig: DotenvParseOutput = dotEnv.config().parsed as DotenvParseOutput;

        this.TOKEN = EnvConfig.BOT_TOKEN
        this.PREFIX = EnvConfig.PREFIX
        this.PERMISSION_DENIED_MSG = EnvConfig.PERMISSION_DENIED_MSG
        this.GUILD_ID = EnvConfig.GUILD_ID
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
}

export { Config }
