import debug from 'debug'
const log = require('simple-node-logger')

const LOGGER = log.createRollingFileLogger({
        logDirectory:'./src/log',
        fileNamePattern:'<DATE>.log',
        dateFormat:'YYYY-MM-DD',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
})
namespace Debug {
    const dDiscord: debug.Debugger = debug('Discord')
    const dBot: debug.Debugger = debug('Bot')

    export function discord(content: any) {
        dDiscord(content)
        LOGGER.info(`[DISCORD] ${content}`)
    }
    export function bot(content: any) {
        dBot(content)
        LOGGER.info(`[BOT] ${content}`)
    }

    process.on("uncaughtException", (err) => {
        Debug.bot(err)
    })
    process.on("unhandledRejection", (err) => {
        Debug.bot(err)
    })
}

export { Debug }