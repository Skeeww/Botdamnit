import { Client, Intents } from "discord.js"
import { Members } from "./modules/members"
import { Presence } from "./modules/presence"
import { Tick } from "./modules/tick"
import { Config } from "./utils/config"
import { Debug } from "./utils/debug"

process.env.TZ = 'Europe/Paris'

const config: Config = Config.get_instance()
const client: Client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
    partials: [
        "CHANNEL"
    ]
})

client.on("ready", () => {
    require("./events/index")
    new Tick(10 * 1000, [new Presence]).run()
    new Tick(3600 * 1000, [new Members]).run()
    Debug.bot("Bot ready")
})

client.login(config.TOKEN).then(() => {
    Debug.discord('Connection established')
}).catch((r) => {
    Debug.discord(r)
})

export { client }