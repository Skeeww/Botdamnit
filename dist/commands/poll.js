"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const discord_js_1 = require("discord.js");
const main_1 = require("../main");
const config_1 = require("../utils/config");
const emotesReact = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
class Poll {
    constructor(question, answers) {
        this.question = "";
        this.answers = new Map();
        this.startTime = new Date();
        this.question = question;
        answers.forEach((answer, i) => {
            this.answers.set(answer, emotesReact[i]);
        });
    }
    send() {
        main_1.client.guilds.fetch(config_1.Config.get_instance().GUILD_ID).then(guild => {
            const embed = new discord_js_1.MessageEmbed();
            this.answers.forEach((v, k) => {
                embed.addField(k, v, true);
            });
            embed.setTitle(this.question);
            guild.channels.cache.find(c => c.id === config_1.Config.get_instance().CHANNELS.POLLS).send({ embeds: [embed] }).then((m) => {
                this.answers.forEach((v) => {
                    m.react(v);
                });
            });
        }).catch(() => {
            return false;
        });
    }
}
const regexp = /:([0-9]*)>/g;
function run(cmd) {
    if (cmd.args.length) {
        cmd.args = cmd.args.join(" ").split(",");
        if (cmd.args.length < 2 && cmd.args.length > 10) {
            cmd.msg.channel.send("Attention ! Les sondages doivent contenir entre 1 et 10 réponses");
            return;
        }
        const poll = new Poll(cmd.args.pop(), cmd.args);
        poll.send();
        cmd.msg.channel.send("Sondage créé !");
    }
}
exports.run = run;
//# sourceMappingURL=poll.js.map