import { client } from "../main";
import { checkPerm } from "../middlewares/guard";
import { Debug } from "../utils/debug";
import { Command as UCommand } from "../utils/command";
import { HandledCommand } from "../utils/commandHandler";
import { Config } from "../utils/config";
import { isCommand } from "../middlewares/checkCommands";

export namespace Command {
    Debug.bot("[Command] event loaded")

    client.on("messageCreate", (msg) => {
        if (msg.author.bot || !isCommand(msg.content)) return
        if (checkPerm(msg.member!, new UCommand(UCommand.extractCommand(msg.content)))) {
            new HandledCommand(msg);
        } else {
            msg.channel.send(Config.get_instance().PERMISSION_DENIED_MSG)
        };
    })
}