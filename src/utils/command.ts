namespace Command {

    const rawCommands = require("../config/commands.json")

    interface ICommand {
        name: string
        command: string
        aliases: Array<string>
        usage: string
        param: Array<string>
    }
    
    export class Command implements ICommand {
        name: string = ""
        command: string = ""
        aliases: string[] = []
        usage: string = ""
        param: string[] = []

        constructor(cmd: string) {
            for(let i = 0; i < rawCommands.length; i++){
                if(rawCommands[i].command === cmd){
                    this.name = rawCommands[i].name as string,
                    this.command = rawCommands[i].command as string,
                    this.aliases = rawCommands[i].aliases as Array<string>,
                    this.usage = rawCommands[i].usage as string,
                    this.param = rawCommands[i].params as Array<string>
                }
            }
        }
    }

    export function exist(command: string): ICommand {
        for(let i = 0; i < rawCommands.length; i++){
            if(rawCommands[i]["command"] === command){
                return rawCommands[i]
            }
            for(let j = 0; j < rawCommands[i]["aliases"].length; j++){
                if(rawCommands[i]["aliases"][j] === command){
                    return rawCommands[i]
                }
            }
        }
        return { name: '', command: '', aliases: [], usage: '', param: [] }
    }
}

export { Command }