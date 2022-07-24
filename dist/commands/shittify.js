"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const emoteList = ":cowboy: :disguised_face: :imp: :japanese_goblin: :clown: :smiley_cat: :palms_up_together: :alien: :smirk_cat: :pinching_hand: :call_me: :call_me: :point_up: :middle_finger: :mechanical_leg: :older_man: :woman_white_haired: :adult: :woman_bald: :man_wearing_turban: :man_guard: :pregnant_woman: :woman_feeding_baby: :man_gesturing_no: :woman_vampire: :mx_claus: :man_superhero: :woman_superhero: :jeans: :sandal: :thong_sandal: :hiking_boot: :leafy_green: :coconut: :kiwi: :peach: :kiwi: :blueberries: :bacon: :stuffed_flatbread:".split(" ");
function run(cmd) {
    if (cmd.args.length) {
        cmd.args.forEach((c, i) => {
            cmd.args[i] += emoteList[Math.floor(Math.random() * emoteList.length)];
        });
        cmd.msg.channel.send(cmd.args.join(" ").trim()).then(() => {
            cmd.msg.delete();
        });
    }
}
exports.run = run;
//# sourceMappingURL=shittify.js.map