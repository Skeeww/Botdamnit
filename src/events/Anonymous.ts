import { TextChannel } from "discord.js";
import { client } from "../main";
import { Config } from "../utils/config";
import { Debug } from "../utils/debug";

export namespace Anonymous {
    Debug.bot("[Anonymous] event loaded")

    client.on("messageCreate", async (msg) => {
        if (msg.author.bot || msg.channel.type !== "DM") return
        (client.guilds.cache.find(g => g.id === Config.get_instance().GUILD_ID)?.channels.cache.find(c => c.id === Config.get_instance().CHANNELS.ANO) as TextChannel).send(
            `${msg.content}\n==========`
        )
    })
}