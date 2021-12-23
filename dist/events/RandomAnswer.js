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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomAnswer = void 0;
var main_1 = require("../main");
var debug_1 = require("../utils/debug");
var RandomAnswer;
(function (RandomAnswer) {
    var _this = this;
    debug_1.Debug.bot("[RandomAnswer] event loaded");
    var quoi_words = [
        "ffer",
        "tron",
        "ffeur",
    ];
    var ner_words = [
        "gros",
        "**gros**",
        "||gros||",
        "???",
        "t'es sérieux gros ?"
    ];
    main_1.client.on("messageCreate", function (msg) { return __awaiter(_this, void 0, void 0, function () {
        var odd, text;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            if (msg.author.bot)
                return [2 /*return*/];
            odd = Math.random();
            text = msg.content.replace("?", "").replace("!", "").trim();
            if (odd < 0.002) {
                msg.channel.send("AH OUAIS " + ((_a = msg.member) === null || _a === void 0 ? void 0 : _a.displayName) + " ?! " + msg.content.toUpperCase());
            }
            else if (odd < 0.004) {
                msg.channel.send(msg.author.username + " tu viens vraiment de dire \u00E7a sur " + ((_c = (_b = msg.guild) === null || _b === void 0 ? void 0 : _b.members.cache.random()) === null || _c === void 0 ? void 0 : _c.displayName) + " !!!!");
            }
            else if (odd < 0.008) {
                msg.channel.send(msg.author.username + " en vrai ce que tu dis est interessant");
            }
            else if (text.endsWith("quoi")) {
                msg.channel.send(quoi_words[Math.floor(quoi_words.length * odd)]);
            }
            else if (text.endsWith("ner") || text.endsWith("nez") || text.endsWith("né") || text.endsWith("née")) {
                msg.channel.send(ner_words[Math.floor(ner_words.length * odd)]);
            }
            return [2 /*return*/];
        });
    }); });
})(RandomAnswer = exports.RandomAnswer || (exports.RandomAnswer = {}));
//# sourceMappingURL=RandomAnswer.js.map