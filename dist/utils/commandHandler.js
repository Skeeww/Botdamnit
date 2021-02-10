"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandledCommand = void 0;
var main_1 = require("../main");
var command_1 = require("./command");
var debug_1 = require("./debug");
var HandledCommand = /** @class */ (function () {
    function HandledCommand(msg) {
        var splittedMessage = msg.content.split(" ");
        this.command = new command_1.Command(splittedMessage[0].replace(main_1.config.PREFIX, ''));
        this.author = msg.author;
        this.msg = msg;
        splittedMessage.length > 1 ? this.args = splittedMessage.slice(1) : this.args = [];
        debug_1.Debug.bot(this.author.username + "#" + this.author.discriminator + " execute " + this.command.name + " with args " + this.args);
        require("../commands/" + this.command.command).run(this);
    }
    return HandledCommand;
}());
exports.HandledCommand = HandledCommand;
//# sourceMappingURL=commandHandler.js.map