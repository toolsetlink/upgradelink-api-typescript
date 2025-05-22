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
export declare class AppReportRequest extends $tea.Model {
    eventType: string;
    devModelKey?: string;
    devKey?: string;
    appKey: string;
    versionCode: number;
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
    code?: number;
    downloadVersionCode?: number;
    upgradeVersionCode?: number;
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
    FileUpgrade(request: FileUpgradeRequest): Promise<FileUpgradeResponse>;
    AppReport(request: AppReportRequest): Promise<AppReportResponse>;
}
