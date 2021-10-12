"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ligma = void 0;
var moment_1 = __importDefault(require("moment"));
var main_1 = require("../main");
var config_1 = require("../utils/config");
var Ligma = /** @class */ (function () {
    function Ligma() {
        this.name = "Ligma";
        this.exec = function () {
            var guild = main_1.client.guilds.resolve(config_1.Config.get_instance().GUILD_ID);
            var destDate = moment_1.default("2021-11-01");
            var emojis = [":regional_indicator_u:", ":regional_indicator_g:", ":regional_indicator_e:", ":regional_indicator_t:", ":regional_indicator_n:", ":regional_indicator_o:", ":regional_indicator_n:", ":regional_indicator_u:", ":regional_indicator_t:", ":regional_indicator_n:", ":regional_indicator_o:", ":regional_indicator_v:", ":regional_indicator_e:", ":regional_indicator_m:", ":regional_indicator_b:", ":regional_indicator_e:", ":regional_indicator_r:", ":regional_indicator_e:", ":regional_indicator_d:"];
            emojis.reverse();
            var nb_days = destDate.diff(moment_1.default(), 'days');
            guild.channels.resolve(config_1.Config.get_instance().CHANNELS.LIGMA).send(emojis[nb_days - 1] + " *-" + nb_days + " jours*");
        };
    }
    return Ligma;
}());
exports.Ligma = Ligma;
//# sourceMappingURL=ligma.js.map