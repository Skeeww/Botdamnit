"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var child_process_1 = require("child_process");
var voice_1 = require("@discordjs/voice");
var debug_1 = require("../utils/debug");
// ATTENTION ! Le code est vraiment crade et bug dans tout les sens
function run(cmd) {
    var _a, _b;
    if (cmd.args.length !== 1)
        return;
    var member = (_a = cmd.msg.guild) === null || _a === void 0 ? void 0 : _a.members.cache.find(function (m) { return m.id === cmd.author.id; });
    if (member.voice.channel !== undefined) {
        if (cmd.args[0] === "stop") {
            (_b = voice_1.getVoiceConnection(cmd.msg.guildId)) === null || _b === void 0 ? void 0 : _b.destroy();
            return;
        }
        var url_1 = cmd.args[0].replace(",", "").replace("\\", "").replace("\"", "");
        var allowed_1 = true;
        child_process_1.exec("youtube-dl " + url_1 + " --audio-format mp3 --get-duration", function (err, stdout, stderr) {
            if (parseInt(stdout.split(":")[0]) >= 6) {
                cmd.msg.channel.send("Désolé mais la musique dure 6 minutes ou plus");
                allowed_1 = false;
            }
            if (allowed_1) {
                debug_1.Debug.bot("URL: " + url_1);
                debug_1.Debug.bot("Youtube-DL commands executing");
                cmd.msg.react('✅');
                child_process_1.exec("rm music.mp3");
                child_process_1.exec("youtube-dl " + url_1 + " --audio-format mp3 -x -o music.mp3 --no-progress", function (err, stdout, stderr) {
                    debug_1.Debug.bot(stdout);
                    if (!err && !stderr) {
                        debug_1.Debug.bot("Youtube-DL commands executed without error");
                        var connection = voice_1.joinVoiceChannel({
                            channelId: member.voice.channelId,
                            guildId: cmd.msg.guildId,
                            adapterCreator: member.guild.voiceAdapterCreator
                        });
                        debug_1.Debug.bot("Connection created");
                        var audioRes = voice_1.createAudioResource("music.mp3");
                        debug_1.Debug.bot("Audio ressource created");
                        var player = voice_1.createAudioPlayer();
                        debug_1.Debug.bot("Audio player created");
                        var sub_1 = connection.subscribe(player);
                        debug_1.Debug.bot("New subscribber to connection");
                        if (sub_1) {
                            debug_1.Debug.bot("Subscribber defined");
                            player.play(audioRes);
                            sub_1.player.on(voice_1.AudioPlayerStatus.Idle, function () {
                                debug_1.Debug.bot("Audio player is idle");
                                sub_1.connection.destroy();
                                debug_1.Debug.bot("Connection destroyed");
                                sub_1.unsubscribe();
                                debug_1.Debug.bot("Subscribber unsub");
                            });
                            sub_1.player.on(voice_1.AudioPlayerStatus.Playing, function () {
                                debug_1.Debug.bot("Audio player is playing");
                                cmd.msg.channel.send("Okay let's go !");
                            });
                            sub_1.player.on("error", function (err) {
                                debug_1.Debug.bot("Player error occured");
                                debug_1.Debug.bot(err);
                                sub_1.connection.destroy();
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