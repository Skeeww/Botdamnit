import { client } from "../main";
import { Config } from "../utils/config";
import { IModule } from "./tick";
import { randomInt } from "crypto";

class ColorFiesta implements IModule{
    name: string = "ColorFiesta"
    exec: Function = (freq: number) => {
        setInterval(() => {
            for(let i = 0; i < 10; i++){
                setInterval(() => {
                    client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.roles.cache.find(r => r.id === Config.SATAN)?.setColor([randomInt(255), randomInt(255), randomInt(255)])
                }, i*1000)
            }
        }, freq)
    }
}

export { ColorFiesta }