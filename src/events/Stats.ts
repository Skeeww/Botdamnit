import { client } from "../main";
import { Debug } from "../utils/debug";
import Database from "../utils/mongo";

export namespace Stats {
    Debug.bot("[Stats] event loaded")

    client.on("messageCreate", (msg) => {
        Database.get_instance().registerMessage(msg)
    })
}