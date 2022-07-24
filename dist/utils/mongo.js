"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
class Database {
    constructor() {
        this.client = new mongodb_1.MongoClient(config_1.Config.get_instance().MONGODB.URL);
    }
    registerMessage(msg) {
        this.client.connect((err, client) => {
            if (err)
                throw err;
            if (msg.author.bot)
                return;
            client.db(config_1.Config.get_instance().MONGODB.COLLECTION)
                .collection("messages")
                .insertOne({
                author: `${msg.author.username}#${msg.author.discriminator}`,
                post_date: new Date(Date.now()).toUTCString(),
                channel: msg.channelId
            });
        });
    }
    updateMembers(guild) {
        this.client.connect((err, client) => {
            if (err)
                throw err;
            client.db(config_1.Config.get_instance().MONGODB.COLLECTION)
                .collection("members")
                .insertOne({
                post_date: new Date(Date.now()).toUTCString(),
                value: guild.memberCount
            });
        });
    }
    addScore(id, val) {
        this.client.connect((err, client) => {
            if (err)
                throw err;
            client.db(config_1.Config.get_instance().MONGODB.COLLECTION)
                .collection("score")
                .updateOne({ user: id }, {
                user: id,
                score: val
            }, { upsert: true });
        });
    }
    getScore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let score = -1;
            this.client.connect((err, client) => {
                if (err)
                    throw err;
                client.db(config_1.Config.get_instance().MONGODB.COLLECTION)
                    .collection("score")
                    .findOne({ user: id })
                    .then(doc => {
                    score = (doc === null || doc === void 0 ? void 0 : doc.score) | -1;
                });
            });
            return score;
        });
    }
    static get_instance() {
        if (!Database.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
}
exports.default = Database;
//# sourceMappingURL=mongo.js.map