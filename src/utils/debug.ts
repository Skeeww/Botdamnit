import debug from 'debug'

namespace Debug {
    const dDiscord: debug.Debugger = debug('Discord')
    const dBot: debug.Debugger = debug('Bot')

    export function discord(content: any) {
        dDiscord(content)
    }
    export function bot(content: any) {
        dBot(content)
    }
}

export { Debug }