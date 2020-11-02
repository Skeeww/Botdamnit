import { Guild, Role } from "discord.js";
import { client } from "../main";
import { Config } from "../utils/config";
import { IModule } from "./tick";

class AutoRank implements IModule{
    name: string = "AutoRank"
    exec: Function = (freq: number) => {
        const IN_GAME: Role = client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.roles.cache.find(r => r.id === Config.IN_GAME) || new Role(client, {}, new Guild(client, {}))
        const MUSIC: Role = client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.roles.cache.find(r => r.id === Config.MUSIC) || new Role(client, {}, new Guild(client, {}))

        setInterval(() => {
            client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.members.fetch({withPresences: true}).then(v => v.forEach(m => {
                if(m.presence.activities[0] !== undefined){
                    switch(m.presence.activities[0].type){
                        case "PLAYING":
                            if(!m.roles.cache.array().includes(IN_GAME)){
                                m.roles.add(IN_GAME)
                            }
                            break
                        case "LISTENING":
                            if(!m.roles.cache.array().includes(MUSIC)){
                                m.roles.add(MUSIC)
                            }
                            break
                        default:
                            if(m.roles.cache.array().includes(IN_GAME)){
                                m.roles.remove(IN_GAME)
                            }
                            if(m.roles.cache.array().includes(MUSIC)){
                                m.roles.remove(MUSIC)
                            }
                            break
                    }
                }else{
                    if(m.roles.cache.array().includes(IN_GAME)){
                        m.roles.remove(IN_GAME)
                    }
                    if(m.roles.cache.array().includes(MUSIC)){
                        m.roles.remove(MUSIC)
                    }
                }
            }))
        }, freq)
    }
}

export { AutoRank }