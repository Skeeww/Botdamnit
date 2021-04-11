"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yseult = void 0;
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var Yseult;
(function (Yseult) {
    debug_1.Debug.bot("[Yseult] event loaded");
    var yseultedUser = new Array();
    main_1.client.on("messageReactionAdd", function (react, user) {
        var _a;
        if (react.emoji.name === "yseult" && react.count == 8 && !yseultedUser.includes(react.message)) {
            react.message.reply("**F\u00E9licitation** ! Ton message a \u00E9t\u00E9 jug\u00E9 cringe ce qui est un crime passible de 5ans de r\u00E9clusion dans le groupe bisounours.");
            (_a = react.message.author.dmChannel) === null || _a === void 0 ? void 0 : _a.send("Afin de purger ta peine nous t'invitons \u00E0 rejoindre ce serveur: https://discord.gg/KpDKVBYn");
            yseultedUser.push(react.message);
        }
    });
})(Yseult = exports.Yseult || (exports.Yseult = {}));
//# sourceMappingURL=Yseult.js.map