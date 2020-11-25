"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    var tar = new Date(2020, 12, 1);
    var t;
    function run(msg, cmd, args) {
        var now = new Date(Date.now());
        if (tar.getTime() - now.getTime() > 0) {
            switch (Math.floor((Math.random() * 3) + 1)) {
                case 1:
                    t = Math.round(tar.getTime() / 1000 - now.getTime() / 1000);
                    msg.channel.send("Il reste exactement `" + t + " secondes` avant la fin du **No Nut November**");
                    break;
                case 2:
                    t = Math.round(31 - now.getDate());
                    msg.channel.send("Il reste `" + t + " jours` avant la fin du **No Nut November**");
                    break;
                case 3:
                    t = Math.round(tar.getTime() / 3600000 - now.getTime() / 3600000);
                    msg.channel.send("Il reste exactement `" + t + " heures` avant la fin du **No Nut November**");
                    break;
            }
        }
        else {
            msg.channel.send("C'est fini f\u00E9licitation sur tu l'as r\u00E9ussi ! Sinon ce n'est pas grave tu seras meilleur pour la prochaine fois");
        }
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=nnn.js.map