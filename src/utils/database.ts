import { Database } from "sqlite3";

export class DatabaseUtil {
    public static run(db: Database, req: string): void{
        db.serialize(() => {
            db.exec(req)
        })
    }
}