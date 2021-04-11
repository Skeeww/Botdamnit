"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectMessage = void 0;
var fs = __importStar(require("fs"));
var main_1 = require("../main");
var DirectMessage;
(function (DirectMessage) {
    var banwords = new Array();
    banwords = fs.readFileSync("./banwords.txt").toString().replace('\r', '').split('\n');
    console.log(banwords);
    function handle(msg) {
        var _a;
        var found = false;
        var i = 0;
        while (!found && i < banwords.length) {
            if (msg.content.indexOf(banwords[i]) != -1) {
                found = true;
            }
            else {
                i++;
            }
        }
        if (!found) {
            ((_a = main_1.client.guilds.cache.find(function (g) { return g.id === main_1.config.GUILD_ID; })) === null || _a === void 0 ? void 0 : _a.channels.cache.find(function (c) { return c.id === main_1.config.CHANNELS.ANO; })).send(msg.content + "\n==========");
        }
        else {
            msg.channel.send("Ton message contient du contenu pouvant être offenssant. Il n'a donc pas été envoyé");
        }
    }
    DirectMessage.handle = handle;
})(DirectMessage || (DirectMessage = {}));
exports.DirectMessage = DirectMessage;
//# sourceMappingURL=directMessage.js.map