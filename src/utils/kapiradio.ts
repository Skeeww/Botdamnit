import { VoiceChannel } from "discord.js"
import { client, config } from "../main"

const listMusics = [
    `./dist/assets/music/Beathoven.mp3.mpeg`,
    `./dist/assets/music/Hairball.mp3.mpeg`,
    `./dist/assets/music/Nyaw.mp3.mpeg`,
    `./dist/assets/music/Wocky.mp3.mpeg`
]

namespace KapiRadio {
    let currentIndex = Math.floor(Math.random()*listMusics.length)
    export const run = () => {
        const kapiChannel: VoiceChannel = client.guilds.resolve(config.GUILD_ID)?.channels.resolve(config.CHANNELS.KAPI_RADIO) as VoiceChannel
        kapiChannel.join().then(connection => {
            const player = connection.play(listMusics[currentIndex])
            player.on('finish', () => {
                if(currentIndex < listMusics.length){currentIndex++}else{currentIndex=0}
                connection.play(listMusics[currentIndex])
            })
        })
    }
}

export { KapiRadio }