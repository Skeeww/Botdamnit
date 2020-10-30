import { Client } from 'discord.js'
import { Debug } from "./utils/debug"
import { Handler } from './utils/commandHandler'
import { Config } from './utils/config'
import { Tick } from './modules/tick'
import { Presence } from './modules/presence'

export const client: Client = new Client()

client.on("ready", () => {
    Debug.discord('\'ready\' event is triggered')
    new Tick(parseInt(Config.TIME_BEFORE_CHANGE), [new Presence()]).run()
})

client.on("message", msg => {
    if(msg.author.bot) return
    Handler.handle(msg)
})

client.login(Config.BOT_TOKEN).then(() => {
    Debug.discord('Connection established')
}).catch(r => {
    Debug.discord(r)
})