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
const client_1 = __importStar(require("./client"));
const enums_1 = require("./enums");
const tools_1 = __importDefault(require("./tools")); // 替换为实际文件路径
// 测试获取URL升级信息
async function testGetUrlUpgrade() {
    try {
        // 初始化客户端
        const config = new client_1.Config({
            accessKey: 'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new client_1.default(config);
        // 构造请求参数
        const request = new client_1.UrlUpgradeRequest({
            urlKey: 'OpggWISrLVRFa5y04LzkwA',
            versionCode: 1,
            appointVersionCode: 0,
            devModelKey: '',
            devKey: ''
        });
        // 发起请求
        const response = await client.UrlUpgrade(request);
        // 打印响应结果
        console.log('\nURL升级信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
        console.log('data:');
        console.log(`  urlKey: ${response.data.urlKey}`);
        console.log(`  versionName: ${response.data.versionName}`);
        console.log(`  versionCode: ${response.data.versionCode}`);
        console.log(`  urlPath: ${response.data.urlPath}`);
        console.log(`  upgradeType: ${response.data.upgradeType}`);
        console.log(`  promptUpgradeContent: ${response.data.promptUpgradeContent}`);
    }
    catch (error) {
        console.error('\n获取URL升级信息失败:', error);
    }
}
// 测试获取URL应用版本信息
async function testGetUrlVersion() {
    try {
        // 初始化客户端
        const config = new client_1.Config({
            accessKey: 'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new client_1.default(config);
        // 构造请求参数
        const request = new client_1.UrlVersionRequest({
            urlKey: 'OpggWISrLVRFa5y04LzkwA',
            versionCode: 110,
            appointVersionCode: 0,
            devModelKey: '',
            devKey: ''
        });
        // 发起请求
        const response = await client.UrlVersion(request);
        // 打印响应结果
        console.log('\nURL应用版本信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
        console.log('data:');
        console.log(`  urlKey: ${response.data.urlKey}`);
        console.log(`  versionName: ${response.data.versionName}`);
        console.log(`  versionCode: ${response.data.versionCode}`);
        console.log(`  description: ${response.data.description}`);
    }
    catch (error) {
        console.error('\n获取URL应用版本信息失败:', error);
    }
}
// 测试获取配置升级信息
async function testGetConfigurationUpgrade() {
    try {
        // 初始化客户端
        const config = new client_1.Config({
            accessKey: 'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new client_1.default(config);
        // 构造请求参数
        const request = new client_1.ConfigurationUpgradeRequest({
            configurationKey: 'q1hfB1VUQaK9VksTZGPU1Q',
            versionCode: 1,
            appointVersionCode: 0,
            devModelKey: '',
            devKey: ''
        });
        // 发起请求
        const response = await client.ConfigurationUpgrade(request);
        // 打印响应结果
        console.log('\nURL升级信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
        console.log('data:');
        console.log(`  configurationKey: ${response.data.configurationKey}`);
        console.log(`  versionName: ${response.data.versionName}`);
        console.log(`  versionCode: ${response.data.versionCode}`);
        console.log(`  upgradeType: ${response.data.upgradeType}`);
        console.log(`  promptUpgradeContent: ${response.data.promptUpgradeContent}`);
        console.log(`  content: ${response.data.content}`);
        console.log(`  content.appName: ${response.data.content["appName"]}`);
    }
    catch (error) {
        console.error('\n获取配置升级信息失败:', error);
    }
}
// 测试获取文件升级信息
async function testGetFileUpgrade() {
    try {
        // 初始化客户端
        const config = new client_1.Config({
            accessKey: 'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new client_1.default(config);
        // 构造请求参数
        const request = new client_1.FileUpgradeRequest({
            fileKey: 'LOYlLXNy7wV3ySuh0XgtSg',
            versionCode: 1,
            appointVersionCode: 0,
            devModelKey: '',
            devKey: ''
        });
        // 发起请求
        const response = await client.FileUpgrade(request);
        // 打印响应结果
        console.log('\n文件升级信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
        console.log('data:');
        console.log(`  fileKey: ${response.data.fileKey}`);
        console.log(`  versionName: ${response.data.versionName}`);
        console.log(`  versionCode: ${response.data.versionCode}`);
        console.log(`  urlPath: ${response.data.urlPath}`);
        console.log(`  upgradeType: ${response.data.upgradeType}`);
        console.log(`  promptUpgradeContent: ${response.data.promptUpgradeContent}`);
    }
    catch (error) {
        console.error('\n获取文件升级信息失败:', error);
    }
}
// 测试获取tauri应用版本信息
async function testGetTauriVersion() {
    try {
        // 初始化客户端
        const config = new client_1.Config({
            accessKey: 'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new client_1.default(config);
        // 构造请求参数
        const request = new client_1.TauriVersionRequest({
            tauriKey: 'a0jtz0HUwL66r7gCGvbMKQ',
            versionName: "0.1.30",
            target: "linux",
            arch: "x86_64",
        });
        // 发起请求
        const response = await client.TauriVersion(request);
        // 打印响应结果
        console.log('\nTauri应用版本信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
        console.log('data:');
        console.log(`  tauriKey: ${response.data.tauriKey}`);
        console.log(`  versionName: ${response.data.versionName}`);
        console.log(`  versionCode: ${response.data.versionCode}`);
        console.log(`  description: ${response.data.description}`);
    }
    catch (error) {
        console.error('\n获取Tauri应用版本信息失败:', error);
    }
}
// 测试事件上报信息
async function testPostAppReport() {
    try {
        // 初始化客户端
        const config = new client_1.Config({
            accessKey: 'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new client_1.default(config);
        // 构造请求参数
        /* app_start 应用-启动事件 */
        // const request = new AppReportRequest({
        //     eventType: Enums.EVENT_TYPE_APP_START,
        //     appKey: 'LOYlLXNy7wV3ySuh0XgtSg',
        //     devModelKey: '',
        //     devKey: '',
        //     versionCode: 1,
        //     timestamp: Tools.timeRFC3339(),
        //     eventData: {
        //         launchTime: Tools.timeRFC3339(),
        //     }
        // });
        /* app_upgrade_download 应用升级-下载事件 */
        // const request = new AppReportRequest({
        //     eventType: Enums.EVENT_TYPE_APP_UPGRADE_DOWNLOAD,
        //     appKey: 'LOYlLXNy7wV3ySuh0XgtSg',
        //     devModelKey: '',
        //     devKey: '',
        //     versionCode: 1,
        //     timestamp: Tools.timeRFC3339(),
        //     eventData: {
        //         code: Enums.EVENT_TYPE_CODE_SUCCESS,
        //         downloadVersionCode: 10,
        //     }
        // });
        /* app_upgrade_install 应用升级-升级事件 */
        const request = new client_1.AppReportRequest({
            eventType: enums_1.Enums.EVENT_TYPE_APP_UPGRADE_UPGRADE,
            appKey: 'LOYlLXNy7wV3ySuh0XgtSg',
            devModelKey: '',
            devKey: '',
            versionCode: 1,
            timestamp: tools_1.default.timeRFC3339(),
            eventData: {
                code: enums_1.Enums.EVENT_TYPE_CODE_SUCCESS,
                upgradeVersionCode: 10,
            }
        });
        // 发起请求
        const response = await client.AppReport(request);
        // 打印响应结果
        console.log('\n事件上报信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
    }
    catch (error) {
        console.error('\n事件上报信息失败:', error);
    }
}
// 执行测试
testGetUrlUpgrade();
testGetUrlVersion();
testGetTauriVersion();
testGetConfigurationUpgrade();
testGetFileUpgrade();
testPostAppReport();
//# sourceMappingURL=client.test.js.map