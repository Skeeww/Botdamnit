import { client } from "../main"
import { Debug } from "../utils/debug"
import Database from "../utils/mongo"

export namespace Stats {
    Debug.bot("[Stats] event loaded")

    client.on("messageReactionAdd", (react, user) => {
        if(user.bot) return
        Database.get_instance().addScore(user.id, 10)
    })
}