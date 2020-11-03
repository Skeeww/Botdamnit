import { MessageEmbed, TextChannel } from "discord.js";
import axios from "axios";
import { client } from "../main";
import { Config } from "../utils/config";
import { IModule } from "./tick";

class NNN implements IModule{
    name: string = "NNN"
    exec: Function = (freq: number) => {
        const tar: Date = new Date(2020, 12, 1)

        setInterval(() => {
            
            if(new Date(Date.now()).getHours() === 1 && new Date(Date.now()).getMinutes() === 0){
            let embed: MessageEmbed = new MessageEmbed()
            axios.get("https://quotes.rest/qod", {headers: {"Accept": "application/json"}}).then(res => {
                embed.setTitle(`${31 - new Date(Date.now()).getDate()} jours restants (${Math.round(new Date(Date.now()).getDate() * 100 / 31)}%)`)
                embed.setDescription(`> ${res.data.contents.quotes[0].quote}\n----------\n*${res.data.contents.quotes[0].author}*`)
                embed.setColor(0x00ff00);
                (client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.channels.cache.find(c => c.id === Config.NNN) as TextChannel).send(embed)
            });
        }, freq)
    }
}

export { NNN }