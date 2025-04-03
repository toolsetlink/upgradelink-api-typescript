export default class Client {
    static timeRFC3339(): string;
    /**
     * @remarks
     * 生成16位随机Nonce
     * @returns generateNonce
     */
    static generateNonce(): string;
    /**
     * @remarks
     * 生成签名
     * @returns generateSignature
     */
    static generateSignature(body: string, nonce: string, secretKey: string, timestamp: string, uri: string): string;
}
