"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var axios_1 = __importDefault(require("axios"));
function run(cmd) {
    if (cmd.args.length === 0) {
        cmd.msg.channel.send("Il manque un lien");
        return;
    }
    axios_1.default.get(cmd.args[0]).then(function (v) {
        cmd.msg.channel.send("Le site **" + cmd.args[0] + "** \u00E0 r\u00E9pondu avec le code `" + v.status + " - " + v.statusText + "`");
    }).catch(function (err) {
        cmd.msg.channel.send("Le site **" + cmd.args[0] + "** est innaccessible `" + err + "`");
    });
}
exports.run = run;
//# sourceMappingURL=site_checker.js.map