const { default: Client, Config, UrlUpgradeRequest,  AppReportRequest,
    ConfigurationUpgradeRequest,
    FileUpgradeRequest,
    TauriVersionRequest,
    UrlVersionRequest,
    AppStatisticsInfoRequest,
} = require('@toolsetlink/upgradelink-api-typescript');

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

// 测试获取URL应用版本信息
async function testGetUrlVersion() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

        // 构造请求参数
        const request = new UrlVersionRequest({
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
    } catch (error) {
        console.error('\n获取URL应用版本信息失败:', error);
    }
}

// 测试获取配置升级信息
async function testGetConfigurationUpgrade() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

        // 构造请求参数
        const request = new ConfigurationUpgradeRequest({
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

    } catch (error) {
        console.error('\n获取配置升级信息失败:', error);
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


// 测试获取tauri应用版本信息
async function testGetTauriVersion() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

        // 构造请求参数
        const request = new TauriVersionRequest({
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

    } catch (error) {
        console.error('\n获取Tauri应用版本信息失败:', error);
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
        const request = new AppReportRequest({
            eventType: 'app_start',
            appKey: 'LOYlLXNy7wV3ySuh0XgtSg',
            devModelKey: '',
            devKey: '',
            versionCode: 1,
            timestamp: Client.timeRFC3339(),
            eventData: {
                launchTime: Client.timeRFC3339(),
            }
        });

        // /* app_upgrade_download 应用升级-下载事件 */
        // const request = new AppReportRequest({
        //     eventType: 'app_upgrade_download',
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

        // /* app_upgrade_install 应用升级-升级事件 */
        // const request = new AppReportRequest({
        //     eventType: 'app_upgrade_upgrade',
        //     appKey: 'LOYlLXNy7wV3ySuh0XgtSg',
        //     devModelKey: '',
        //     devKey: '',
        //     versionCode: 1,
        //     timestamp: Tools.timeRFC3339(),
        //     eventData: {
        //         code: Enums.EVENT_TYPE_CODE_SUCCESS,
        //         upgradeVersionCode: 10,
        //     }
        // });

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



// 测试获取应用统计信息
async function testGetAppStatisticsInfo() {
    try {
        // 初始化客户端
        const config = new Config({
            accessKey:  'mui2W50H1j-OC4xD6PgQag',
            accessSecret: 'PEbdHFGC0uO_Pch7XWBQTMsFRxKPQAM2565eP8LJ3gc',
        });
        const client = new Client(config);

        // 构造请求参数
        const request = new AppStatisticsInfoRequest({
            appKey: 'kPUtUMDIjBhS48q5771pow',
        });

        // 发起请求
        const response = await client.AppStatisticsInfo(request);

        // 打印响应结果
        console.log('\n应用统计信息响应:');
        console.log(`code: ${response.code}`);
        console.log(`msg: ${response.msg}`);
        console.log('data:');
        console.log(`  yesterdayDownloadCount: ${response.data.yesterdayDownloadCount}`);
        console.log(`  totalDownloadCount: ${response.data.totalDownloadCount}`);
        console.log(`  yesterdayAppGetStrategyCount: ${response.data.yesterdayAppGetStrategyCount}`);
        console.log(`  totalAppGetStrategyCount: ${response.data.totalAppGetStrategyCount}`);
        console.log(`  yesterdayAppUpgradeCount: ${response.data.yesterdayAppUpgradeCount}`);
        console.log(`  totalAppUpgradeCount: ${response.data.totalAppUpgradeCount}`);
        console.log(`  yesterdayAppStartCount: ${response.data.yesterdayAppStartCount}`);
        console.log(`  totalAppStartCount: ${response.data.totalAppStartCount}`);
        console.log(`  downloadCount7Day: ${response.data.downloadCount7Day}`);
        console.log(`  appGetStrategyCount7Day: ${response.data.appGetStrategyCount7Day}`);
        console.log(`  appUpgradeCount7Day: ${response.data.appUpgradeCount7Day}`);
        console.log(`  appStartCount7Day: ${response.data.appStartCount7Day}`);
    } catch (error) {
        console.error('\n获取应用统计信息失败:', error);
    }
}


// 执行测试
testGetUrlUpgrade();
testGetUrlVersion();
testGetTauriVersion();
testGetConfigurationUpgrade();
testGetFileUpgrade();
testPostAppReport();
testGetAppStatisticsInfo();