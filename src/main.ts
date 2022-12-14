import { Client, GatewayIntentBits, Partials,  } from "discord.js"
import { Members } from "./modules/members"
import { Presence } from "./modules/presence"
import { Tick } from "./modules/tick"
import { Config } from "./utils/config"
import { Debug } from "./utils/debug"

process.env.TZ = 'Europe/Paris'

const config: Config = Config.get_instance()
const client: Client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message
    ]
})

client.on("ready", () => {
    require("./events/index")
    if (!config.check_storage_folder()) {
        Debug.bot('Storage folder not found, try creating it...')
        if (config.create_storage_folder()) {
            Debug.bot('Storage folder created')
        } else {
            Debug.bot('Creation of storage folder failed')
        }
    }
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