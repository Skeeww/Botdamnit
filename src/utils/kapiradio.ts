import { VoiceChannel } from "discord.js"
import { client } from "../main"
import { Config } from "./config"

const listMusics = [
    `./dist/assets/music/Beathoven.mp3.mpeg`,
    `./dist/assets/music/Hairball.mp3.mpeg`,
    `./dist/assets/music/Nyaw.mp3.mpeg`,
    `./dist/assets/music/Wocky.mp3.mpeg`
]

namespace KapiRadio {
    let currentIndex = Math.floor(Math.random()*listMusics.length)

    export const run = () => {
        const kapiChannel: VoiceChannel = client.guilds.resolve(Config.get_instance().GUILD_ID)?.channels.resolve(Config.get_instance().CHANNELS.KAPI_RADIO) as VoiceChannel
        /*
        kapiChannel.join().then(connection => {
            const player = connection.play(listMusics[currentIndex])
            player.on('finish', () => {
                if(currentIndex < listMusics.length){currentIndex++}else{currentIndex=0}
                connection.play(listMusics[currentIndex])
            })
        })
        */
    }
}

export { KapiRadio }