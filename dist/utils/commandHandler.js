"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
var checkCommands_1 = require("../middlewares/checkCommands");
var guard_1 = require("../middlewares/guard");
var command_1 = require("./command");
var config_1 = require("./config");
var debug_1 = require("./debug");
var Handler;
(function (Handler_1) {
    var Handler = /** @class */ (function () {
        function Handler(msg) {
            this.PREFIX = config_1.Config.PREFIX;
            this.msg = msg;
        }
        Handler.prototype.getCommand = function () {
            return new command_1.Command.Command(this.getName());
        };
        Handler.prototype.getName = function () {
            return this.msg.content.split(' ')[0].replace(this.PREFIX, '');
        };
        Handler.prototype.getArgs = function () {
            var args = this.msg.content.split(' ');
            args.splice(0, 1);
            return args;
        };
        return Handler;
    }());
    function handle(msg) {
        var handle = new Handler(msg);
        if (checkCommands_1.CheckCommands.isCommand(msg.content)) {
            var cmd = handle.getCommand();
            var command = require("../commands/" + cmd.command);
            if (guard_1.Guard.checkPerm(msg.member, cmd)) {
                debug_1.Debug.bot(msg.author.username + " executes command " + cmd.name + " with args: " + handle.getArgs());
                command.Command.run(msg, cmd, handle.getArgs());
            }
            else {
                msg.channel.send(config_1.Config.PERMISSION_DENIED);
            }
        }
    }
    Handler_1.handle = handle;
})(Handler || (Handler = {}));
exports.Handler = Handler;
//# sourceMappingURL=commandHandler.js.map