import { Message, User } from 'discord.js';
import { config } from '../main';
import { Command } from './command';
import { Debug } from './debug';

interface IHandledCommand {
    command: Command
    author: User
    msg: Message
    args: Array<string>
}

class HandledCommand implements IHandledCommand {
    command: Command;
    author: User;
    msg: Message;
    args: string[];

    constructor(msg: Message) {
        const splittedMessage = msg.content.split(" ")
        this.command = new Command(splittedMessage[0].replace(config.PREFIX, ''))
        this.author = msg.author
        this.msg = msg
        splittedMessage.length > 1 ? this.args = splittedMessage.slice(1) : this.args = []
        Debug.bot(`${this.author.username}#${this.author.discriminator} execute ${this.command.name} with args ${this.args}`)
        require(`../commands/${this.command.command}`).run(this)
    }
}

export { HandledCommand }