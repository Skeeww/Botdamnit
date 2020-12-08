import { Message, TextChannel } from "discord.js";
import { Command as Cmd } from "../utils/command";

namespace Command {
    const emoteList: Array<string> = ":cowboy: :disguised_face: :imp: :japanese_goblin: :clown: :smiley_cat: :palms_up_together: :alien: :smirk_cat: :pinching_hand: :call_me: :call_me: :point_up: :middle_finger: :mechanical_leg: :older_man: :woman_white_haired: :adult: :woman_bald: :man_wearing_turban: :man_guard: :pregnant_woman: :woman_feeding_baby: :man_gesturing_no: :woman_vampire: :mx_claus: :man_superhero: :woman_superhero: :jeans: :sandal: :thong_sandal: :hiking_boot: :leafy_green: :coconut: :kiwi: :peach: :kiwi: :blueberries: :bacon: :stuffed_flatbread:".split(" ");
    export function run(msg: Message, cmd: Cmd.Command, args?: Array<string>){
        if(args?.length){
            args.forEach((c, i) => {
                args[i] += emoteList[Math.floor(Math.random() * emoteList.length)];
            });
            msg.channel.send(args.join(" ").trim()).then(() => {
                msg.delete();
            });
        }
    }
}

export { Command }