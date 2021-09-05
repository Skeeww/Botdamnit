import { Guild, Message } from "discord.js"
import { MongoClient } from "mongodb"
import { Config } from "./config"

export default class Database {
    public static instance: Database

    private client: MongoClient

    private constructor() {
        this.client = new MongoClient(Config.get_instance().MONGODB.URL)
    }

    public registerMessage(msg: Message) {
        this.client.connect((err, client) => {
            if(err) throw err
            if(msg.author.bot) return
            client!.db(Config.get_instance().MONGODB.COLLECTION)
                .collection("messages")
                .insertOne({
                    author: `${msg.author.username}#${msg.author.discriminator}`,
                    post_date: new Date(Date.now()).toUTCString(),
                    channel: msg.channelId
                })
            })
    }

    public updateMembers(guild: Guild) {
        this.client.connect((err, client) => {
            if(err) throw err
            client!.db(Config.get_instance().MONGODB.COLLECTION)
                .collection("members")
                .insertOne({
                    post_date: new Date(Date.now()).toUTCString(),
                    value: guild.memberCount
                })
            })
    }

    public static get_instance(): Database {
        if(!Database.instance) {
            this.instance = new this()
        }
        return this.instance
    }
}