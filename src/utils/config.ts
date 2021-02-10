import dotEnv, { DotenvParseOutput } from "dotenv";
interface IConfig {
    PREFIX: string;
    PERMISSION_DENIED_MSG: string;
    GUILD_ID: string;
    CHANNELS: {
        ANNONCES: string;
        SHARE: string;
        POLLS: string;
        MEME: string;
    };
    RANKS: {};
}

class Config implements IConfig {
    TOKEN: string
    PREFIX: string
    PERMISSION_DENIED_MSG: string
    GUILD_ID: string
    CHANNELS: {
        ANNONCES: string
        SHARE: string
        POLLS: string
        MEME: string
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
        }
        this.RANKS = {}
    }
}

export { Config, IConfig }
