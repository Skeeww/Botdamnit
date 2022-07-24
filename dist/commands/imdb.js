"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const axios_1 = __importDefault(require("axios"));
const discord_js_1 = require("discord.js");
const config_1 = require("../utils/config");
function run(cmd) {
    if (cmd.args.length > 0) {
        const query = cmd.args.join(", ").replace(", ", " ");
        axios_1.default.get(`https://imdb-api.com/en/API/Search/${config_1.Config.get_instance().IMDB_API_KEY}/${query}`).then((res) => {
            console.log(query);
            if (res.data.results.length > 0) {
                axios_1.default.get(`https://imdb-api.com/en/API/Title/${config_1.Config.get_instance().IMDB_API_KEY}/${res.data.results[0].id}`).then((res) => {
                    const movie = res.data;
                    const embed = new discord_js_1.MessageEmbed({
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
                                value: `${movie.metacriticRating || 'NaN'}%`,
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
                }).catch((err) => {
                    cmd.msg.channel.send(`Erreur: \`${err}\``);
                });
            }
            else {
                cmd.msg.channel.send("Le film ou la série n'a pas été trouvé");
            }
        }).catch((err) => {
            cmd.msg.channel.send(`Erreur: \`${err}\``);
        });
    }
    else {
        cmd.msg.channel.send("Il faut renseigner un nom de film ou série");
    }
}
exports.run = run;
//# sourceMappingURL=imdb.js.map