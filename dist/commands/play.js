"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const child_process_1 = require("child_process");
const voice_1 = require("@discordjs/voice");
const debug_1 = require("../utils/debug");
// ATTENTION ! Le code est vraiment crade et bug dans tout les sens
function run(cmd) {
    var _a, _b;
    if (cmd.args.length !== 1)
        return;
    const member = (_a = cmd.msg.guild) === null || _a === void 0 ? void 0 : _a.members.cache.find(m => m.id === cmd.author.id);
    if (member.voice.channel !== undefined) {
        if (cmd.args[0] === "stop") {
            (_b = voice_1.getVoiceConnection(cmd.msg.guildId)) === null || _b === void 0 ? void 0 : _b.destroy();
            return;
        }
        const url = cmd.args[0].replace(",", "").replace("\\", "").replace("\"", "");
        let allowed = true;
        child_process_1.exec(`youtube-dl ${url} --audio-format mp3 --get-duration`, (err, stdout, stderr) => {
            if (parseInt(stdout.split(":")[0]) >= 6) {
                cmd.msg.channel.send("Désolé mais la musique dure 6 minutes ou plus");
                allowed = false;
            }
            if (allowed) {
                debug_1.Debug.bot("URL: " + url);
                debug_1.Debug.bot("Youtube-DL commands executing");
                cmd.msg.react('✅');
                child_process_1.exec(`rm music.mp3`);
                child_process_1.exec(`youtube-dl ${url} --audio-format mp3 -x -o music.mp3 --no-progress`, (err, stdout, stderr) => {
                    debug_1.Debug.bot(stdout);
                    if (!err && !stderr) {
                        debug_1.Debug.bot("Youtube-DL commands executed without error");
                        const connection = voice_1.joinVoiceChannel({
                            channelId: member.voice.channelId,
                            guildId: cmd.msg.guildId,
                            adapterCreator: member.guild.voiceAdapterCreator
                        });
                        debug_1.Debug.bot("Connection created");
                        const audioRes = voice_1.createAudioResource(`music.mp3`);
                        debug_1.Debug.bot("Audio ressource created");
                        const player = voice_1.createAudioPlayer();
                        debug_1.Debug.bot("Audio player created");
                        const sub = connection.subscribe(player);
                        debug_1.Debug.bot("New subscribber to connection");
                        if (sub) {
                            debug_1.Debug.bot("Subscribber defined");
                            player.play(audioRes);
                            sub.player.on(voice_1.AudioPlayerStatus.Idle, () => {
                                debug_1.Debug.bot("Audio player is idle");
                                sub.connection.destroy();
                                debug_1.Debug.bot("Connection destroyed");
                                sub.unsubscribe();
                                debug_1.Debug.bot("Subscribber unsub");
                            });
                            sub.player.on(voice_1.AudioPlayerStatus.Playing, () => {
                                debug_1.Debug.bot("Audio player is playing");
                                cmd.msg.channel.send("Okay let's go !");
                            });
                            sub.player.on("error", (err) => {
                                debug_1.Debug.bot("Player error occured");
                                debug_1.Debug.bot(err);
                                sub.connection.destroy();
                                debug_1.Debug.bot("Connection destroyed");
                            });
                        }
                    }
                });
            }
        });
    }
    else {
        cmd.msg.channel.send("Connecte toi avant dans un salon vocal");
    }
}
exports.run = run;
//# sourceMappingURL=play.js.map