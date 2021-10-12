import { Guild, GuildChannel } from "discord.js"
import { client } from "../main"
import { Config } from "../utils/config"
import Database from "../utils/mongo"
import { IModule } from "./tick"

class Members implements IModule{
    name: string = "Members"
    exec: Function = () => {
        const guild: Guild = client.guilds.cache.find(g => g.id === Config.get_instance().GUILD_ID)!
        const chan: GuildChannel = (guild.channels.resolve(Config.get_instance().CHANNELS.SECTION_MEMBERS) as GuildChannel)
        if(chan){
            chan.setName(`#DEFINE NB_MEMBERS ${guild.memberCount}`)
            Database.get_instance().updateMembers(guild)
        }
    }
}

export { Members }