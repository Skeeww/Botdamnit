import { client, config } from "../main";
import { Debug } from "../utils/debug";

namespace Event {
    Debug.bot("[Reddit] event loaded")

    client.on("messageReactionAdd", (react) => {
        if (react.emoji.name === "upvote" && (react.count || 0) >= 20) {
            react.message.pin({ reason: "upvoted" }).catch(err => {
                Debug.bot(err)
            })
            Debug.bot("trigger")
        }
        if (react.emoji.name === "downvote" && (react.count || 0) >= 10) {
            react.message.delete().catch(err => {
                Debug.bot(err)
            })
        }
    })
    client.on("message", msg => {
        if (msg.content.startsWith("REDDIT") || msg.channel.id === config.CHANNELS.MEME) {
            msg.react(msg.guild?.emojis.cache.find(e => e.name === "upvote") || "").catch((err) => {
                Debug.bot(err)
            })
            msg.react(msg.guild?.emojis.cache.find(e => e.name === "downvote") || "").catch((err) => {
                Debug.bot(err)
            })
        }
    })
}

export { Event }