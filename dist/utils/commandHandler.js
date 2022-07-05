"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandledCommand = void 0;
var path_1 = __importDefault(require("path"));
var command_1 = require("./command");
var config_1 = require("./config");
var debug_1 = require("./debug");
var HandledCommand = /** @class */ (function (_super) {
    __extends(HandledCommand, _super);
    function HandledCommand(msg) {
        var _this = this;
        var splittedMessage = msg.content.split(" ");
        _this = _super.call(this, splittedMessage[0].replace(config_1.Config.get_instance().PREFIX, '')) || this;
        _this.author = msg.author;
        _this.msg = msg;
        splittedMessage.length > 1 ? _this.args = splittedMessage.slice(1) : _this.args = [];
        debug_1.Debug.bot("".concat(_this.author.username, "#").concat(_this.author.discriminator, " execute ").concat(_this.name, " with args ").concat(_this.args));
        try {
            require(path_1.default.join(__dirname, "../commands/", _this.command)).run(_this);
        }
        catch (_a) {
            debug_1.Debug.bot("Commande \"".concat(_this.command, "\" non trouv\u00E9e"));
        }
        return _this;
    }
    return HandledCommand;
}(command_1.Command));
exports.HandledCommand = HandledCommand;
//# sourceMappingURL=commandHandler.js.map