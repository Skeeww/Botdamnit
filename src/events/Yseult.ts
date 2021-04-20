import { Message } from "discord.js";
import { client } from "../main";
import { Debug } from "../utils/debug";

export namespace Yseult {
    Debug.bot("[Yseult] event loaded")

    let yseultedUser: Array<Message> = new Array();

    client.on("messageReactionAdd", (react) => {
        if(react.emoji.name === "yseult" && react.count! == 8 && !yseultedUser.includes(react.message)){
            react.message.reply("**Félicitation** ! Ton message a été jugé cringe ce qui est un crime passible de 5ans de réclusion dans le groupe bisounours.")
            react.message.author.dmChannel?.send("Afin de purger ta peine nous t'invitons à rejoindre ce serveur: https://discord.gg/KpDKVBYn")
            yseultedUser.push(react.message)
        }
    })
}