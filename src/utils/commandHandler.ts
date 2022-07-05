import { Message, User } from 'discord.js';
import path from 'path';
import { Command } from './command';
import { Config } from './config';
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
        super(splittedMessage[0].replace(Config.get_instance().PREFIX, ''))
        this.author = msg.author
        this.msg = msg
        splittedMessage.length > 1 ? this.args = splittedMessage.slice(1) : this.args = []
        Debug.bot(`${this.author.username}#${this.author.discriminator} execute ${this.name} with args ${this.args}`)
        try {
            require(path.join(__dirname, "../commands/", this.command)).run(this)
        } catch {
            Debug.bot(`Commande "${this.command}" non trouvée`)
        }
    }
}

export { HandledCommand }