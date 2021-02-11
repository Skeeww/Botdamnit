import { Message, User } from 'discord.js';
import { config } from '../main';
import { Command } from './command';
import { Debug } from './debug';

interface IHandledCommand {
    author: User
    msg: Message
    args: Array<string>
}

class HandledCommand extends Command implements IHandledCommand {
    author: User;
    msg: Message;
    args: string[];

    constructor(msg: Message) {
        const splittedMessage = msg.content.split(" ")
        super(splittedMessage[0].replace(config.PREFIX, ''))
        this.author = msg.author
        this.msg = msg
        splittedMessage.length > 1 ? this.args = splittedMessage.slice(1) : this.args = []
        Debug.bot(`${this.author.username}#${this.author.discriminator} execute ${this.name} with args ${this.args}`)
        require(`../commands/${this.command}`).run(this)
    }
}

export { HandledCommand }