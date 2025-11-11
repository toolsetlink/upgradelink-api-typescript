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
exports.AppReportRequest = exports.MacVersionResponse = exports.MacVersionDataResponse = exports.MacVersionRequest = exports.MacUpgradeResponse = exports.MacUpgradeDataResponse = exports.MacUpgradeRequest = exports.WinVersionResponse = exports.WinVersionDataResponse = exports.WinVersionRequest = exports.WinUpgradeResponse = exports.WinUpgradeDataResponse = exports.WinUpgradeRequest = exports.LnxVersionResponse = exports.LnxVersionDataResponse = exports.LnxVersionRequest = exports.LnxUpgradeResponse = exports.LnxUpgradeDataResponse = exports.LnxUpgradeRequest = exports.ElectronVersionResponse = exports.ElectronVersionDataResponse = exports.ElectronVersionRequest = exports.TauriVersionResponse = exports.TauriVersionDataResponse = exports.TauriVersionRequest = exports.ConfigurationVersionResponse = exports.ConfigurationVersionDataResponse = exports.ConfigurationVersionRequest = exports.ConfigurationUpgradeResponse = exports.ConfigurationUpgradeDataResponse = exports.ConfigurationUpgradeRequest = exports.ApkVersionResponse = exports.ApkVersionDataResponse = exports.ApkVersionRequest = exports.ApkUpgradeResponse = exports.ApkUpgradeDataResponse = exports.ApkUpgradeRequest = exports.FileVersionResponse = exports.FileVersionDataResponse = exports.FileVersionRequest = exports.FileUpgradeResponse = exports.FileUpgradeDataResponse = exports.FileUpgradeRequest = exports.UrlVersionResponse = exports.UrlVersionDataResponse = exports.UrlVersionRequest = exports.UrlUpgradeResponse = exports.UrlUpgradeDataResponse = exports.UrlUpgradeRequest = exports.Config = void 0;
exports.AppReportRequestEventData = exports.AppReportResponse = void 0;
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
class UrlVersionRequest extends $tea.Model {
    static names() {
        return {
            urlKey: 'urlKey',
            versionCode: 'versionCode',
        };
    }
    static types() {
        return {
            urlKey: 'string',
            versionCode: 'number',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.UrlVersionRequest = UrlVersionRequest;
class UrlVersionDataResponse extends $tea.Model {
    static names() {
        return {
            urlKey: 'urlKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            urlKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.UrlVersionDataResponse = UrlVersionDataResponse;
class UrlVersionResponse extends $tea.Model {
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
            data: UrlVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.UrlVersionResponse = UrlVersionResponse;
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
class FileVersionRequest extends $tea.Model {
    static names() {
        return {
            fileKey: 'fileKey',
            versionCode: 'versionCode',
        };
    }
    static types() {
        return {
            fileKey: 'string',
            versionCode: 'number',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.FileVersionRequest = FileVersionRequest;
class FileVersionDataResponse extends $tea.Model {
    static names() {
        return {
            fileKey: 'fileKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            fileKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.FileVersionDataResponse = FileVersionDataResponse;
class FileVersionResponse extends $tea.Model {
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
            data: FileVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.FileVersionResponse = FileVersionResponse;
class ApkUpgradeRequest extends $tea.Model {
    static names() {
        return {
            apkKey: 'apkKey',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            apkKey: 'string',
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
exports.ApkUpgradeRequest = ApkUpgradeRequest;
class ApkUpgradeDataResponse extends $tea.Model {
    static names() {
        return {
            apkKey: 'apkKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            urlPath: 'urlPath',
            urlFileSize: 'urlFileSize',
            urlFileMd5: 'urlFileMd5',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
        };
    }
    static types() {
        return {
            apkKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            urlPath: 'string',
            urlFileSize: 'number',
            urlFileMd5: 'string',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ApkUpgradeDataResponse = ApkUpgradeDataResponse;
class ApkUpgradeResponse extends $tea.Model {
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
            data: ApkUpgradeDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ApkUpgradeResponse = ApkUpgradeResponse;
class ApkVersionRequest extends $tea.Model {
    static names() {
        return {
            apkKey: 'apkKey',
            versionCode: 'versionCode',
        };
    }
    static types() {
        return {
            apkKey: 'string',
            versionCode: 'number',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ApkVersionRequest = ApkVersionRequest;
class ApkVersionDataResponse extends $tea.Model {
    static names() {
        return {
            apkKey: 'apkKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            apkKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ApkVersionDataResponse = ApkVersionDataResponse;
class ApkVersionResponse extends $tea.Model {
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
            data: ApkVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ApkVersionResponse = ApkVersionResponse;
class ConfigurationUpgradeRequest extends $tea.Model {
    static names() {
        return {
            configurationKey: 'configurationKey',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            configurationKey: 'string',
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
exports.ConfigurationUpgradeRequest = ConfigurationUpgradeRequest;
class ConfigurationUpgradeDataResponse extends $tea.Model {
    static names() {
        return {
            configurationKey: 'configurationKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
            content: 'content',
        };
    }
    static types() {
        return {
            configurationKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
            content: 'any',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ConfigurationUpgradeDataResponse = ConfigurationUpgradeDataResponse;
class ConfigurationUpgradeResponse extends $tea.Model {
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
            data: ConfigurationUpgradeDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ConfigurationUpgradeResponse = ConfigurationUpgradeResponse;
class ConfigurationVersionRequest extends $tea.Model {
    static names() {
        return {
            configurationKey: 'configurationKey',
            versionCode: 'versionCode',
        };
    }
    static types() {
        return {
            configurationKey: 'string',
            versionCode: 'number',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ConfigurationVersionRequest = ConfigurationVersionRequest;
class ConfigurationVersionDataResponse extends $tea.Model {
    static names() {
        return {
            configurationKey: 'configurationKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            configurationKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ConfigurationVersionDataResponse = ConfigurationVersionDataResponse;
class ConfigurationVersionResponse extends $tea.Model {
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
            data: ConfigurationVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ConfigurationVersionResponse = ConfigurationVersionResponse;
class TauriVersionRequest extends $tea.Model {
    static names() {
        return {
            tauriKey: 'tauriKey',
            versionName: 'versionName',
            target: 'target',
            arch: 'arch',
        };
    }
    static types() {
        return {
            tauriKey: 'string',
            versionName: 'string',
            target: 'string',
            arch: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.TauriVersionRequest = TauriVersionRequest;
class TauriVersionDataResponse extends $tea.Model {
    static names() {
        return {
            tauriKey: 'tauriKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            target: 'target',
            arch: 'arch',
            description: 'description',
        };
    }
    static types() {
        return {
            tauriKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            target: 'string',
            arch: 'string',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.TauriVersionDataResponse = TauriVersionDataResponse;
class TauriVersionResponse extends $tea.Model {
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
            data: TauriVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.TauriVersionResponse = TauriVersionResponse;
class ElectronVersionRequest extends $tea.Model {
    static names() {
        return {
            electronKey: 'electronKey',
            versionName: 'versionName',
            platform: 'platform',
            arch: 'arch',
        };
    }
    static types() {
        return {
            electronKey: 'string',
            versionName: 'string',
            platform: 'string',
            arch: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ElectronVersionRequest = ElectronVersionRequest;
class ElectronVersionDataResponse extends $tea.Model {
    static names() {
        return {
            electronKey: 'electronKey',
            versionName: 'versionName',
            versionCode: 'versionCode',
            platform: 'platform',
            arch: 'arch',
            description: 'description',
        };
    }
    static types() {
        return {
            electronKey: 'string',
            versionName: 'string',
            versionCode: 'number',
            platform: 'string',
            arch: 'string',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ElectronVersionDataResponse = ElectronVersionDataResponse;
class ElectronVersionResponse extends $tea.Model {
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
            data: ElectronVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.ElectronVersionResponse = ElectronVersionResponse;
class LnxUpgradeRequest extends $tea.Model {
    static names() {
        return {
            lnxKey: 'lnxKey',
            arch: 'arch',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            lnxKey: 'string',
            arch: 'string',
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
exports.LnxUpgradeRequest = LnxUpgradeRequest;
class LnxUpgradeDataResponse extends $tea.Model {
    static names() {
        return {
            lnxKey: 'lnxKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            urlPath: 'urlPath',
            urlFileSize: 'urlFileSize',
            urlFileMd5: 'urlFileMd5',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
        };
    }
    static types() {
        return {
            lnxKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            urlPath: 'string',
            urlFileSize: 'number',
            urlFileMd5: 'string',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.LnxUpgradeDataResponse = LnxUpgradeDataResponse;
class LnxUpgradeResponse extends $tea.Model {
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
            data: LnxUpgradeDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.LnxUpgradeResponse = LnxUpgradeResponse;
class LnxVersionRequest extends $tea.Model {
    static names() {
        return {
            lnxKey: 'lnxKey',
            arch: 'arch',
            versionCode: 'versionCode',
        };
    }
    static types() {
        return {
            lnxKey: 'string',
            arch: 'string',
            versionCode: 'number',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.LnxVersionRequest = LnxVersionRequest;
class LnxVersionDataResponse extends $tea.Model {
    static names() {
        return {
            lnxKey: 'lnxKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            lnxKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.LnxVersionDataResponse = LnxVersionDataResponse;
class LnxVersionResponse extends $tea.Model {
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
            data: LnxVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.LnxVersionResponse = LnxVersionResponse;
class WinUpgradeRequest extends $tea.Model {
    static names() {
        return {
            winKey: 'winKey',
            arch: 'arch',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            winKey: 'string',
            arch: 'string',
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
exports.WinUpgradeRequest = WinUpgradeRequest;
class WinUpgradeDataResponse extends $tea.Model {
    static names() {
        return {
            winKey: 'winKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            urlPath: 'urlPath',
            urlFileSize: 'urlFileSize',
            urlFileMd5: 'urlFileMd5',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
        };
    }
    static types() {
        return {
            winKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            urlPath: 'string',
            urlFileSize: 'number',
            urlFileMd5: 'string',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.WinUpgradeDataResponse = WinUpgradeDataResponse;
class WinUpgradeResponse extends $tea.Model {
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
            data: WinUpgradeDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.WinUpgradeResponse = WinUpgradeResponse;
class WinVersionRequest extends $tea.Model {
    static names() {
        return {
            winKey: 'winKey',
            versionCode: 'versionCode',
            arch: 'arch',
        };
    }
    static types() {
        return {
            winKey: 'string',
            versionCode: 'number',
            arch: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.WinVersionRequest = WinVersionRequest;
class WinVersionDataResponse extends $tea.Model {
    static names() {
        return {
            winKey: 'winKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            winKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.WinVersionDataResponse = WinVersionDataResponse;
class WinVersionResponse extends $tea.Model {
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
            data: FileVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.WinVersionResponse = WinVersionResponse;
class MacUpgradeRequest extends $tea.Model {
    static names() {
        return {
            macKey: 'macKey',
            arch: 'arch',
            versionCode: 'versionCode',
            appointVersionCode: 'appointVersionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
        };
    }
    static types() {
        return {
            macKey: 'string',
            arch: 'string',
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
exports.MacUpgradeRequest = MacUpgradeRequest;
class MacUpgradeDataResponse extends $tea.Model {
    static names() {
        return {
            macKey: 'macKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            urlPath: 'urlPath',
            urlFileSize: 'urlFileSize',
            urlFileMd5: 'urlFileMd5',
            upgradeType: 'upgradeType',
            promptUpgradeContent: 'promptUpgradeContent',
        };
    }
    static types() {
        return {
            macKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            urlPath: 'string',
            urlFileSize: 'number',
            urlFileMd5: 'string',
            upgradeType: 'number',
            promptUpgradeContent: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.MacUpgradeDataResponse = MacUpgradeDataResponse;
class MacUpgradeResponse extends $tea.Model {
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
            data: MacUpgradeDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.MacUpgradeResponse = MacUpgradeResponse;
class MacVersionRequest extends $tea.Model {
    static names() {
        return {
            macKey: 'macKey',
            versionCode: 'versionCode',
            arch: 'arch',
        };
    }
    static types() {
        return {
            macKey: 'string',
            versionCode: 'number',
            arch: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.MacVersionRequest = MacVersionRequest;
class MacVersionDataResponse extends $tea.Model {
    static names() {
        return {
            macKey: 'macKey',
            packageName: 'packageName',
            versionName: 'versionName',
            versionCode: 'versionCode',
            description: 'description',
        };
    }
    static types() {
        return {
            macKey: 'string',
            packageName: 'string',
            versionName: 'string',
            versionCode: 'number',
            description: 'string',
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.MacVersionDataResponse = MacVersionDataResponse;
class MacVersionResponse extends $tea.Model {
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
            data: MacVersionDataResponse,
        };
    }
    constructor(map) {
        super(map);
    }
}
exports.MacVersionResponse = MacVersionResponse;
class AppReportRequest extends $tea.Model {
    static names() {
        return {
            eventType: 'eventType',
            appKey: 'appKey',
            timestamp: 'timestamp',
            eventData: 'eventData',
        };
    }
    static types() {
        return {
            eventType: 'string',
            appKey: 'string',
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
            versionCode: 'versionCode',
            devModelKey: 'devModelKey',
            devKey: 'devKey',
            target: 'target',
            arch: 'arch',
            downloadVersionCode: 'downloadVersionCode',
            upgradeVersionCode: 'upgradeVersionCode',
            code: 'code',
        };
    }
    static types() {
        return {
            launchTime: 'string',
            versionCode: 'number',
            devModelKey: 'string',
            devKey: 'string',
            target: 'string',
            arch: 'string',
            downloadVersionCode: 'number',
            upgradeVersionCode: 'number',
            code: 'number',
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
    async UrlVersion(request) {
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
                let uri = "/v1/url/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/url/version`;
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
                return $tea.cast(Object.assign({}, result), new UrlVersionResponse({}));
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
    async FileVersion(request) {
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
                let uri = "/v1/file/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/file/version`;
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
                return $tea.cast(Object.assign({}, result), new FileVersionResponse({}));
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
    async ApkUpgrade(request) {
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
                let uri = "/v1/apk/upgrade";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/apk/upgrade`;
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
                return $tea.cast(Object.assign({}, result), new ApkUpgradeResponse({}));
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
    async ApkVersion(request) {
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
                let uri = "/v1/apk/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/apk/version`;
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
                return $tea.cast(Object.assign({}, result), new ApkVersionResponse({}));
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
    async ConfigurationUpgrade(request) {
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
                let uri = "/v1/configuration/upgrade";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/configuration/upgrade`;
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
                return $tea.cast(Object.assign({}, result), new ConfigurationUpgradeResponse({}));
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
    async ConfigurationVersion(request) {
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
                let uri = "/v1/configuration/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/configuration/version`;
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
                return $tea.cast(Object.assign({}, result), new ConfigurationVersionResponse({}));
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
    async TauriVersion(request) {
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
                let uri = "/v1/tauri/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/tauri/version`;
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
                return $tea.cast(Object.assign({}, result), new TauriVersionResponse({}));
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
    async ElectronVersion(request) {
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
                let uri = "/v1/electron/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/electron/version`;
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
                return $tea.cast(Object.assign({}, result), new ElectronVersionResponse({}));
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
    async LnxUpgrade(request) {
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
                let uri = "/v1/lnx/upgrade";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/lnx/upgrade`;
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
                return $tea.cast(Object.assign({}, result), new LnxUpgradeResponse({}));
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
    async LnxVersion(request) {
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
                let uri = "/v1/lnx/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/lnx/version`;
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
                return $tea.cast(Object.assign({}, result), new LnxVersionResponse({}));
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
    async WinUpgrade(request) {
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
                let uri = "/v1/win/upgrade";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/win/upgrade`;
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
                return $tea.cast(Object.assign({}, result), new WinUpgradeResponse({}));
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
    async WinVersion(request) {
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
                let uri = "/v1/win/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/win/version`;
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
                return $tea.cast(Object.assign({}, result), new WinVersionResponse({}));
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
    async MacUpgrade(request) {
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
                let uri = "/v1/mac/upgrade";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/mac/upgrade`;
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
                return $tea.cast(Object.assign({}, result), new MacUpgradeResponse({}));
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
    async MacVersion(request) {
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
                let uri = "/v1/mac/version";
                let accessKey = this._accessKey;
                let accessSecret = this._accessSecret;
                // 生成签名
                let signature = darabonba_base_typescript_1.default.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
                request_.protocol = this._protocol;
                request_.method = "POST";
                request_.pathname = `/v1/mac/version`;
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
                return $tea.cast(Object.assign({}, result), new MacVersionResponse({}));
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
    static timeRFC3339() {
        return darabonba_base_typescript_1.default.timeRFC3339();
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map