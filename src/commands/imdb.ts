import axios from "axios";
import { MessageEmbed } from "discord.js";
import { HandledCommand } from "../utils/commandHandler";
import { Config } from "../utils/config";

interface IMDB {
    id: string
    title: string
    fullTitle: string
    type: string
    year: string
    image: string
    runtimeStr: string
    plot: string
    awards: string
    directors: string
    genres: string
    imDbRating: string
    metacriticRating: string
}

export function run(cmd: HandledCommand) {
    if (cmd.args.length > 0) {
        const query: string = cmd.args.join(", ").replace(", ", " ")
        axios.get(`https://imdb-api.com/en/API/Search/${Config.get_instance().IMDB_API_KEY}/${query}`).then((res) => {
            console.log(query)
            if (res.data.results.length > 0) {
                axios.get(`https://imdb-api.com/en/API/Title/${Config.get_instance().IMDB_API_KEY}/${res.data.results[0].id}`).then((res) => {
                    const movie: IMDB = res.data
                    const embed: MessageEmbed = new MessageEmbed({
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
                    })
                    cmd.msg.channel.send({ embeds: [embed] })
                }).catch((err) => {
                    cmd.msg.channel.send(`Erreur: \`${err}\``)
                })
            } else {
                cmd.msg.channel.send("Le film ou la série n'a pas été trouvé")
            }
        }).catch((err) => {
            cmd.msg.channel.send(`Erreur: \`${err}\``)
        })
    } else {
        cmd.msg.channel.send("Il faut renseigner un nom de film ou série")
    }
}