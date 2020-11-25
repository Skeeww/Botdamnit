"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    var ranks = require("../config/ranks.json");
    var rName = [];
    var rId = [];
    ranks.forEach(function (r) {
        rName.push(r.name);
        rId.push(r.rank_id);
    });
    function run(msg, cmd, args) {
        var _a;
        if (!(args === null || args === void 0 ? void 0 : args.length)) {
            msg.channel.send("Liste des jeux disponibles: " + rName.join(", "));
            return;
        }
        if (rName.includes(args[0])) {
            (_a = msg.member) === null || _a === void 0 ? void 0 : _a.roles.add(rId[rName.indexOf(args[0])]).then(function () {
                msg.channel.send(":white_check_mark: Grade assigné !");
            });
            return;
        }
        msg.channel.send("Jeu non trouvé ! La liste est disponible avec la commande `*rank`");
    }
    Command.run = run;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=rank.js.map