"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var discord_js_1 = require("discord.js");
var main_1 = require("../main");
var config_1 = require("../utils/config");
var emotesReact = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
var Poll = /** @class */ (function () {
    function Poll(question, answers) {
        var _this = this;
        this.question = "";
        this.answers = new Map();
        this.startTime = new Date();
        this.question = question;
        answers.forEach(function (answer, i) {
            _this.answers.set(answer, emotesReact[i]);
        });
    }
    Poll.prototype.send = function () {
        var _this = this;
        main_1.client.guilds.fetch(config_1.Config.get_instance().GUILD_ID).then(function (guild) {
            var embed = new discord_js_1.MessageEmbed();
            _this.answers.forEach(function (v, k) {
                embed.addField(k, v, true);
            });
            embed.setTitle(_this.question);
            guild.channels.cache.find(function (c) { return c.id === config_1.Config.get_instance().CHANNELS.POLLS; }).send({ embeds: [embed] }).then(function (m) {
                _this.answers.forEach(function (v) {
                    m.react(v);
                });
            });
        }).catch(function () {
            return false;
        });
    };
    return Poll;
}());
var regexp = /:([0-9]*)>/g;
function run(cmd) {
    if (cmd.args.length) {
        cmd.args = cmd.args.join(" ").split(",");
        if (cmd.args.length < 2 && cmd.args.length > 10) {
            cmd.msg.channel.send("Attention ! Les sondages doivent contenir entre 1 et 10 réponses");
            return;
        }
        var poll = new Poll(cmd.args.pop(), cmd.args);
        poll.send();
        cmd.msg.channel.send("Sondage créé !");
    }
}
exports.run = run;
//# sourceMappingURL=poll.js.map