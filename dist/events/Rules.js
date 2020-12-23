"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rules = void 0;
var main_1 = require("../main");
var config_1 = require("../utils/config");
var debug_1 = require("../utils/debug");
var membersAcceptedRules = new Array();
var Rules;
(function (Rules) {
    debug_1.Debug.bot("Rules module loaded");
    function acceptRules(member) {
        member === null || member === void 0 ? void 0 : member.addRole(config_1.Config.RULES_AGREE).then(function () {
            debug_1.Debug.bot(member.username + " has accepted rules");
        });
    }
    function refuseRules(member) {
        member === null || member === void 0 ? void 0 : member.roles.forEach(function (r) {
            member.removeRole(r);
        });
        debug_1.Debug.bot((member === null || member === void 0 ? void 0 : member.username) + " has refused rules");
    }
    /*Give role if bot was down during reaction*/
    main_1.client.getMessage(config_1.Config.RULES_CHANNEL, config_1.Config.RULES_MESSAGE).then(function (msg) {
        msg.getReaction(config_1.Config.RULE_EMOJI_NAME).then(function (users) { return users.forEach(function (user) { return membersAcceptedRules.push(user.id); }); }).then(function () {
            var _a;
            (_a = main_1.client.guilds.get(config_1.Config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.forEach(function (m) {
                if (m.roles.length > 1 && !m.bot && !membersAcceptedRules.includes(m.id)) {
                    refuseRules(m);
                }
                else if (!m.roles.includes(config_1.Config.RULES_AGREE) && !m.bot && membersAcceptedRules.includes(m.id)) {
                    acceptRules(m);
                }
            });
        });
    });
    main_1.client.on("messageReactionAdd", function (msg, emoji, member) {
        var _a;
        if (!msg.guildID || msg.id !== config_1.Config.RULES_MESSAGE)
            return;
        acceptRules(((_a = main_1.client.guilds.get(config_1.Config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.get(member.id)) || null);
    });
    main_1.client.on("messageReactionRemove", function (msg, emoji, member) {
        var _a;
        if (!msg.guildID || msg.id !== config_1.Config.RULES_MESSAGE)
            return;
        refuseRules(((_a = main_1.client.guilds.get(config_1.Config.GUILD_ID)) === null || _a === void 0 ? void 0 : _a.members.get(member)) || null);
    });
})(Rules = exports.Rules || (exports.Rules = {}));
//# sourceMappingURL=Rules.js.map