import { MessageEmbed, TextChannel, VoiceChannel } from "discord.js"
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
        const textChannel: TextChannel = client.guilds.resolve(config.GUILD_ID)?.channels.resolve(config.CHANNELS.RECURENCE) as TextChannel
        kapiChannel.join().then(connection => {
            const player = connection.play(listMusics[currentIndex])
            textChannel.send(new MessageEmbed({
                title: listMusics[currentIndex],
                description: "RIEN A FOUTRE DE VOUS DERANGEZ PENDANT VOS SUITES KAAPIAPAIAPIPAIPAIAPIAPIAPAIPAIPAIAPIAPI",
                thumbnail: {url: "https://media.tenor.com/images/6092864c97fcf5e3ed7f4c6df7e64a54/tenor.gif", width: 300},
                image: {url: "https://media1.tenor.com/images/fb07cc168544183c2c3acf1ccf1821c9/tenor.gif?itemid=21317040", width: 300}
            }))
            player.on('finish', () => {
                if(currentIndex < listMusics.length){currentIndex++}else{currentIndex=0}
                connection.play(listMusics[currentIndex])
                textChannel.send(new MessageEmbed({
                    title: listMusics[currentIndex],
                    description: "RIEN A FOUTRE DE VOUS DERANGEZ PENDANT VOS SUITES KAAPIAPAIAPIPAIPAIAPIAPIAPAIPAIPAIAPIAPI",
                    thumbnail: {url: "https://media.tenor.com/images/6092864c97fcf5e3ed7f4c6df7e64a54/tenor.gif", width: 300},
                    image: {url: "https://media1.tenor.com/images/fb07cc168544183c2c3acf1ccf1821c9/tenor.gif?itemid=21317040", width: 300}
                }))
            })
        })
    }
}

export { KapiRadio }