import * as $tea from '@alicloud/tea-typescript';
export declare class Config extends $tea.Model {
    accessKey: string;
    accessSecret: string;
    protocol: string;
    endpoint: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UrlUpgradeRequest extends $tea.Model {
    urlKey: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UrlUpgradeDataResponse extends $tea.Model {
    urlKey: string;
    versionName: string;
    versionCode: number;
    urlPath: string;
    upgradeType: number;
    promptUpgradeContent: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UrlUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: UrlUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UrlVersionRequest extends $tea.Model {
    urlKey: string;
    versionCode: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UrlVersionDataResponse extends $tea.Model {
    urlKey: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UrlVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: UrlVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class FileUpgradeRequest extends $tea.Model {
    fileKey: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class FileUpgradeDataResponse extends $tea.Model {
    fileKey: string;
    versionName: string;
    versionCode: number;
    urlPath: string;
    upgradeType: number;
    promptUpgradeContent: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class FileUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: FileUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class FileVersionRequest extends $tea.Model {
    fileKey: string;
    versionCode: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class FileVersionDataResponse extends $tea.Model {
    fileKey: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class FileVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: FileVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ApkUpgradeRequest extends $tea.Model {
    apkKey: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ApkUpgradeDataResponse extends $tea.Model {
    apkKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    urlPath: string;
    urlFileSize: number;
    urlFileMd5: string;
    upgradeType: number;
    promptUpgradeContent: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ApkUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: ApkUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ApkVersionRequest extends $tea.Model {
    apkKey: string;
    versionCode: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ApkVersionDataResponse extends $tea.Model {
    apkKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ApkVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: ApkVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConfigurationUpgradeRequest extends $tea.Model {
    configurationKey: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConfigurationUpgradeDataResponse extends $tea.Model {
    configurationKey: string;
    versionName: string;
    versionCode: number;
    upgradeType: number;
    promptUpgradeContent: string;
    content: any;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConfigurationUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: ConfigurationUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConfigurationVersionRequest extends $tea.Model {
    configurationKey: string;
    versionCode: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConfigurationVersionDataResponse extends $tea.Model {
    configurationKey: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConfigurationVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: ConfigurationVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TauriVersionRequest extends $tea.Model {
    tauriKey: string;
    versionName: string;
    target: string;
    arch: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TauriVersionDataResponse extends $tea.Model {
    tauriKey: string;
    versionName: string;
    versionCode: number;
    target: string;
    arch: string;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TauriVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: TauriVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ElectronVersionRequest extends $tea.Model {
    electronKey: string;
    versionName: string;
    platform: string;
    arch: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ElectronVersionDataResponse extends $tea.Model {
    electronKey: string;
    versionName: string;
    versionCode: number;
    platform: string;
    arch: string;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ElectronVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: ElectronVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LnxUpgradeRequest extends $tea.Model {
    lnxKey: string;
    arch: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LnxUpgradeDataResponse extends $tea.Model {
    lnxKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    urlPath: string;
    urlFileSize: number;
    urlFileMd5: string;
    upgradeType: number;
    promptUpgradeContent: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LnxUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: LnxUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LnxVersionRequest extends $tea.Model {
    lnxKey: string;
    arch: string;
    versionCode: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LnxVersionDataResponse extends $tea.Model {
    lnxKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LnxVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: LnxVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class WinUpgradeRequest extends $tea.Model {
    winKey: string;
    arch: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class WinUpgradeDataResponse extends $tea.Model {
    winKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    urlPath: string;
    urlFileSize: number;
    urlFileMd5: string;
    upgradeType: number;
    promptUpgradeContent: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class WinUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: WinUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class WinVersionRequest extends $tea.Model {
    winKey: string;
    versionCode: number;
    arch: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class WinVersionDataResponse extends $tea.Model {
    winKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class WinVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: FileVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class MacUpgradeRequest extends $tea.Model {
    macKey: string;
    arch: string;
    versionCode: number;
    appointVersionCode: number;
    devModelKey: string;
    devKey: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class MacUpgradeDataResponse extends $tea.Model {
    macKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    urlPath: string;
    urlFileSize: number;
    urlFileMd5: string;
    upgradeType: number;
    promptUpgradeContent: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class MacUpgradeResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: MacUpgradeDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class MacVersionRequest extends $tea.Model {
    macKey: string;
    versionCode: number;
    arch: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class MacVersionDataResponse extends $tea.Model {
    macKey: string;
    packageName: string;
    versionName: string;
    versionCode: number;
    description: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class MacVersionResponse extends $tea.Model {
    code: number;
    msg: string;
    traceId: string;
    data: MacVersionDataResponse;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class AppReportRequest extends $tea.Model {
    eventType: string;
    appKey: string;
    timestamp?: string;
    eventData: AppReportRequestEventData;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class AppReportResponse extends $tea.Model {
    code: number;
    msg: string;
    docs: string;
    traceId: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class AppReportRequestEventData extends $tea.Model {
    launchTime?: string;
    versionCode: number;
    devModelKey?: string;
    devKey?: string;
    target?: string;
    arch?: string;
    downloadVersionCode?: number;
    upgradeVersionCode?: number;
    code?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export default class Client {
    _accessKey: string;
    _accessSecret: string;
    _protocol: string;
    _endpoint: string;
    constructor(config: Config);
    UrlUpgrade(request: UrlUpgradeRequest): Promise<UrlUpgradeResponse>;
    UrlVersion(request: UrlVersionRequest): Promise<UrlVersionResponse>;
    FileUpgrade(request: FileUpgradeRequest): Promise<FileUpgradeResponse>;
    FileVersion(request: FileVersionRequest): Promise<FileVersionResponse>;
    ApkUpgrade(request: ApkUpgradeRequest): Promise<ApkUpgradeResponse>;
    ApkVersion(request: ApkVersionRequest): Promise<ApkVersionResponse>;
    ConfigurationUpgrade(request: ConfigurationUpgradeRequest): Promise<ConfigurationUpgradeResponse>;
    ConfigurationVersion(request: ConfigurationVersionRequest): Promise<ConfigurationVersionResponse>;
    TauriVersion(request: TauriVersionRequest): Promise<TauriVersionResponse>;
    ElectronVersion(request: ElectronVersionRequest): Promise<ElectronVersionResponse>;
    LnxUpgrade(request: LnxUpgradeRequest): Promise<LnxUpgradeResponse>;
    LnxVersion(request: LnxVersionRequest): Promise<LnxVersionResponse>;
    WinUpgrade(request: WinUpgradeRequest): Promise<WinUpgradeResponse>;
    WinVersion(request: WinVersionRequest): Promise<WinVersionResponse>;
    MacUpgrade(request: MacUpgradeRequest): Promise<MacUpgradeResponse>;
    MacVersion(request: MacVersionRequest): Promise<MacVersionResponse>;
    AppReport(request: AppReportRequest): Promise<AppReportResponse>;
}
