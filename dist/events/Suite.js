"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suite = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const main_1 = require("../main");
const config_1 = require("../utils/config");
const debug_1 = require("../utils/debug");
var Suite;
(function (Suite) {
    debug_1.Debug.bot("[Suite] event loaded");
    const COUNTER_FILE_NAME = "Suite.counter.data";
    const counter = {
        last_number: 0
    };
    const counter_proxy = new Proxy(counter, {
        set: ({ last_number }, _key, value) => {
            fs_1.writeFileSync(path_1.join(config_1.Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME), value.toString(), { encoding: 'utf-8', flag: 'w+' });
            last_number = value;
            return true;
        },
        get: ({ last_number }, _key, _receiver) => {
            if (last_number === 0) {
                if (!fs_1.existsSync(path_1.join(config_1.Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME))) {
                    fs_1.writeFileSync(path_1.join(config_1.Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME), "0", { encoding: 'utf-8', flag: 'w+' });
                }
                return parseInt(fs_1.readFileSync(path_1.join(config_1.Config.get_instance().STORAGE_PATH, COUNTER_FILE_NAME), { encoding: 'utf-8' }));
            }
            return last_number;
        }
    });
    main_1.client.on('messageCreate', (msg) => {
        if (msg.author.bot || msg.channel.id != config_1.Config.get_instance().CHANNELS.RECURENCE) {
            return;
        }
        const input_number = parseInt(msg.content);
        if (input_number !== NaN && input_number === counter_proxy.last_number + 1) {
            msg.channel.send(`Le dernier nombre trouvé est ${++(counter_proxy.last_number)}`);
            msg.react('✅');
        }
        else {
            msg.react('❌');
            msg.channel.send(`Série de ${counter_proxy.last_number} !`);
            counter_proxy.last_number = 0;
        }
    });
})(Suite = exports.Suite || (exports.Suite = {}));
//# sourceMappingURL=Suite.js.map