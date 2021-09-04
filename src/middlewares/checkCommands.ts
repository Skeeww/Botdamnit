import { Command } from "../utils/command"
import { Config } from "../utils/config"

function isCommand(command: string): boolean {

    let res: boolean = false

    if (command.startsWith(Config.get_instance().PREFIX)) {

        command = command.split(" ")[0].replace(Config.get_instance().PREFIX, '')

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