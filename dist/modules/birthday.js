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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Birthday = void 0;
var readline_1 = __importDefault(require("readline"));
var googleapis_1 = require("googleapis");
var moment_1 = __importDefault(require("moment"));
var debug_1 = require("../utils/debug");
var config_1 = require("../utils/config");
var main_1 = require("../main");
var Birthday = /** @class */ (function () {
    function Birthday() {
        var _this = this;
        this.name = "Birthday";
        this.exec = function (freq) {
            var birthdays = new Map();
            var rl = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            var oauth2Client = new googleapis_1.google.auth.OAuth2(config_1.Config.GOOGLE_CLIENT_ID, config_1.Config.GOOGLE_CLIENT_SECRET, config_1.Config.GOOGLE_REDIRECT_URL);
            var url = oauth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: [
                    'https://www.googleapis.com/auth/calendar.calendarlist',
                    'https://www.googleapis.com/auth/calendar.calendars.readonly',
                    'https://www.googleapis.com/auth/calendar.readonly'
                ]
            });
            console.log(url);
            rl.question("Code: ", function (code) { return __awaiter(_this, void 0, void 0, function () {
                var tokens;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, oauth2Client.getToken(code)];
                        case 1:
                            tokens = (_a.sent()).tokens;
                            oauth2Client.setCredentials(tokens);
                            googleapis_1.google.calendar({
                                version: "v3",
                                auth: oauth2Client
                            }).events.list({
                                calendarId: config_1.Config.GOOGLE_CALENDAR_ID,
                                timeMin: new Date().toISOString()
                            }).then(function (e) {
                                var _a;
                                (_a = e.data.items) === null || _a === void 0 ? void 0 : _a.forEach(function (i) {
                                    var _a;
                                    birthdays.set(i.summary || "", ((_a = i.start) === null || _a === void 0 ? void 0 : _a.date) || "");
                                });
                                run();
                            }).catch(function (e) {
                                debug_1.Debug.bot("Birthday calendar not found !");
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            function run() {
                setInterval(function () {
                    if (new Date().getHours() === 0 && new Date().getMinutes() === 10) {
                        birthdays.forEach(function (d, s) {
                            if (moment_1.default(new Date()).isSame(moment_1.default(d), 'day')) {
                                main_1.client.guilds.fetch(config_1.Config.GUILD_ID).then(function (g) {
                                    g.channels.cache.find(function (c) { return c.id === config_1.Config.ANNONCES; }).send("<:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198> \n**Joyeux anniverssaire \u00E0 " + s + " !** \n <:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198><:catjam:766775172388487198>");
                                }).catch(function (err) {
                                    debug_1.Debug.bot(err);
                                });
                            }
                        });
                    }
                }, freq);
            }
        };
    }
    return Birthday;
}());
exports.Birthday = Birthday;
//# sourceMappingURL=birthday.js.map