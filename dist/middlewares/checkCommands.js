"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckCommands = void 0;
var command_1 = require("../utils/command");
var config_1 = require("../utils/config");
var CheckCommands;
(function (CheckCommands) {
    function isCommand(command) {
        if (!command.startsWith(config_1.Config.PREFIX)) {
            return false;
        }
        else {
            command = command.split(" ")[0].replace(config_1.Config.PREFIX, "");
            for (var i = 0; i < command_1.Command.getAllCommands().length; i++) {
                if (command_1.Command.getAllCommands()[i].command === command || command_1.Command.getAllCommands()[i].aliases.includes(command)) {
                    return true;
                }
            }
        }
        return false;
    }
    CheckCommands.isCommand = isCommand;
})(CheckCommands || (CheckCommands = {}));
exports.CheckCommands = CheckCommands;
//# sourceMappingURL=checkCommands.js.map