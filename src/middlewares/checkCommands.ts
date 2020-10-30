import { Command } from "../utils/command";
import { Config } from "../utils/config";

namespace CheckCommands {
    export function isCommand(command: string): boolean {
        if (!command.startsWith(Config.PREFIX)){
            return false
        }else{
            command = command.split(" ")[0].replace(Config.PREFIX, "")
            for(let i = 0; i < Command.getAllCommands().length; i++){
                if(Command.getAllCommands()[i].command === command || Command.getAllCommands()[i].aliases.includes(command)){
                    return true
                }
            }
        }
        return false
    }
}

export { CheckCommands }