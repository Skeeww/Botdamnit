import dotEnv, { DotenvParseOutput } from "dotenv";
interface IConfig {
    PREFIX: string
    PERMISSION_DENIED_MSG: string
    GUILD_ID: string
    SALT: string
    CHANNELS: {
        ANNONCES: string
        SHARE: string
        POLLS: string
        MEME: string
        ANO: string
        RECURENCE: string
    }
    RANKS: {}
}

class Config implements IConfig {
    TOKEN: string
    PREFIX: string
    PERMISSION_DENIED_MSG: string
    GUILD_ID: string
    SALT: string
    IMDB_API_KEY: string
    CHANNELS: {
        ANNONCES: string
        SHARE: string
        POLLS: string
        MEME: string
        ANO: string
        RECURENCE: string
    }
    RANKS: {}


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
            RECURENCE: EnvConfig.RECURENCE
        }
        this.RANKS = {}
        this.SALT = EnvConfig.SALT
        this.IMDB_API_KEY = EnvConfig.IMDB_API_KEY
    }
}

export { Config }
