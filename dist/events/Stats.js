"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var mongo_1 = __importDefault(require("../utils/mongo"));
var Stats;
(function (Stats) {
    debug_1.Debug.bot("[Stats] event loaded");
    main_1.client.on("messageCreate", function (msg) {
        mongo_1.default.get_instance().registerMessage(msg);
    });
})(Stats = exports.Stats || (exports.Stats = {}));
//# sourceMappingURL=Stats.js.map