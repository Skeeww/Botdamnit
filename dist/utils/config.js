"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var Config = dotenv_1.default.config().parsed;
exports.Config = Config;
//# sourceMappingURL=config.js.map