import dotEnv, { DotenvParseOutput } from 'dotenv'

const Config: DotenvParseOutput = dotEnv.config().parsed as DotenvParseOutput

export { Config }