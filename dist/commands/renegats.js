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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fs = __importStar(require("fs"));
const discord_js_1 = require("discord.js");
function run(cmd) {
    fs.readdir(`./src/hidden/renegats`, {}, (err, files) => {
        if (err)
            throw err;
        if (files.length <= 0)
            discord_js_1.ReactionUserManager;
        fs.readFile(`./src/hidden/renegats/${files[Math.floor(Math.random() * (files.length))]}`, (err, data) => {
            if (err)
                throw err;
            cmd.msg.channel.send({ files: [new discord_js_1.MessageAttachment(data)] });
        });
    });
}
exports.run = run;
//# sourceMappingURL=renegats.js.map