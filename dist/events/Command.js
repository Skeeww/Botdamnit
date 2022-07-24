"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const main_1 = require("../main");
const guard_1 = require("../middlewares/guard");
const debug_1 = require("../utils/debug");
const command_1 = require("../utils/command");
const commandHandler_1 = require("../utils/commandHandler");
const config_1 = require("../utils/config");
const checkCommands_1 = require("../middlewares/checkCommands");
var Command;
(function (Command) {
    debug_1.Debug.bot("[Command] event loaded");
    main_1.client.on("messageCreate", (msg) => {
        if (msg.author.bot || !checkCommands_1.isCommand(msg.content))
            return;
        if (guard_1.checkPerm(msg.member, new command_1.Command(command_1.Command.extractCommand(msg.content)))) {
            new commandHandler_1.HandledCommand(msg);
        }
        else {
            msg.channel.send(config_1.Config.get_instance().PERMISSION_DENIED_MSG);
        }
        ;
    });
})(Command = exports.Command || (exports.Command = {}));
//# sourceMappingURL=Command.js.map