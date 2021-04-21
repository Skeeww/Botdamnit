"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPerm = void 0;
function checkPerm(member, cmd) {
    var canExecute = false;
    //If no rank is supplied by default turn canExecute to true
    if (!cmd.rank.length) {
        canExecute = true;
    }
    else {
        //Parse the ranks provided and foreach check if the member has the rank
        var i_1 = 0;
        while (i_1 < cmd.rank.length && !canExecute) {
            if (member.roles.cache.find(function (r) { return r.id === cmd.rank[i_1]; })) {
                canExecute = true;
            }
            else {
                i_1++;
            }
        }
    }
    return canExecute;
}
exports.checkPerm = checkPerm;
//# sourceMappingURL=guard.js.map