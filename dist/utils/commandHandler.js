"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandledCommand = void 0;
var main_1 = require("../main");
var command_1 = require("./command");
var debug_1 = require("./debug");
var HandledCommand = /** @class */ (function (_super) {
    __extends(HandledCommand, _super);
    function HandledCommand(msg) {
        var _this = this;
        var splittedMessage = msg.content.split(" ");
        _this = _super.call(this, splittedMessage[0].replace(main_1.config.PREFIX, '')) || this;
        _this.author = msg.author;
        _this.msg = msg;
        splittedMessage.length > 1 ? _this.args = splittedMessage.slice(1) : _this.args = [];
        debug_1.Debug.bot(_this.author.username + "#" + _this.author.discriminator + " execute " + _this.name + " with args " + _this.args);
        require("../commands/" + _this.command).run(_this);
        return _this;
    }
    return HandledCommand;
}(command_1.Command));
exports.HandledCommand = HandledCommand;
//# sourceMappingURL=commandHandler.js.map