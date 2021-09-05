"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var config_1 = require("./config");
var Database = /** @class */ (function () {
    function Database() {
        this.client = new mongodb_1.MongoClient(config_1.Config.get_instance().MONGODB.URL);
    }
    Database.prototype.registerMessage = function (msg) {
        this.client.connect(function (err, client) {
            if (err)
                throw err;
            if (msg.author.bot)
                return;
            client.db(config_1.Config.get_instance().MONGODB.COLLECTION)
                .collection("messages")
                .insertOne({
                author: msg.author.username + "#" + msg.author.discriminator,
                post_date: new Date(Date.now()).toUTCString(),
                channel: msg.channelId
            });
        });
    };
    Database.prototype.updateMembers = function (guild) {
        this.client.connect(function (err, client) {
            if (err)
                throw err;
            client.db(config_1.Config.get_instance().MONGODB.COLLECTION)
                .collection("members")
                .insertOne({
                post_date: new Date(Date.now()).toUTCString(),
                value: guild.memberCount
            });
        });
    };
    Database.get_instance = function () {
        if (!Database.instance) {
            this.instance = new this();
        }
        return this.instance;
    };
    return Database;
}());
exports.default = Database;
//# sourceMappingURL=mongo.js.map