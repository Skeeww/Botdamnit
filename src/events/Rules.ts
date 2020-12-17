import { Message } from "eris"
import { client } from "../main"
import { Config } from "../utils/config"
import { Debug } from "../utils/debug"
export namespace Rules {
    Debug.bot("Rules module loaded")
    client.on("messageReactionAdd", (msg, emoji, member) => {
        if(!msg.guildID || msg.id !== Config.RULES_MESSAGE) return
        client.guilds.find(g => g.id === Config.GUILD_ID)?.members.find(m => m.id === member.id)?.addRole(Config.SATAN, "accepted rules")
    })
    client.on("messageReactionRemove", (msg, emoji, member) => {
        if(!msg.guildID || msg.id !== Config.RULES_MESSAGE) return
        client.guilds.find(g => g.id === Config.GUILD_ID)?.members.find(m => m.id === member)?.removeRole(Config.SATAN, "refused rules")
    })
}