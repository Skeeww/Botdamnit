import { Member } from "eris"
import { client } from "../main"
import { Config } from "../utils/config"
import { Debug } from "../utils/debug"

let membersAcceptedRules: Array<string> = new Array()
export namespace Rules {
    Debug.bot("Rules module loaded")

    function acceptRules(member: Member | null){
        member?.addRole(Config.RULES_AGREE).then(() => {
            Debug.bot(`${member.username} has accepted rules`)
        })
    }
    function refuseRules(member: Member | null){
        member?.roles.forEach(r => {
            member.removeRole(r)
        })
        Debug.bot(`${member?.username} has refused rules`)
    }

    /*Give role if bot was down during reaction*/
    client.getMessage(Config.RULES_CHANNEL, Config.RULES_MESSAGE).then(msg => {
        msg.getReaction(Config.RULE_EMOJI_NAME).then(users => users.forEach(user => membersAcceptedRules.push(user.id))).then(() => {
            client.guilds.get(Config.GUILD_ID)?.members.forEach(m => {
                if(m.roles.includes(Config.RULES_AGREE) && !membersAcceptedRules.includes(m.id)){
                    refuseRules(m);
                }else if(!m.roles.includes(Config.RULES_AGREE) && membersAcceptedRules.includes(m.id)){
                    acceptRules(m);
                }
            })
        })
    })
    client.on("messageReactionAdd", (msg, emoji, member) => {
        if(!msg.guildID || msg.id !== Config.RULES_MESSAGE) return
        acceptRules(client.guilds.get(Config.GUILD_ID)?.members.get(member.id) || null)
    })
    client.on("messageReactionRemove", (msg, emoji, member) => {
        if(!msg.guildID || msg.id !== Config.RULES_MESSAGE) return
        refuseRules(client.guilds.get(Config.GUILD_ID)?.members.get(member) || null)
    })
}