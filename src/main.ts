import { Client } from "discord.js"
import { isCommand } from "./middlewares/checkCommands"
import { checkPerm } from "./middlewares/guard"
import { Presence } from "./modules/presence"
import { Tick } from "./modules/tick"
import { Twitch } from "./modules/twitch"
import { Command } from "./utils/command"
import { HandledCommand } from "./utils/commandHandler"
import { Config } from "./utils/config"
import { Debug } from "./utils/debug"
import { DirectMessage } from "./utils/directMessage"

process.env.TZ = 'Europe/Paris'

const config: Config = new Config()
const client: Client = new Client()

client.on("ready", async () => {
    require("./events/index")
    new Tick(10000, [new Twitch, new Presence]).run()
    Debug.bot("Bot ready")
})

client.on("message", async (msg) => {
    if (msg.author.bot) return
    if (msg.channel.type === "dm") {
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

export { client, config }