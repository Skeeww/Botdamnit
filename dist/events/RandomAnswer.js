"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomAnswer = void 0;
const main_1 = require("../main");
const debug_1 = require("../utils/debug");
var RandomAnswer;
(function (RandomAnswer) {
    debug_1.Debug.bot("[RandomAnswer] event loaded");
    main_1.client.on("messageCreate", (msg) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        if (msg.author.bot)
            return;
        const odd = Math.random();
        if (odd < 0.002) {
            msg.channel.send(`AH OUAIS ${(_a = msg.member) === null || _a === void 0 ? void 0 : _a.displayName} ?! ${msg.content.toUpperCase()}`);
        }
        else if (odd < 0.004) {
            msg.channel.send(`${msg.author.username} tu viens vraiment de dire ça sur ${(_c = (_b = msg.guild) === null || _b === void 0 ? void 0 : _b.members.cache.random()) === null || _c === void 0 ? void 0 : _c.displayName} !!!!`);
        }
        else if (odd < 0.008) {
            msg.channel.send(`${msg.author.username} plutôt gênant`);
        }
    }));
})(RandomAnswer = exports.RandomAnswer || (exports.RandomAnswer = {}));
//# sourceMappingURL=RandomAnswer.js.map