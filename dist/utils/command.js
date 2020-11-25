"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command_1) {
    Command_1.rawCommands = require("../config/commands.json");
    var Command = /** @class */ (function () {
        function Command(cmd) {
            this.name = "";
            this.command = "";
            this.aliases = [];
            this.usage = "";
            this.param = [];
            this.rank = [];
            for (var i = 0; i < Command_1.rawCommands.length; i++) {
                if (Command_1.rawCommands[i].command === cmd || Command_1.rawCommands[i].aliases.includes(cmd)) {
                    this.name = Command_1.rawCommands[i].name,
                        this.command = Command_1.rawCommands[i].command,
                        this.aliases = Command_1.rawCommands[i].aliases,
                        this.usage = Command_1.rawCommands[i].usage,
                        this.param = Command_1.rawCommands[i].param;
                    this.rank = Command_1.rawCommands[i].rank;
                }
            }
        }
        return Command;
    }());
    Command_1.Command = Command;
    function getAllCommands() {
        var commands = [];
        for (var i = 0; i < Command_1.rawCommands.length; i++) {
            commands.push(Command_1.rawCommands[i]);
        }
        return commands;
    }
    Command_1.getAllCommands = getAllCommands;
})(Command || (Command = {}));
exports.Command = Command;
//# sourceMappingURL=command.js.map