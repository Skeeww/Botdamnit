import axios from "axios";
import { client, config } from "../main";
import { Debug } from "../utils/debug";

export namespace PingBot {
    Debug.bot("[PingBot] event loaded")

    let last_command_exec = new Date()

    client.on("message", msg => {
        if(!msg.author.bot && msg.content.startsWith("diantre ?")){
            const now = new Date().getTime()
            if(now - last_command_exec.getTime() > 5000){
                last_command_exec = new Date()
                
                const payload = msg.content.replace(/<@(.*?)>/g, "")
                axios.post("https://api.openai.com/v1/engines/davinci/completions", {
                    "prompt": `${payload}\nBWOAT: `,
                    "temperature": 0,
                    "max_tokens": 60,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0,
                    "stop": ["\n"]
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${config.OPENAI_API}`
                    }
                }).then(res => {
                    msg.reply(res.data.choices[0].text ?? "je ne sais quoi te répondre face à cela")
                }).catch(() => msg.reply("Sorry je sleep"))
            }else{
                msg.reply(`Attends laisse moi ${Math.round((5000 - (now - last_command_exec.getTime())) / 1000)} secondes`)
            }
        }
    })
}