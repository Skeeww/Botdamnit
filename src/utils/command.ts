
import commandsFile from "../config/commands.json"
import { Config } from "./config"
interface ICommand {
    name: string
    command: string
    aliases: Array<string>
    usage: string
    param: Array<string>
    rank: Array<string>
}

class Command implements ICommand {
    name: string = ""
    command: string = ""
    aliases: string[] = []
    usage: string = ""
    param: string[] = []
    rank: string[] = []

    constructor(cmd: string) {
        let i = 0
        let found = false
        while (i < commandsFile.length && !found) {
            if (cmd === commandsFile[i].command || commandsFile[i].aliases.includes(cmd)) {
                this.name = commandsFile[i].name
                this.command = commandsFile[i].command
                this.aliases = commandsFile[i].aliases
                this.usage = commandsFile[i].usage
                this.param = commandsFile[i].param
                this.rank = commandsFile[i].rank
                found = true
            } else {
                i++;
            }
        }
    }

    public static getAllCommands(): Array<ICommand> {
        return commandsFile
    }

    public static extractCommand(content: string) {
        return content.split(" ")[0].replace(Config.get_instance().PREFIX, '')
    }
}

export { Command, ICommand }