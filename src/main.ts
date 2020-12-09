import { Client } from 'discord.js'
import { Debug } from "./utils/debug"
import { Handler } from './utils/commandHandler'
import { Config } from './utils/config'
import { Tick } from './modules/tick'
import { Presence } from './modules/presence'
import { DirectMessage } from './utils/directMessage'
import { Twitch } from './modules/twitch'
import { AutoRank } from './modules/autorank'
import { ColorFiesta } from './modules/colorfiesta'
import { Birthday } from './modules/birthday'
import { NNN } from './modules/nnn'

process.env.TZ = 'Europe/Paris'

export const client: Client = new Client()

client.on("ready", () => {
    Debug.discord('\'ready\' event is triggered')
    new Tick(parseInt(Config.TIME_BEFORE_CHANGE), [new Presence(), new AutoRank()]).run()
    new Tick(60000, [new NNN(), new Birthday()]).run()
    new Tick(600000, [new Twitch()]).run()
    new Tick(21600000, [new ColorFiesta()]).run()
})

client.on("message", msg => {
    if(msg.author.bot) return
    (msg.channel.type === "dm") ? DirectMessage.handle(msg) : Handler.handle(msg)
})

client.on("messageReactionAdd", (react, user) => {
    if(react.emoji.name === "downvote" && (react.count || 0) >= 10){
        react.message.delete()
    }
    else if(react.emoji.name === "upvote" && (react.count || 0) >= 20){
        react.message.pin({reason: "Upvoted"})
    }
})

client.login(Config.BOT_TOKEN).then(() => {
    Debug.discord('Connection established')
}).catch(r => {
    Debug.discord(r)
})