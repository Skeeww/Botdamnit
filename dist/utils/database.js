"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseUtil = void 0;
var DatabaseUtil = /** @class */ (function () {
    function DatabaseUtil() {
    }
    DatabaseUtil.run = function (db, req) {
        db.serialize(function () {
            db.exec(req);
        });
    };
    return DatabaseUtil;
}());
exports.DatabaseUtil = DatabaseUtil;
//# sourceMappingURL=database.js.map