import { Message } from "discord.js";
import { client } from "../main";
import { Command as Cmd } from "../utils/command";
import { Config } from "../utils/config";

namespace Command {
    export function run(msg: Message, cmd: Cmd.Command, args: Array<string> = []){
        let content: string = msg.member?.displayName || "unknown"
        if(args?.length > 0){
            content = args?.join(" ")
            if(msg.mentions.members){
                content = msg.mentions.members?.first()?.displayName || "unknown"
            }
        }
        msg.channel.send(`
            \`\`\`
            . 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ　　 ${content} was ${Math.floor(Math.random()*2) ? 'not': ''} An Impostor.　 。　.

　　'　　　 ${Math.floor(Math.random()*((client.guilds.cache.find(g => g.id === Config.GUILD_ID)?.memberCount || 5) + 1)+2)} Impostors remains 　 　　。

　　ﾟ　　　.　　　. ,　　　　.　 .
            \`\`\`
        `)
        
    }
}

export { Command }