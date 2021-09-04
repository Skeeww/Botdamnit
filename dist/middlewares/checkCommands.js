"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommand = void 0;
var command_1 = require("../utils/command");
var config_1 = require("../utils/config");
function isCommand(command) {
    var res = false;
    if (command.startsWith(config_1.Config.get_instance().PREFIX)) {
        command = command.split(" ")[0].replace(config_1.Config.get_instance().PREFIX, '');
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