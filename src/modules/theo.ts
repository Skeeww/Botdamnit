import { IModule } from "./tick"
import moment from "moment"
import { client, config } from "../main"
import { Debug } from "../utils/debug"

const hours: Array<string> = ["07:03", "08:30", "13:32", "16:07", "18:35", "20:02"]

class Theo implements IModule {
    name: string = "Theo"
    exec: Function = (freq: number) => {
        setInterval(() => {
            if(hours.includes(moment().format("HH:mm"))){
                client.guilds.cache.find(g => g.id === config.GUILD_ID)?.members.cache.find(m => m.id === "305765614872559618")?.send("Il est l'heure Théo !").then(() => {
                    Debug.bot("Called Theo")
                }).catch((err) => {
                    Debug.bot(err)
                })
            }
        }, freq)
    }
}

export { Theo }