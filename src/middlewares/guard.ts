import { GuildMember } from "discord.js";
import { Command } from "../utils/command";

function checkPerm(member: GuildMember, cmd: Command): boolean {

    let canExecute: boolean = false;

    //If no rank is supplied by default turn canExecute to true
    if (!cmd.rank.length) {
        canExecute = true
    } else {
        //Parse the ranks provided and foreach check if the member has the rank
        let i = 0;
        while (i < cmd.rank.length && !canExecute) {
            if (member.roles.cache.find(r => r.id === cmd.rank[i])) {
                canExecute = true
            } else {
                i++;
            }
        }
    }

    return canExecute
}

export { checkPerm }