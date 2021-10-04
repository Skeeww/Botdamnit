import { exec } from "child_process";
import { TextChannel } from "discord.js";
import { client } from "../main";
import { Config } from "../utils/config";
import { IModule } from "./tick";

class Dns implements IModule {
    name: string = "Dns"
    exec: Function = (freq: number) => {
        setInterval(() => {
            const chan: TextChannel = <TextChannel> client.guilds.resolve(Config.get_instance().GUILD_ID)?.channels.resolve("894693735286317096")
            exec("dig @1.1.1.1 facebook.com", (err, out, stderr) => {
                if(out){
                    chan.send(out)
                }
            })
        }, freq)
    }
}

export { Dns }