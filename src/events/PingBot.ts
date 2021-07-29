/*
curl https://api.openai.com/v1/engines/ada/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "prompt": "Salut comment tu vas ?\nBWOAT: Je vais bien.",
  "temperature": 0,
  "max_tokens": 128,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
  "stop": ["\n"]
}'
*/

import axios from "axios";
import { client, config } from "../main";
import { Debug } from "../utils/debug";

export namespace PingBot {
    Debug.bot("[PingBot] event loaded")

    let last_command_exec = new Date()

    client.on("message", msg => {
        if(!msg.author.bot && msg.mentions.users.has(client.user?.id!)){
            const now = new Date().getTime()
            if(now - last_command_exec.getTime() > 10000){
                last_command_exec = new Date()
                
                const payload = msg.content.replace(/<@(.*?)>/g, "")
                axios.post("https://api.openai.com/v1/engines/ada/completions", {
                    "prompt": `${payload}\nBWOAT: `,
                    "temperature": 0,
                    "max_tokens": 80,
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
                msg.reply(`Attends laisse moi ${Math.round((10000 - (now - last_command_exec.getTime())) / 1000)} secondes`)
            }
        }
    })
}