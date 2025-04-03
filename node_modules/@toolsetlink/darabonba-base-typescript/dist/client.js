"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("crypto"));
class Client {
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
    /**
     * @remarks
     * 生成16位随机Nonce
     * @returns generateNonce
     */
    static generateNonce() {
        const bytes = crypto.randomBytes(8);
        return bytes.toString('hex');
    }
    /**
     * @remarks
     * 生成签名
     * @returns generateSignature
     */
    static generateSignature(body, nonce, secretKey, timestamp, uri) {
        const parts = [];
        if (body !== '') {
            parts.push(`body=${body}`);
        }
        parts.push(`nonce=${nonce}`, `secretKey=${secretKey}`, `timestamp=${timestamp}`, `url=${uri}`);
        const signStr = parts.join('&');
        return crypto.createHash('md5').update(signStr).digest('hex');
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map