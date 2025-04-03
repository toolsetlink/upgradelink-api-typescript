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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpgradeResponse = exports.FileUpgradeDataResponse = exports.FileUpgradeRequest = exports.UrlUpgradeResponse = exports.UrlUpgradeDataResponse = exports.UrlUpgradeRequest = void 0;
// This file is auto-generated, don't edit it
const tea_util_1 = __importDefault(require("@alicloud/tea-util"));
const darabonba_base_typescript_1 = __importDefault(require("@toolsetlink/darabonba-base-typescript"));
const $tea = __importStar(require("@alicloud/tea-typescript"));
class UrlUpgradeRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlKey: 'urlKey',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            urlKey: 'string',
            versionCode: 'number',
            appointVersionCode: 'number',
            devModelKey: 'string',
            devKey: 'string',
        };
    }
}
exports.UrlUpgradeRequest = UrlUpgradeRequest;
class UrlUpgradeDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            urlKey: 'urlKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            urlPath: 'urlPath',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
        };
    }
    static types() {
        return {
            urlKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            urlPath: 'string',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
        };
    }
}
exports.UrlUpgradeDataResponse = UrlUpgradeDataResponse;
class UrlUpgradeResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            code: 'code',
            msg: 'msg',
            traceId: 'traceId',
            data: 'data',
        };
    }
    static types() {
        return {
            code: 'number',
            msg: 'string',
            traceId: 'string',
            data: UrlUpgradeDataResponse,
        };
    }
}
exports.UrlUpgradeResponse = UrlUpgradeResponse;
class FileUpgradeRequest extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            fileKey: 'fileKey',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            fileKey: 'string',
            versionCode: 'number',
            appointVersionCode: 'number',
            devModelKey: 'string',
            devKey: 'string',
        };
    }
}
exports.FileUpgradeRequest = FileUpgradeRequest;
class FileUpgradeDataResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            fileKey: 'fileKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            urlPath: 'urlPath',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
        };
    }
    static types() {
        return {
            fileKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            urlPath: 'string',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
        };
    }
}
exports.FileUpgradeDataResponse = FileUpgradeDataResponse;
class FileUpgradeResponse extends $tea.Model {
    constructor(map) {
        super(map);
    }
    static names() {
        return {
            code: 'code',
            msg: 'msg',
            traceId: 'traceId',
            data: 'data',
        };
    }
    static types() {
        return {
            code: 'number',
            msg: 'string',
            traceId: 'string',
            data: FileUpgradeDataResponse,
        };
    }
}
exports.FileUpgradeResponse = FileUpgradeResponse;
class Client {
    constructor(accessKeyId, accessKeySecret) {
        this._endpoint = "api.upgrade.toolsetlink.com";
        this._accessKeyId = accessKeyId;
        this._accessKeySecret = accessKeySecret;
    }
    async getUrlUpgrade(request) {
        let _runtime = {
            timeout: 10000,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                // 序列化请求体
                let bodyStr = tea_util_1.default.toJSONString(request);
                // 生成请求参数
                let timestamp = darabonba_base_typescript_1.default.timeRFC3339();
                let nonce = darabonba_base_typescript_1.default.generateNonce();
                let uri = "/v1/url/upgrade";
                let accessKeySecret = this._accessKeySecret;
                let accessKeyId = this._accessKeyId;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessKeySecret, timestamp, uri);
                request_.protocol = "HTTP";
                request_.method = "POST";
                request_.pathname = `/v1/url/upgrade`;
                request_.headers = {
                    host: this._endpoint,
                    'content-type': "application/json",
                    'x-timestamp': timestamp,
                    'x-nonce': nonce,
                    'x-accesskey': accessKeyId,
                    'x-signature': signature,
                };
                request_.body = new $tea.BytesReadable(bodyStr);
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                let result = tea_util_1.default.assertAsMap(await tea_util_1.default.readAsJSON(response_.body));
                if (!tea_util_1.default.equalNumber(response_.statusCode, 200)) {
                    throw $tea.newError({
                        statusCode: `${response_.statusCode}`,
                        code: `${result["code"]}`,
                        message: `${result["msg"]}`,
                        trace_id: `${result["trace_id"]}`,
                    });
                }
                return $tea.cast(Object.assign({}, result), new UrlUpgradeResponse({}));
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
    async getFileUpgrade(request) {
        let _runtime = {
            timeout: 10000,
        };
        let _lastRequest = null;
        let _now = Date.now();
        let _retryTimes = 0;
        while ($tea.allowRetry(_runtime['retry'], _retryTimes, _now)) {
            if (_retryTimes > 0) {
                let _backoffTime = $tea.getBackoffTime(_runtime['backoff'], _retryTimes);
                if (_backoffTime > 0) {
                    await $tea.sleep(_backoffTime);
                }
            }
            _retryTimes = _retryTimes + 1;
            try {
                let request_ = new $tea.Request();
                // 序列化请求体
                let bodyStr = tea_util_1.default.toJSONString(request);
                // 生成请求参数
                let timestamp = darabonba_base_typescript_1.default.timeRFC3339();
                let nonce = darabonba_base_typescript_1.default.generateNonce();
                let uri = "/v1/file/upgrade";
                let accessKeySecret = this._accessKeySecret;
                let accessKeyId = this._accessKeyId;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessKeySecret, timestamp, uri);
                request_.protocol = "HTTP";
                request_.method = "POST";
                request_.pathname = `/v1/file/upgrade`;
                request_.headers = {
                    host: this._endpoint,
                    'content-type': "application/json",
                    'x-timestamp': timestamp,
                    'x-nonce': nonce,
                    'x-accesskey': accessKeyId,
                    'x-signature': signature,
                };
                request_.body = new $tea.BytesReadable(bodyStr);
                _lastRequest = request_;
                let response_ = await $tea.doAction(request_, _runtime);
                let result = tea_util_1.default.assertAsMap(await tea_util_1.default.readAsJSON(response_.body));
                if (!tea_util_1.default.equalNumber(response_.statusCode, 200)) {
                    throw $tea.newError({
                        statusCode: `${response_.statusCode}`,
                        code: `${result["code"]}`,
                        message: `${result["msg"]}`,
                        trace_id: `${result["trace_id"]}`,
                    });
                }
                return $tea.cast(Object.assign({}, result), new FileUpgradeResponse({}));
            }
            catch (ex) {
                if ($tea.isRetryable(ex)) {
                    continue;
                }
                throw ex;
            }
        }
        throw $tea.newUnretryableError(_lastRequest);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map