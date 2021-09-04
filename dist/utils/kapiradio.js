"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KapiRadio = void 0;
var main_1 = require("../main");
var config_1 = require("./config");
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
        var _a;
        var kapiChannel = (_a = main_1.client.guilds.resolve(config_1.Config.get_instance().GUILD_ID)) === null || _a === void 0 ? void 0 : _a.channels.resolve(config_1.Config.get_instance().CHANNELS.KAPI_RADIO);
        /*
        kapiChannel.join().then(connection => {
            const player = connection.play(listMusics[currentIndex])
            player.on('finish', () => {
                if(currentIndex < listMusics.length){currentIndex++}else{currentIndex=0}
                connection.play(listMusics[currentIndex])
            })
        })
        */
    };
})(KapiRadio || (KapiRadio = {}));
exports.KapiRadio = KapiRadio;
//# sourceMappingURL=kapiradio.js.map