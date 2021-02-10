import { config } from "../main";
import { Command } from "../utils/command";

function isCommand(command: string): boolean {

    let res: boolean = false

    if (command.startsWith(config.PREFIX)) {

        command = command.split(" ")[0].replace(config.PREFIX, '')

        let i = 0

        while (i < Command.getAllCommands().length && !res) {
            if (Command.getAllCommands()[i].command === command || Command.getAllCommands()[i].aliases.includes(command)) {
                res = true
            } else {
                i++;
            }
        }

    }
    return res
}

export { isCommand }