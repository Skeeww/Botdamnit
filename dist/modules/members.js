"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
const main_1 = require("../main");
const config_1 = require("../utils/config");
const mongo_1 = __importDefault(require("../utils/mongo"));
class Members {
    constructor() {
        this.name = "Members";
        this.exec = () => {
            const guild = main_1.client.guilds.cache.find(g => g.id === config_1.Config.get_instance().GUILD_ID);
            const chan = guild.channels.resolve(config_1.Config.get_instance().CHANNELS.SECTION_MEMBERS);
            if (chan) {
                chan.setName(`#DEFINE NB_MEMBERS ${guild.memberCount}`);
                mongo_1.default.get_instance().updateMembers(guild);
            }
        };
    }
}
exports.Members = Members;
//# sourceMappingURL=members.js.map