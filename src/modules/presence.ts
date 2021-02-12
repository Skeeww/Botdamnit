import presence from "../config/presence.json"
import { client } from "../main"
import { IModule } from "./tick"
import moment from "moment"
class Presence implements IModule{
    name: string = "Presence"
    exec: Function = (freq: number) => {
        let i: number = 0
        setInterval(() => {
            if(i < presence.length){
                client.user?.setActivity({
                    name: presence[i] === "!DATE" ? `il est ${moment().format("HH:mm")}` : presence[i],
                    type: "PLAYING",
                    url: "https://www.bigpapoo.fr"
                })
                i++
            }else{
                i = 0
            }
        }, freq)
    }
}

export { Presence }