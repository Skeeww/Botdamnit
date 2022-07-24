import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"
import { client } from "../main"
import { Config } from "../utils/config"
import { Debug } from "../utils/debug"

export namespace Suite {
    Debug.bot("[Suite] event loaded")

    const COUNTER_FILE_NAME = "Suite.counter.data"

    const counter = {
        last_number: 0
    }

    const counter_proxy = new Proxy(counter, {
        set: ({last_number}, _key, value) => {
            writeFileSync(join(Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME), value.toString(), {encoding: 'utf-8', flag: 'w+'})
            last_number = value
            return true
        },
        get: ({last_number}, _key, _receiver) => {
            if (last_number === 0) {
                if (!existsSync(join(Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME))) {
                    writeFileSync(join(Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME), "0", {encoding: 'utf-8', flag: 'w+'})
                }
                return parseInt(readFileSync(join(Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME), {encoding: 'utf-8'}))
            }
            return last_number
        }
    })

    client.on('messageCreate', (msg) => {
        if(msg.author.bot || msg.channel.id != Config.get_instance().CHANNELS.RECURENCE){ return }
        const input_number: number = parseInt(msg.content)
        if(input_number !== NaN && input_number === counter_proxy.last_number + 1){
            msg.channel.send(`Le dernier nombre trouvé est ${++(counter_proxy.last_number)}`)
            msg.react('✅')
        }else{
            msg.react('❌')
            msg.channel.send(`Série de ${counter_proxy.last_number} !`)
            counter_proxy.last_number = 0
        }
    })
}
