import axios from "axios";
import { MessageEmbed } from "discord.js";
import { Command } from "../utils/command";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    switch (cmd.args[0] ?? Command.extractCommand(cmd.msg.content)) {
        case "cat":
            axios.get("https://api.thecatapi.com/v1/images/search").then(res => {
                cmd.msg.channel.send(new MessageEmbed({image: {url: res.data[0].url}}))
            })
            break;
        case "dog":
            axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
                cmd.msg.channel.send(new MessageEmbed({image: {url: res.data.message}}))
            })
            break;
        default:
            cmd.msg.channel.send("Désolé il faut spécifier un animal (*moi j'adore les animals* - Renaud)")
            break;
    }
}