import axios from "axios";
import { MessageEmbed } from "discord.js";
import { config } from "../main";
import { HandledCommand } from "../utils/commandHandler";

interface IMDB_Genre {
    key: string
    value: string
}

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
    genreList: Array<IMDB_Genre>
    imDbRating: string
    metacriticRating: string
}

export function run(cmd: HandledCommand) {
    if(cmd.args.length > 0){
        const query: string = cmd.args.join(", ").replace(", ", " ")
        axios.get(`https://imdb-api.com/en/API/Search/${config.IMDB_API_KEY}/${query}`).then(res => {
            if(res.data.result[0] != undefined){
                axios.get(`https://imdb-api.com/en/API/Title/${config.IMDB_API_KEY}/${query}`).then(res => {
                    const movie: IMDB = res.data
                    const embed: MessageEmbed = new MessageEmbed({
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
                    })
                }).catch(err => {
                    cmd.msg.channel.send(`Erreur: \`${err}\``)
                })
            }
        cmd.msg.channel.send(`\`\`\`${JSON.stringify(res.data).substr(0, 1000)}\`\`\``)
        }).catch(err => {
            cmd.msg.channel.send(`Erreur: \`${err}\``)
        })
    }else{
        cmd.msg.channel.send("Il faut renseigner un nom de film ou série")
    }
}