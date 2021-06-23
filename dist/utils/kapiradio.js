"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KapiRadio = void 0;
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
var listMusics = [
    "./dist/assets/music/Beathoven.mp3.mpeg",
    "./dist/assets/music/Hairball.mp3.mpeg",
    "./dist/assets/music/Nyaw.mp3.mpeg",
    "./dist/assets/music/Wocky.mp3.mpeg"
];
var KapiRadio;
(function (KapiRadio) {
    var currentIndex = Math.floor(Math.random() * listMusics.length);
    KapiRadio.run = function () {
        var _a, _b;
        var kapiChannel = (_a = main_1.client.guilds.resolve(main_1.config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.channels.resolve(main_1.config.CHANNELS.KAPI_RADIO);
        var textChannel = (_b = main_1.client.guilds.resolve(main_1.config.GUILD_ID)) === null || _b === void 0 ? void 0 : _b.channels.resolve(main_1.config.CHANNELS.RECURENCE);
        kapiChannel.join().then(function (connection) {
            var player = connection.play(listMusics[currentIndex]);
            textChannel.send(new discord_js_1.MessageEmbed({
                title: listMusics[currentIndex],
                description: "RIEN A FOUTRE DE VOUS DERANGEZ PENDANT VOS SUITES KAAPIAPAIAPIPAIPAIAPIAPIAPAIPAIPAIAPIAPI",
                thumbnail: { url: "https://media.tenor.com/images/6092864c97fcf5e3ed7f4c6df7e64a54/tenor.gif", width: 300 },
                image: { url: "https://media1.tenor.com/images/fb07cc168544183c2c3acf1ccf1821c9/tenor.gif?itemid=21317040", width: 300 }
            }));
            player.on('finish', function () {
                if (currentIndex < listMusics.length) {
                    currentIndex++;
                }
                else {
                    currentIndex = 0;
                }
                connection.play(listMusics[currentIndex]);
                textChannel.send(new discord_js_1.MessageEmbed({
                    title: listMusics[currentIndex],
                    description: "RIEN A FOUTRE DE VOUS DERANGEZ PENDANT VOS SUITES KAAPIAPAIAPIPAIPAIAPIAPIAPAIPAIPAIAPIAPI",
                    thumbnail: { url: "https://media.tenor.com/images/6092864c97fcf5e3ed7f4c6df7e64a54/tenor.gif", width: 300 },
                    image: { url: "https://media1.tenor.com/images/fb07cc168544183c2c3acf1ccf1821c9/tenor.gif?itemid=21317040", width: 300 }
                }));
            });
        });
    };
})(KapiRadio || (KapiRadio = {}));
exports.KapiRadio = KapiRadio;
//# sourceMappingURL=kapiradio.js.map