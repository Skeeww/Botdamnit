import { Client } from 'discord.js'
import { Debug } from "./utils/debug"
import { Handler } from './utils/commandHandler'
import { Config } from './utils/config'

const client: Client = new Client()

client.on("ready", () => {
    Debug.discord('\'ready\' event is triggered')
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