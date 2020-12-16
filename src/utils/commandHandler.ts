import { GuildMember, Message } from 'discord.js';
import { CheckCommands } from '../middlewares/checkCommands';
import { Guard } from '../middlewares/guard';
import { Command } from './command';
import { Config } from './config';
import { Debug } from './debug';

namespace Handler{

    class Handler {
        PREFIX: string = Config.PREFIX
        msg: Message

        constructor(msg: Message) {
            this.msg = msg
        }
        getCommand(): Command.Command{
            return new Command.Command(this.getName())
        }
        getName(): string{
            return this.msg.content.split(' ')[0].replace(this.PREFIX, '')
        }
        getArgs(): Array<string>{
            let args: Array<string> = this.msg.content.split(' ')
            args.splice(0, 1)
            return args
        }
    }

    export function handle(msg: Message){
        const handle: Handler = new Handler(msg)
        if(CheckCommands.isCommand(msg.content)){
            const cmd: Command.Command = handle.getCommand()
            let command = require(`../commands/${cmd.command}`)
            if(Guard.checkPerm(msg.member as GuildMember, cmd)){
                Debug.bot(`${msg.author.username} executes command ${cmd.name} with args: ${handle.getArgs()}`)
                command.Command.run(msg, cmd, handle.getArgs())
            }else{
                msg.channel.send(Config.PERMISSION_DENIED).catch((err) => {
                    Debug.bot(err)
                })
            }
        }
    }

}

export { Handler }