"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppReportRequestEventData = exports.AppReportResponse = exports.AppReportRequest = exports.FileUpgradeResponse = exports.FileUpgradeDataResponse = exports.FileUpgradeRequest = exports.UrlUpgradeResponse = exports.UrlUpgradeDataResponse = exports.UrlUpgradeRequest = exports.Config = void 0;
// This file is auto-generated, don't edit it
const tea_util_1 = __importDefault(require("@alicloud/tea-util"));
const darabonba_base_typescript_1 = __importDefault(require("@toolsetlink/darabonba-base-typescript"));
const $tea = __importStar(require("@alicloud/tea-typescript"));
class Config extends $tea.Model {
    static names() {
        return {
            accessKey: 'accessKey',
            accessSecret: 'accessSecret',
            protocol: 'protocol',
            endpoint: 'endpoint',
        };
    }
    static types() {
        return {
            accessKey: 'string',
            accessSecret: 'string',
            protocol: 'string',
            endpoint: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.Config = Config;
class UrlUpgradeRequest extends $tea.Model {
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
    constructor(map) {
        super(map);
    }
}
exports.UrlUpgradeRequest = UrlUpgradeRequest;
class UrlUpgradeDataResponse extends $tea.Model {
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
    constructor(map) {
        super(map);
    }
}
exports.UrlUpgradeDataResponse = UrlUpgradeDataResponse;
class UrlUpgradeResponse extends $tea.Model {
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
    constructor(map) {
        super(map);
    }
}
exports.UrlUpgradeResponse = UrlUpgradeResponse;
class FileUpgradeRequest extends $tea.Model {
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
    constructor(map) {
        super(map);
    }
}
exports.FileUpgradeRequest = FileUpgradeRequest;
class FileUpgradeDataResponse extends $tea.Model {
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
    constructor(map) {
        super(map);
    }
}
exports.FileUpgradeDataResponse = FileUpgradeDataResponse;
class FileUpgradeResponse extends $tea.Model {
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
    constructor(map) {
        super(map);
    }
}
exports.FileUpgradeResponse = FileUpgradeResponse;
class AppReportRequest extends $tea.Model {
    static names() {
        return {
            eventType: 'eventType',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
            appKey: 'appKey',
            versionCode: 'versionCode',
            timestamp: 'timestamp',
            eventData: 'eventData',
        };
    }
    static types() {
        return {
            eventType: 'string',
            devModelKey: 'string',
            devKey: 'string',
            appKey: 'string',
            versionCode: 'number',
            timestamp: 'string',
            eventData: AppReportRequestEventData,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.AppReportRequest = AppReportRequest;
class AppReportResponse extends $tea.Model {
    static names() {
        return {
            code: 'code',
            msg: 'msg',
            docs: 'docs',
            traceId: 'traceId',
        };
    }
    static types() {
        return {
            code: 'number',
            msg: 'string',
            docs: 'string',
            traceId: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.AppReportResponse = AppReportResponse;
class AppReportRequestEventData extends $tea.Model {
    static names() {
        return {
            launchTime: 'launchTime',
            code: 'code',
            downloadVersionCode: 'downloadVersionCode',
            upgradeVersionCode: 'upgradeVersionCode',
        };
    }
    static types() {
        return {
            launchTime: 'string',
            code: 'number',
            downloadVersionCode: 'number',
            upgradeVersionCode: 'number',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.AppReportRequestEventData = AppReportRequestEventData;
class Client {
    constructor(config) {
        this._accessKey = config.accessKey;
        this._accessSecret = config.accessSecret;
        if (tea_util_1.default.equalString(config.protocol, "HTTPS")) {
            this._protocol = "HTTPS";
        }
        else {
            this._protocol = "HTTP";
        }
        if (tea_util_1.default.empty(config.endpoint)) {
            this._endpoint = "api.upgrade.toolsetlink.com";
        }
        else {
            this._endpoint = config.endpoint;
        }
    }
    async UrlUpgrade(request) {
        let _runtime = {
            timeout: 10000,
            // 10s 的过期时间
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
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/url/upgrade`;
                request_.headers = {
                    host: this._endpoint,
                    'content-type': "application/json",
                    'x-Timestamp': timestamp,
                    'x-Nonce': nonce,
                    'x-AccessKey': accessKey,
                    'x-Signature': signature,
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
                        docs: `${result["docs"]}`,
                        traceId: `${result["traceId"]}`,
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
    async FileUpgrade(request) {
        let _runtime = {
            timeout: 10000,
            // 10s 的过期时间
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
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/file/upgrade`;
                request_.headers = {
                    host: this._endpoint,
                    'content-type': "application/json",
                    'x-Timestamp': timestamp,
                    'x-Nonce': nonce,
                    'x-AccessKey': accessKey,
                    'x-Signature': signature,
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
                        docs: `${result["docs"]}`,
                        traceId: `${result["traceId"]}`,
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
    async AppReport(request) {
        let _runtime = {
            timeout: 10000,
            // 10s 的过期时间
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
                let uri = "/v1/app/report";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/app/report`;
                request_.headers = {
                    host: this._endpoint,
                    'content-type': "application/json",
                    'x-Timestamp': timestamp,
                    'x-Nonce': nonce,
                    'x-AccessKey': accessKey,
                    'x-Signature': signature,
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
                        docs: `${result["docs"]}`,
                        traceId: `${result["traceId"]}`,
                    });
                }
                return $tea.cast(Object.assign({}, result), new AppReportResponse({}));
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