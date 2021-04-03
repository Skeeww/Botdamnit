import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    if(cmd.args.length == 1){
        cmd.msg.channel.messages.fetch(cmd.args[0], true).then(m => {
            cmd.msg.channel.send(`Le message de ${m.author.username} est maintenant dans le cache`)
        }).catch(err => {
            cmd.msg.channel.send(` \`\`\` ${err} \`\`\` `)
        })
    }else{
        cmd.msg.channel.send("Il faut renseigner l'id du message !")
    }
}