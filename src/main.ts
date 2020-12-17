import Eris, { CommandClient } from 'eris'
import { Debug } from "./utils/debug"
import { Config } from './utils/config'

process.env.TZ = 'Europe/Paris'

export const client: CommandClient = new Eris.CommandClient(Config.BOT_TOKEN, {}, {
    name: "Botdamnit",
    description: "Incredible bot full of useless features !",
    prefix: ".",
    owner: "Skew",
    argsSplitter: (str) => {
        return str.split(",")
    }
})

client.on("ready", () => {
    Debug.discord('\'ready\' event is triggered')
    require('./events')
})

client.on("rawWS", (packet, id) => {
    Debug.bot(`${id}: ${packet.t}`)
})

client.connect().then(() => {
    Debug.discord("Bot connected")
}).catch(() => {
    Debug.discord("Failure to connect the bot")
})