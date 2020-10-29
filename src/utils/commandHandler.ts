import { GuildMember, Message } from 'discord.js';
import { realpathSync } from 'fs';
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
        isCommand(): boolean{
            if(this.msg.content.startsWith(this.PREFIX) && Command.exist(this.getName()).name.length) return true
            return false
        }
        getCommand(): Command.Command{
            return Command.exist(this.getName())
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

        if(handle.isCommand()){
            const cmd: Command.Command = handle.getCommand()
            let command = require(`../commands/${cmd.name}`)
            if(!cmd.rank.length){
                Debug.bot(`${msg.author.username} executes command ${cmd.name} with args: ${handle.getArgs()}`)
                command.Command.run(msg, handle.getArgs())
                return
            }
            for(let i = 0; i < cmd.rank.length; i++){
                if((msg.member as GuildMember).roles.cache.find(r => r.id === cmd.rank[i])){
                    Debug.bot(`${msg.author.username} executes command ${cmd.name} with args: ${handle.getArgs()}`)
                    command.Command.run(msg, handle.getArgs())
                    return    
                }
            }
            msg.channel.send(Config.PERMISSION_DENIED)
        }
    }

}

export { Handler }