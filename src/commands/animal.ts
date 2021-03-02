import axios from "axios";
import { MessageEmbed } from "discord.js";
import { Command } from "../utils/command";
import { HandledCommand } from "../utils/commandHandler";

export function run(cmd: HandledCommand) {
    switch (cmd.args[0] ?? Command.extractCommand(cmd.msg.content)) {
        case "cat":
            axios.get("https://api.thecatapi.com/v1/images/search").then(res => {
                cmd.msg.channel.send(new MessageEmbed({image: {url: res.data[0].url}}))
            })
            break;
        case "dog":
            axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
                cmd.msg.channel.send(new MessageEmbed({image: {url: res.data.message}}))
            })
            break;
        case "theo":
            const urls = [
                "https://lh3.googleusercontent.com/pw/ACtC-3eYwd6OIhmZrBR_cfwy4fddR_1SMYYNxL7WrGh5GvEodDgx-cHO6tZAeNbkzXR-veftao-W6vBO1ZTaTc3b2yg5cEhuzkkZ8zyRqIZS6QqUghXPSG9Oq4rA0ZeWs1VZdMaOpuKIvlU3irlHP9BYLo0J",
                "https://lh3.googleusercontent.com/TdXz253zWWgn5hLZ1boa89OVoHHsEC1sP6q2KQmkNupyOeEHwJ79Xn4ILMiOT_O0o_jZtMW8yF64pzTd-CyfqZBdGYBwd5LEesWUtyJ_C8DfFY3AU5L2IrQ-ZylDQUZCQeVMrbTqzbiiMn-2qd83l4LTEJo9dwXzzCeS3jL19Om6uqodCxj6iHGmp8SAwffRHGK1HV2_LXq15ugjgCCG7Np4lMyhxXiss_7HYbe9V540QZIsGiLkAJaLngtGy4TXWO8-RJF2rp6RC0_SpGtljgrRUtntbOzhGAUflAsQDzEMRBa_lmLcQX_dQsqGIl-KPWqkzI6IeGLEeV-VS88n0hzT4Zpb-nvkMAKQAD3UPlUzxC2f98pyCHsvKSgNSdd0A7u5nqacPRMI6oA1DCbhi2KJc1wtDe9PkQHjBhA5nE-BPxLnWC4jMo1kmIAhcFz5RdDbKqmHw8ueUfE00PvgDV5SbY5XrPh_YgFh5h_blAJHY6ehZ7PMsgQzKeh_MWYrvxRbFxw1cOWydzWhx2LRknLebeNXqtSkL1p9RdsswAFBgb4TQY0j0M36j2tiKtOnWKh6_7DlFnUp2ft_SLSfgRa_JJrmruWdfdJEzkp-W2fHAN82fQrd73Qa705fpq4sxQxwCZGloR4v4QWz4QIsOK4fZ9zL25yfTg4Bna78gRHwWdhkPk9I4u8DUMVq",
                "https://lh3.googleusercontent.com/JHS1R6thZdaE2Ng5brhvkkxBhYdPuonl4P_waXuSILckzwh6KX7Ll7DtijfaY8JpbPgBjmyRpWc6nKK9GbTnl9M7P8acL_OZIZEoibFc-SIFuoBaiAO9G-74QPdHZYVDHSYCbS3xBpsKT00fOY4R7o1r3n9IVI2K8_rok-inYQwHqFUM2bH-BAupDc1OwoIkFgDcr2iAWH3perwLXo1bdE1ruDh6WdiTVUvj4dyctFYGe433Y_QaioDu9V7ac5T16qEY5_O7H85KmhFMu8sicULmveIHHhniF8LP1gba4I_ps9l_5Baj6bld-FVQxYYTPgaJ4XunVujNDDm_4E0HjF0NKvP0gIvJKbYXnzPU2wiU_nPiNDychtoixL18dcVUZx7aj_n-8vElXe-pQfQlcqgN30uBh1niCVuM1d2Tgn_HSLf1q_z4SFofK2lu-noIXGaG8r52M6UturxGvVOkHseSnHv1JEidrs_ME_jsxya2XStwtj45SgZuDF9RgFEOFNbD3l098lyNzWS46FZtCXfeL3FnEqkLiXX0rzdBXp83sjurnS_KutDerfenHEPezQhNZCYQhNZU313-VXiAJIwp7qMKpG5PwDHQN_rnxJH2FZVCeW69JkkL7ALChhWIf7Q4dCVRu43Jbz8ityYXhO_iOYboz5k1oPTpVzf5dQuxxLCSw8t259x2vyn-"
            ]
            cmd.msg.channel.send(new MessageEmbed({image: {url: urls[Math.floor(Math.random() * urls.length)]}}))
            break;
        default:
            cmd.msg.channel.send("Désolé il faut spécifier un animal (*moi j'adore les animals* - Renaud)")
            break;
    }
}