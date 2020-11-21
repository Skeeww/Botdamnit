import { IModule } from "./tick";
import readline from "readline"
import { google } from "googleapis"
import moment from "moment"
import { Debug } from "../utils/debug";
import { Config } from "../utils/config";
import { client } from "../main";
import { TextChannel } from "discord.js";

class Birthday implements IModule{
    name: string = "Birthday"
    exec: Function = (freq: number) => {
        let birthdays: Map<string, string> = new Map();

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        const oauth2Client = new google.auth.OAuth2(
            Config.GOOGLE_CLIENT_ID,
            Config.GOOGLE_CLIENT_SECRET,
            Config.GOOGLE_REDIRECT_URL
        )

        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: [
                'https://www.googleapis.com/auth/calendar.calendarlist',
                'https://www.googleapis.com/auth/calendar.calendars.readonly',
                'https://www.googleapis.com/auth/calendar.readonly'
            ]
        })

        console.log(url);

        rl.question("Code: ", async code => {
            const {tokens} = await oauth2Client.getToken(code)
            oauth2Client.setCredentials(tokens)
            google.calendar({
                version: "v3",
                auth: oauth2Client
            }).events.list({
                calendarId: Config.GOOGLE_CALENDAR_ID,
                timeMin: new Date().toISOString()
            }).then(e => {
                e.data.items?.forEach(i => {
                    birthdays.set(i.summary || "", i.start?.date || "")
                })
                run();
            }).catch(e => {
                Debug.bot("Birthday calendar not found !")
            })
        })

        let isRunning: boolean = false;
        function run(){
            birthdays.forEach((d, s) => {
                if(moment(new Date()).isSame(moment(d), 'day')){
                    client.guilds.fetch(Config.GUILD_ID).then(g => {
                        (g.channels.cache.find(c => c.id === Config.ANNONCES) as TextChannel).send(`:catjam::ah::Bigpapog::cum::enorme::ENSEMBLE::coolfox::kreygasm::oui::rirededroite::Papooserious::PatateCoucou::pog::PogU::RenardTropChoupi::melensourire::gicler:\n**Joyeux anniverssaire à ${s} !**:catjam::ah::Bigpapog::cum::enorme::ENSEMBLE::coolfox::kreygasm::oui::rirededroite::Papooserious::PatateCoucou::pog::PogU::RenardTropChoupi::melensourire::gicler:`)
                    })
                }
            })
            if(!isRunning){
                isRunning = true;
                setInterval(() => {
                    run();
                }, freq)
            }
        }
    }
}

export { Birthday }