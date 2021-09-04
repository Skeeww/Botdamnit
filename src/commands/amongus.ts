import { client } from "../main";
import { HandledCommand } from "../utils/commandHandler";
import { Config } from "../utils/config";

export function run(cmd: HandledCommand) {
    let content: string = cmd.msg.member?.displayName || "unknown"
    if (cmd.args.length > 0) {
        content = cmd.args.join(" ")
        if (cmd.msg.mentions.members) {
            content = cmd.msg.mentions.members?.first()?.displayName || "unknown"
        }
    }
    cmd.msg.channel.send(`
        \`\`\`
        . 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ　　 ${content} was ${Math.floor(Math.random() * 2) ? 'not' : ''} An Impostor.　 。　.

　　'　　　 ${Math.floor(Math.random() * ((client.guilds.cache.find(g => g.id === Config.get_instance().GUILD_ID)?.memberCount || 5) + 1) + 2)} Impostors remains 　 　　。

　　ﾟ　　　.　　　. ,　　　　.　 .
        \`\`\`
    `)

}