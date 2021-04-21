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
exports.Suite = void 0;
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
var database_1 = require("../utils/database");
var debug_1 = require("../utils/debug");
var Suite;
(function (Suite) {
    var _this = this;
    debug_1.Debug.bot("[Suite] event loaded");
    var n = 0;
    main_1.client.on('message', function (msg) {
        if (msg.author.bot || msg.channel.id != main_1.config.CHANNELS.RECURENCE) {
            return;
        }
        var input_number = parseInt(msg.content);
        if (input_number !== NaN && input_number === n + 1) {
            if (n == 0) {
                database_1.DatabaseUtil.run(main_1.db, "INSERT INTO bot(nb_suite) VALUES(" + n++ + ")");
            }
            else {
                database_1.DatabaseUtil.run(main_1.db, "UPDATE bot SET nb_suite=" + (n++ + 1) + " WHERE id=(SELECT MAX(id) FROM bot)");
            }
            msg.react('✅');
        }
        else if (n > 0) {
            var leaderboard_1 = new discord_js_1.MessageEmbed({
                title: "Classement des suites",
                hexColor: "#0099CC"
            });
            main_1.db.all('SELECT * FROM bot ORDER BY nb_suite DESC', function (err, rows) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            leaderboard_1.setDescription("Actuellement, " + rows.length + " suites sont enregistr\u00E9es");
                            rows.slice(0, 5).forEach(function (r) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    leaderboard_1.addField("Suite N\u00B0" + r.id, r.nb_suite + " de longueur");
                                    return [2 /*return*/];
                                });
                            }); });
                            return [4 /*yield*/, msg.channel.send(leaderboard_1)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            msg.react('❌');
            msg.channel.send("S\u00E9rie de " + n);
            n = 0;
        }
    });
})(Suite = exports.Suite || (exports.Suite = {}));
//# sourceMappingURL=Suite.js.map