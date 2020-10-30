import { GuildMember } from "discord.js";
import { Command } from "../utils/command";

namespace Guard {
    export function checkPerm(member: GuildMember, cmd: Command.Command): boolean {
        let canExecute: boolean = false
        if(!cmd.rank.length){
            canExecute = true
        }
        cmd.rank.forEach(id => {
            if(member.roles.cache.find(r => r.id === id)){
                canExecute = true
            }
        })
        return canExecute
    }
}

export { Guard }