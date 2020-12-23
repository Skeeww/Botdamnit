"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var Log;
(function (Log) {
    var _a;
    var LogChannel = (_a = main_1.client.guilds.get(config_1.Config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.channels.get(config_1.Config.LOG_CHANNEL);
    main_1.client.on("channelCreate", function (chan) {
        var _a;
        LogChannel.createMessage({
            embed: {
                title: "Nouveau channel",
                fields: [
                    { name: "Nom", value: (_a = LogChannel.guild.channels.get(chan.id)) === null || _a === void 0 ? void 0 : _a.name, inline: false }
                ],
                color: 0x00ff00
            }
        });
    });
    main_1.client.on("channelDelete", function (chan) {
        LogChannel.createMessage({
            embed: {
                title: "Channel supprimé",
                color: 0xff0000
            }
        });
    });
    main_1.client.on("channelUpdate", function (chan, oldchan) {
        var _a;
        LogChannel.createMessage({
            embed: {
                title: "Channel mis à jour",
                fields: [
                    { name: "Nom", value: (_a = LogChannel.guild.channels.get(chan.id)) === null || _a === void 0 ? void 0 : _a.name, inline: false }
                ],
                color: 0x0000ff
            }
        });
    });
    main_1.client.on("guildBanAdd", function (guild, user) {
        LogChannel.createMessage({
            embed: {
                title: "Utilisateur banni",
                description: user.username,
                thumbnail: {
                    url: user.avatarURL
                },
                color: 0xff0000
            }
        });
    });
    main_1.client.on("guildBanRemove", function (guild, user) {
        LogChannel.createMessage({
            embed: {
                title: "Utilisateur débanni",
                description: user.username,
                thumbnail: {
                    url: user.avatarURL
                },
                color: 0xff0000
            }
        });
    });
    main_1.client.on("guildMemberAdd", function (guild, member) {
        LogChannel.createMessage({
            embed: {
                title: "Nouveau membre",
                description: member.username,
                thumbnail: {
                    url: member.avatarURL
                },
                color: 0x00ff00
            }
        });
    });
    main_1.client.on("guildMemberRemove", function (guild, member) {
        LogChannel.createMessage({
            embed: {
                title: "Membre parti",
                description: member.user.username,
                thumbnail: {
                    url: member.user.avatarURL
                },
                color: 0xff0000
            }
        });
    });
})(Log = exports.Log || (exports.Log = {}));
//# sourceMappingURL=Log.js.map