import presence from "../config/presence.json"
import { client } from "../main"
import { IModule } from "./tick"
import moment from "moment"
import { ActivityType } from "discord.js"
class Presence implements IModule{
    static i: number = 0
    name: string = "Presence"
    exec: Function = () => {
        if(Presence.i < presence.length){
            client.user?.setActivity({
                name: presence[Presence.i] === "!DATE" ? `il est ${moment().format("HH:mm")}` : presence[Presence.i],
                type: ActivityType.Playing
            })
            Presence.i++
        }else{
            Presence.i = 0
        }
    }
}

export { Presence }