import * as $tea from '@alicloud/tea-typescript';
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
export default class Client {
    _endpoint: string;
    _accessKeyId: string;
    _accessKeySecret: string;
    constructor(accessKeyId: string, accessKeySecret: string);
    getUrlUpgrade(request: UrlUpgradeRequest): Promise<UrlUpgradeResponse>;
    getFileUpgrade(request: FileUpgradeRequest): Promise<FileUpgradeResponse>;
}
