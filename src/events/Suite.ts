import { MessageEmbed } from "discord.js"
import { client, config, db } from "../main"
import { DatabaseUtil } from "../utils/database"
import { Debug } from "../utils/debug"

export namespace Suite {
    Debug.bot("[Suite] event loaded")

    let n: number = 0

    client.on('message', (msg) => {
        if(msg.author.bot || msg.channel.id != config.CHANNELS.RECURENCE){ return }
        const input_number: number = parseInt(msg.content)
        if(input_number !== NaN && input_number === n + 1){
            if(n == 0){
                DatabaseUtil.run(db, `INSERT INTO bot(nb_suite) VALUES(${n++})`)
            }else{
                DatabaseUtil.run(db, `UPDATE bot SET nb_suite=${n++ + 1} WHERE id=(SELECT MAX(id) FROM bot)`)
            }
            msg.react('✅')
        }else if(n > 0){
            const leaderboard: MessageEmbed = new MessageEmbed({
                title: "Classement des suites",
                hexColor: "#0099CC"
            })
            db.all('SELECT * FROM bot ORDER BY nb_suite DESC', async (err, rows) => {
                leaderboard.setDescription(`Actuellement, ${rows.length} suites sont enregistrées`)
                rows.slice(0, 5).forEach(async r => {
                    leaderboard.addField(`Suite N°${r.id}`, `${r.nb_suite} de longueur`)
                })
                await msg.channel.send(leaderboard)
            })
            msg.react('❌')
            msg.channel.send(`Série de ${n}`)
            n = 0
        }
    })
}