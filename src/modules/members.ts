import { Guild } from "discord.js"
import { client } from "../main"
import { Config } from "../utils/config"
import Database from "../utils/mongo"
import { IModule } from "./tick"

class Members implements IModule{
    name: string = "Members"
    exec: Function = (freq: number) => {
        const guild: Guild = client.guilds.cache.find(g => g.id === Config.get_instance().GUILD_ID)!
        setInterval(() => {
            guild.channels.cache.find(c => c.type === "GUILD_CATEGORY" && c.id === Config.get_instance().CHANNELS.SECTION_MEMBERS)?.setName(`#DEFINE NB_MEMBERS ${guild.memberCount}`)
            Database.get_instance().updateMembers(guild)
        }, freq)
    }
}

export { Members }