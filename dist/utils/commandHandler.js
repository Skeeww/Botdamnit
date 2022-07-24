"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandledCommand = void 0;
const path_1 = __importDefault(require("path"));
const command_1 = require("./command");
const config_1 = require("./config");
const debug_1 = require("./debug");
class HandledCommand extends command_1.Command {
    constructor(msg) {
        const splittedMessage = msg.content.split(" ");
        super(splittedMessage[0].replace(config_1.Config.get_instance().PREFIX, ''));
        this.author = msg.author;
        this.msg = msg;
        splittedMessage.length > 1 ? this.args = splittedMessage.slice(1) : this.args = [];
        debug_1.Debug.bot(`${this.author.username}#${this.author.discriminator} execute ${this.name} with args ${this.args}`);
        try {
            require(path_1.default.join(__dirname, "../commands/", this.command)).run(this);
        }
        catch (_a) {
            debug_1.Debug.bot(`Commande "${this.command}" non trouvée`);
        }
    }
}
exports.HandledCommand = HandledCommand;
//# sourceMappingURL=commandHandler.js.map