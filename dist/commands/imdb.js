"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var axios_1 = __importDefault(require("axios"));
var discord_js_1 = require("discord.js");
var config_1 = require("../utils/config");
function run(cmd) {
    if (cmd.args.length > 0) {
        var query_1 = cmd.args.join(", ").replace(", ", " ");
        axios_1.default.get("https://imdb-api.com/en/API/Search/" + config_1.Config.get_instance().IMDB_API_KEY + "/" + query_1).then(function (res) {
            console.log(query_1);
            if (res.data.results.length > 0) {
                axios_1.default.get("https://imdb-api.com/en/API/Title/" + config_1.Config.get_instance().IMDB_API_KEY + "/" + res.data.results[0].id).then(function (res) {
                    var movie = res.data;
                    var embed = new discord_js_1.MessageEmbed({
                        title: movie.title || 'Titre introuvable',
                        thumbnail: {
                            url: movie.image || undefined
                        },
                        fields: [
                            {
                                name: "Genre",
                                value: movie.genres || 'Non défini',
                                inline: true
                            },
                            {
                                name: "Année",
                                value: movie.year || 'Inconnu',
                                inline: true
                            },
                            {
                                name: "Durée",
                                value: movie.runtimeStr || 'Inconnu',
                                inline: true
                            },
                            {
                                name: "Réalisateur(s)",
                                value: movie.directors || 'Inconnu',
                                inline: true
                            },
                            {
                                name: "MetaCritic",
                                value: (movie.metacriticRating || 'NaN') + "%",
                                inline: true
                            },
                            {
                                name: "Récompense(s)",
                                value: movie.awards || 'Aucune',
                                inline: true
                            },
                            {
                                name: "Résumé",
                                value: movie.plot || 'Inconnu',
                                inline: false
                            }
                        ]
                    });
                    cmd.msg.channel.send({ embeds: [embed] });
                }).catch(function (err) {
                    cmd.msg.channel.send("Erreur: `" + err + "`");
                });
            }
            else {
                cmd.msg.channel.send("Le film ou la série n'a pas été trouvé");
            }
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