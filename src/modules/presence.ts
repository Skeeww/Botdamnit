import { client } from "../main";
import { IModule } from "./tick";

class Presence implements IModule{
    name: string = "Presence"
    exec: Function = (freq: number) => {
        const presence = require("../config/presence.json")
        let date: Date = new Date()
        let i: number = 0
        setInterval(() => {
            if(i < presence.length){
                client.user?.setActivity({
                    name: presence[i] === "!DATE" ? `il est ${date.getHours()}h${date.getMinutes()}` : presence[i],
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