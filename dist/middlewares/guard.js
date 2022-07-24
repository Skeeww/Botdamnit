"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPerm = void 0;
function checkPerm(member, cmd) {
    let canExecute = false;
    //If no rank is supplied by default turn canExecute to true
    if (!cmd.rank.length) {
        canExecute = true;
    }
    else {
        //Parse the ranks provided and foreach check if the member has the rank
        let i = 0;
        while (i < cmd.rank.length && !canExecute) {
            if (member.roles.cache.find(r => r.id === cmd.rank[i])) {
                canExecute = true;
            }
            else {
                i++;
            }
        }
    }
    return canExecute;
}
exports.checkPerm = checkPerm;
//# sourceMappingURL=guard.js.map