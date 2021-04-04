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
var DirectMessage;
(function (DirectMessage) {
    function handle(msg) {
        console.log(msg.author.username + ": " + msg.content);
        fs.readFile("./banwords.txt", function (err, data) {
            console.log(data);
        });
        console.log(msg.content.indexOf('pute'));
        /*(client.guilds.cache.find(g => g.id === config.GUILD_ID)?.channels.cache.find(c => c.id === config.CHANNELS.ANO) as TextChannel).send(
            `${msg.content}\n==========`
        )*/
    }
    DirectMessage.handle = handle;
})(DirectMessage || (DirectMessage = {}));
exports.DirectMessage = DirectMessage;
//# sourceMappingURL=directMessage.js.map