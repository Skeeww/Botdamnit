"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var axios_1 = __importDefault(require("axios"));
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
function run(cmd) {
    if (cmd.args.length > 0) {
        var query_1 = cmd.args.join(", ").replace(", ", " ");
        axios_1.default.get("https://imdb-api.com/en/API/Search/" + main_1.config.IMDB_API_KEY + "/" + query_1).then(function (res) {
            if (res.data.result[0] != undefined) {
                axios_1.default.get("https://imdb-api.com/en/API/Title/" + main_1.config.IMDB_API_KEY + "/" + query_1).then(function (res) {
                    var movie = res.data;
                    var embed = new discord_js_1.MessageEmbed({
                        title: movie.title,
                        fields: [
                            {
                                name: "Genre",
                                value: movie.type
                            },
                            {
                                name: "Année",
                                value: movie.year
                            },
                            {
                                name: "Durée",
                                value: movie.runtimeStr
                            }
                        ]
                    });
                }).catch(function (err) {
                    cmd.msg.channel.send("Erreur: `" + err + "`");
                });
            }
            cmd.msg.channel.send("```" + JSON.stringify(res.data).substr(0, 1000) + "```");
        }).catch(function (err) {
            cmd.msg.channel.send("Erreur: `" + err + "`");
        });
    }
    else {
        cmd.msg.channel.send("Il faut renseigner un nom de film ou série");
    }
}
exports.run = run;
//# sourceMappingURL=imdb.js.map