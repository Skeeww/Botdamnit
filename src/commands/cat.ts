import axios from "axios";
import { MessageEmbed } from "discord.js";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    axios.get("https://api.thecatapi.com/v1/images/search").then(res => {
        cmd.msg.channel.send(new MessageEmbed({
            image: {url: res.data.url}
        }));
    })
}