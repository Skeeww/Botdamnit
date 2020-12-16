import { client } from "../main";
import { Config } from "../utils/config";
import { Debug } from "../utils/debug";

namespace Event {
    Debug.bot("[Rules] event loaded")

    /* Add rank if rules are accepted or remove */
    client.on("messageReactionAdd", (react, user) => {
        if(react.message.id === Config.RULES_MESSAGE){
            react.message.guild?.members.cache.find(m => m.id === user.id)?.roles.add(Config.SATAN).then(() => {
                Debug.bot(`${user.tag} has accepted the rules ${react.emoji.name}`)
            })
        }
    })
    client.on("messageReactionRemove", (react, user) => {
        if(react.message.id === Config.RULES_MESSAGE){
            react.message.guild?.members.cache.find(m => m.id === user.id)?.roles.remove(Config.SATAN).then(() => {
                Debug.bot(`${user.tag} has refused the rules`)
            })
        }
    })
}