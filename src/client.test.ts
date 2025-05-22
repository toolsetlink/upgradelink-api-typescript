import Client, {UrlUpgradeRequest, FileUpgradeRequest, Config, AppReportRequest} from './client';
import {Enums} from "./enums";
import Tools from "./tools"; // 替换为实际文件路径

// 测试获取URL升级信息
async function testGetUrlUpgrade() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

        // 构造请求参数
        const request = new UrlUpgradeRequest({
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
    } catch (error) {
        console.error('\n获取URL升级信息失败:', error);
    }
}

// 测试获取文件升级信息
async function testGetFileUpgrade() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

        // 构造请求参数
        const request = new FileUpgradeRequest({
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
    } catch (error) {
        console.error('\n获取文件升级信息失败:', error);
    }
}


// 测试事件上报信息
async function testPostAppReport() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

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
        const request = new AppReportRequest({
            eventType: Enums.EVENT_TYPE_APP_UPGRADE_UPGRADE,
            appKey: 'LOYlLXNy7wV3ySuh0XgtSg',
            devModelKey: '',
            devKey: '',
            versionCode: 1,
            timestamp: Tools.timeRFC3339(),
            eventData: {
                code: Enums.EVENT_TYPE_CODE_SUCCESS,
                upgradeVersionCode: 10,
            }
        });

        // 发起请求
        const response = await client.AppReport(request);

        // 打印响应结果
        console.log('\n事件上报信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
    } catch (error) {
        console.error('\n事件上报信息失败:', error);
    }
}

// 执行测试
testGetUrlUpgrade();
testGetFileUpgrade();
testPostAppReport();