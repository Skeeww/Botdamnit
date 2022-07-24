"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const commands_json_1 = __importDefault(require("../config/commands.json"));
const config_1 = require("./config");
class Command {
    constructor(cmd) {
        this.name = "";
        this.command = "";
        this.aliases = [];
        this.usage = "";
        this.param = [];
        this.rank = [];
        let i = 0;
        let found = false;
        while (i < commands_json_1.default.length && !found) {
            if (cmd === commands_json_1.default[i].command || commands_json_1.default[i].aliases.includes(cmd)) {
                this.name = commands_json_1.default[i].name;
                this.command = commands_json_1.default[i].command;
                this.aliases = commands_json_1.default[i].aliases;
                this.usage = commands_json_1.default[i].usage;
                this.param = commands_json_1.default[i].param;
                this.rank = commands_json_1.default[i].rank;
                found = true;
            }
            else {
                i++;
            }
        }
    }
    static getAllCommands() {
        return commands_json_1.default;
    }
    static extractCommand(content) {
        return content.split(" ")[0].replace(config_1.Config.get_instance().PREFIX, '');
    }
}
exports.Command = Command;
//# sourceMappingURL=command.js.map