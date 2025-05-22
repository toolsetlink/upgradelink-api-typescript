"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tools {
    static timeRFC3339() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const tzOffset = date.getTimezoneOffset();
        const tzSign = tzOffset <= 0 ? '+' : '-';
        const absTzOffset = Math.abs(tzOffset);
        const tzHours = String(Math.floor(absTzOffset / 60)).padStart(2, '0');
        const tzMinutes = String(absTzOffset % 60).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${tzSign}${tzHours}:${tzMinutes}`;
    }
}
exports.default = Tools;
//# sourceMappingURL=tools.js.map