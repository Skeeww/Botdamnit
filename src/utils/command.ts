namespace Command {

    export const rawCommands = require("../config/commands.json")

    interface ICommand {
        name: string
        command: string
        aliases: Array<string>
        usage: string
        param: Array<string>
        rank: Array<string>
    }
    
    export class Command implements ICommand {
        name: string = ""
        command: string = ""
        aliases: string[] = []
        usage: string = ""
        param: string[] = []
        rank: string[] = []

        constructor(cmd: string) {
            for(let i = 0; i < rawCommands.length; i++){
                if(rawCommands[i].command === cmd || rawCommands[i].aliases.includes(cmd)){
                    this.name = rawCommands[i].name as string,
                    this.command = rawCommands[i].command as string,
                    this.aliases = rawCommands[i].aliases as Array<string>,
                    this.usage = rawCommands[i].usage as string,
                    this.param = rawCommands[i].param as Array<string>
                    this.rank = rawCommands[i].rank as Array<string>
                }
            }
        }
    }
    
    export function getAllCommands(): Array<ICommand> {
        let commands: Array<ICommand> = []
        for(let i = 0; i < rawCommands.length; i++){
            commands.push(rawCommands[i])
        }
        return commands
    }
}

export { Command }