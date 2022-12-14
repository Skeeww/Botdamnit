import { exec } from "child_process";
import { GuildMember } from "discord.js";
import { HandledCommand } from "../utils/commandHandler";
import { AudioPlayerStatus, createAudioPlayer, createAudioResource, getVoiceConnection, joinVoiceChannel } from "@discordjs/voice";
import { Debug } from "../utils/debug";
import { DiscordGatewayAdapterCreator } from "@discordjs/voice";

// ATTENTION ! Le code est vraiment crade et bug dans tout les sens
export function run(cmd: HandledCommand) {
    if(cmd.args.length !== 1) return
    const member: GuildMember = cmd.msg.guild?.members.cache.find(m => m.id === cmd.author.id)!
    if(member.voice.channel !== undefined){
        if(cmd.args[0] === "stop"){
            getVoiceConnection(cmd.msg.guildId!)?.destroy()
            return
        }
        const url: string = cmd.args[0].replace(",", "").replace("\\", "").replace("\"", "")
        let allowed = true
        exec(`youtube-dl ${url} --audio-format mp3 --get-duration`, (err, stdout, stderr) => {
            if(parseInt(stdout.split(":")[0]) >= 6){
                cmd.msg.channel.send("Désolé mais la musique dure 6 minutes ou plus")
                allowed = false
            }
        if(allowed){
        Debug.bot("URL: " + url)
        Debug.bot("Youtube-DL commands executing")
        cmd.msg.react('✅')
        exec(`rm music.mp3`)
        exec(`youtube-dl ${url} --audio-format mp3 -x -o music.mp3 --no-progress`, (err, stdout, stderr) => {
            Debug.bot(stdout)
            if(!err && !stderr){
                Debug.bot("Youtube-DL commands executed without error")
                const connection = joinVoiceChannel({
                    channelId: member.voice.channelId!,
                    guildId: cmd.msg.guildId!,
                    adapterCreator: member.guild.voiceAdapterCreator as DiscordGatewayAdapterCreator
                })
                Debug.bot("Connection created")
                const audioRes = createAudioResource(`music.mp3`)
                Debug.bot("Audio ressource created")
                const player = createAudioPlayer()
                Debug.bot("Audio player created")
                const sub = connection.subscribe(player)
                Debug.bot("New subscribber to connection")
                if(sub){
                    Debug.bot("Subscribber defined")
                    player.play(audioRes)
                    sub.player.on(AudioPlayerStatus.Idle, () => {
                        Debug.bot("Audio player is idle")
                        sub.connection.destroy()
                        Debug.bot("Connection destroyed")
                        sub.unsubscribe()
                        Debug.bot("Subscribber unsub")
                    })
                    sub.player.on(AudioPlayerStatus.Playing, () => {
                        Debug.bot("Audio player is playing")
                        cmd.msg.channel.send("Okay let's go !")
                    })
                    sub.player.on("error", (err: any) => {
                        Debug.bot("Player error occured")
                        Debug.bot(err)
                        sub.connection.destroy()
                        Debug.bot("Connection destroyed")
                    })
                }
            }
        })
    }
})
    }else{
        cmd.msg.channel.send("Connecte toi avant dans un salon vocal")
    }
}