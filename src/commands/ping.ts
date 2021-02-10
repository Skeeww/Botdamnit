import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    cmd.msg.content === "ping" ? cmd.msg.channel.send("Pong !") : cmd.msg.channel.send("Ping !")
}