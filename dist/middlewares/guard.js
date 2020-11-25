"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
var Guard;
(function (Guard) {
    function checkPerm(member, cmd) {
        var canExecute = false;
        if (!cmd.rank.length) {
            canExecute = true;
        }
        cmd.rank.forEach(function (id) {
            if (member.roles.cache.find(function (r) { return r.id === id; })) {
                canExecute = true;
            }
        });
        return canExecute;
    }
    Guard.checkPerm = checkPerm;
})(Guard || (Guard = {}));
exports.Guard = Guard;
//# sourceMappingURL=guard.js.map