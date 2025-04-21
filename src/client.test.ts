import Client, {UrlUpgradeRequest, FileUpgradeRequest, Config} from './client'; // 替换为实际文件路径

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
        const response = await client.getUrlUpgrade(request);

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
        const response = await client.getFileUpgrade(request);

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

// 执行测试
testGetUrlUpgrade();
testGetFileUpgrade();