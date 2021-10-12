import { Guild, TextChannel } from "discord.js"
import moment from "moment"
import { client } from "../main"
import { Config } from "../utils/config"
import { IModule } from "./tick"

class Ligma implements IModule{
    name: string = "Ligma"
    exec: Function = () => {
        const guild: Guild = client.guilds.resolve(Config.get_instance().GUILD_ID)!
        const destDate = moment("2021-11-01")
        const emojis = [":regional_indicator_u:",":regional_indicator_g:",":regional_indicator_e:",":regional_indicator_t:",":regional_indicator_n:",":regional_indicator_o:",":regional_indicator_n:",":regional_indicator_u:",":regional_indicator_t:",":regional_indicator_n:",":regional_indicator_o:",":regional_indicator_v:",":regional_indicator_e:",":regional_indicator_m:",":regional_indicator_b:",":regional_indicator_e:",":regional_indicator_r:",":regional_indicator_e:",":regional_indicator_d:"]
        emojis.reverse()
        const nb_days = destDate.diff(moment(), 'days');
        (guild.channels.resolve(Config.get_instance().CHANNELS.LIGMA) as TextChannel).send(`${emojis[nb_days-1]} *-${nb_days} jours*`)
    }
}

export { Ligma }