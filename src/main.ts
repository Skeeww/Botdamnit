import { Client, Intents, Message } from "discord.js"
import { isCommand } from "./middlewares/checkCommands"
import { checkPerm } from "./middlewares/guard"
import { Dns } from "./modules/dns"
import { Members } from "./modules/members"
import { Presence } from "./modules/presence"
import { Tick } from "./modules/tick"
import { Twitch } from "./modules/twitch"
import { Command } from "./utils/command"
import { HandledCommand } from "./utils/commandHandler"
import { Config } from "./utils/config"
import { Debug } from "./utils/debug"
import { DirectMessage } from "./utils/directMessage"

process.env.TZ = 'Europe/Paris'

const config: Config = Config.get_instance()
const client: Client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

client.on("ready", async () => {
    require("./events/index")
    new Tick(10 * 1000, [new Twitch, new Presence, new Dns]).run()
    new Tick(3600 * 1000, [new Members]).run()
    Debug.bot("Bot ready")
})

client.on("messageCreate", (msg: Message) => {
    if (msg.author.bot) { return }
    if (msg.channel.type === "DM") {
        DirectMessage.handle(msg)
    } else if (isCommand(msg.content)) {
        (checkPerm(msg.member!, new Command(Command.extractCommand(msg.content)))) ? new HandledCommand(msg) : msg.channel.send(config.PERMISSION_DENIED_MSG)
    }
})

client.login(config.TOKEN).then(() => {
    Debug.discord('Connection established')
}).catch((r) => {
    Debug.discord(r)
})

export { client }