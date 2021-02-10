"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommand = void 0;
var main_1 = require("../main");
var command_1 = require("../utils/command");
function isCommand(command) {
    var res = false;
    if (command.startsWith(main_1.config.PREFIX)) {
        command = command.split(" ")[0].replace(main_1.config.PREFIX, '');
        var i = 0;
        while (i < command_1.Command.getAllCommands().length && !res) {
            if (command_1.Command.getAllCommands()[i].command === command || command_1.Command.getAllCommands()[i].aliases.includes(command)) {
                res = true;
            }
            else {
                i++;
            }
        }
    }
    return res;
}
exports.isCommand = isCommand;
//# sourceMappingURL=checkCommands.js.map