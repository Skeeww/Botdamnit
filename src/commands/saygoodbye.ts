import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    setInterval(() => {
        cmd.msg.channel.send("Sorry guy's but SerpentH > All !!!")
    }, 3000)
}