// This file is auto-generated, don't edit it
import Util from '@alicloud/tea-util';
import DarabonbaBase from '@toolsetlink/darabonba-base-typescript';
import * as $tea from '@alicloud/tea-typescript';

export class Config extends $tea.Model {
  accessKey: string;
  accessSecret: string;
  protocol: string;
  endpoint: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      accessSecret: 'accessSecret',
      protocol: 'protocol',
      endpoint: 'endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessSecret: 'string',
      protocol: 'string',
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlUpgradeRequest extends $tea.Model {
  urlKey: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      urlKey: 'urlKey',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlKey: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlUpgradeDataResponse extends $tea.Model {
  urlKey: string;
  versionName: string;
  versionCode: number;
  urlPath: string;
  upgradeType: number;
  promptUpgradeContent: string;
  static names(): { [key: string]: string } {
    return {
      urlKey: 'urlKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      urlPath: 'urlPath',
      upgradeType: 'upgradeType',
      promptUpgradeContent: 'promptUpgradeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      urlPath: 'string',
      upgradeType: 'number',
      promptUpgradeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: UrlUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: UrlUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlVersionRequest extends $tea.Model {
  urlKey: string;
  versionCode: number;
  static names(): { [key: string]: string } {
    return {
      urlKey: 'urlKey',
      versionCode: 'versionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlKey: 'string',
      versionCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlVersionDataResponse extends $tea.Model {
  urlKey: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      urlKey: 'urlKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: UrlVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: UrlVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUpgradeRequest extends $tea.Model {
  fileKey: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUpgradeDataResponse extends $tea.Model {
  fileKey: string;
  versionName: string;
  versionCode: number;
  urlPath: string;
  upgradeType: number;
  promptUpgradeContent: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      urlPath: 'urlPath',
      upgradeType: 'upgradeType',
      promptUpgradeContent: 'promptUpgradeContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      urlPath: 'string',
      upgradeType: 'number',
      promptUpgradeContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: FileUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: FileUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileVersionRequest extends $tea.Model {
  fileKey: string;
  versionCode: number;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
      versionCode: 'versionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      versionCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileVersionDataResponse extends $tea.Model {
  fileKey: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: FileVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: FileVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApkUpgradeRequest extends $tea.Model {
  apkKey: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      apkKey: 'apkKey',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkKey: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApkUpgradeDataResponse extends $tea.Model {
  apkKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  urlPath: string;
  urlFileSize: number;
  urlFileMd5: string;
  upgradeType: number;
  promptUpgradeContent: string;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApkUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: ApkUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: ApkUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApkVersionRequest extends $tea.Model {
  apkKey: string;
  versionCode: number;
  static names(): { [key: string]: string } {
    return {
      apkKey: 'apkKey',
      versionCode: 'versionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkKey: 'string',
      versionCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApkVersionDataResponse extends $tea.Model {
  apkKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      apkKey: 'apkKey',
      packageName: 'packageName',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkKey: 'string',
      packageName: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApkVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: ApkVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: ApkVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationUpgradeRequest extends $tea.Model {
  configurationKey: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      configurationKey: 'configurationKey',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationKey: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationUpgradeDataResponse extends $tea.Model {
  configurationKey: string;
  versionName: string;
  versionCode: number;
  upgradeType: number;
  promptUpgradeContent: string;
  content: any;
  static names(): { [key: string]: string } {
    return {
      configurationKey: 'configurationKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      upgradeType: 'upgradeType',
      promptUpgradeContent: 'promptUpgradeContent',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      upgradeType: 'number',
      promptUpgradeContent: 'string',
      content: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: ConfigurationUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: ConfigurationUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationVersionRequest extends $tea.Model {
  configurationKey: string;
  versionCode: number;
  static names(): { [key: string]: string } {
    return {
      configurationKey: 'configurationKey',
      versionCode: 'versionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationKey: 'string',
      versionCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationVersionDataResponse extends $tea.Model {
  configurationKey: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      configurationKey: 'configurationKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigurationVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: ConfigurationVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: ConfigurationVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TauriVersionRequest extends $tea.Model {
  tauriKey: string;
  versionName: string;
  target: string;
  arch: string;
  static names(): { [key: string]: string } {
    return {
      tauriKey: 'tauriKey',
      versionName: 'versionName',
      target: 'target',
      arch: 'arch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tauriKey: 'string',
      versionName: 'string',
      target: 'string',
      arch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TauriVersionDataResponse extends $tea.Model {
  tauriKey: string;
  versionName: string;
  versionCode: number;
  target: string;
  arch: string;
  description: string;
  static names(): { [key: string]: string } {
    return {
      tauriKey: 'tauriKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      target: 'target',
      arch: 'arch',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tauriKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      target: 'string',
      arch: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TauriVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: TauriVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: TauriVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectronVersionRequest extends $tea.Model {
  electronKey: string;
  versionName: string;
  platform: string;
  arch: string;
  static names(): { [key: string]: string } {
    return {
      electronKey: 'electronKey',
      versionName: 'versionName',
      platform: 'platform',
      arch: 'arch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      electronKey: 'string',
      versionName: 'string',
      platform: 'string',
      arch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectronVersionDataResponse extends $tea.Model {
  electronKey: string;
  versionName: string;
  versionCode: number;
  platform: string;
  arch: string;
  description: string;
  static names(): { [key: string]: string } {
    return {
      electronKey: 'electronKey',
      versionName: 'versionName',
      versionCode: 'versionCode',
      platform: 'platform',
      arch: 'arch',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      electronKey: 'string',
      versionName: 'string',
      versionCode: 'number',
      platform: 'string',
      arch: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectronVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: ElectronVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: ElectronVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LnxUpgradeRequest extends $tea.Model {
  lnxKey: string;
  arch: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      lnxKey: 'lnxKey',
      arch: 'arch',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lnxKey: 'string',
      arch: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LnxUpgradeDataResponse extends $tea.Model {
  lnxKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  urlPath: string;
  urlFileSize: number;
  urlFileMd5: string;
  upgradeType: number;
  promptUpgradeContent: string;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LnxUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: LnxUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: LnxUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LnxVersionRequest extends $tea.Model {
  lnxKey: string;
  arch: string;
  versionCode: number;
  static names(): { [key: string]: string } {
    return {
      lnxKey: 'lnxKey',
      arch: 'arch',
      versionCode: 'versionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lnxKey: 'string',
      arch: 'string',
      versionCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LnxVersionDataResponse extends $tea.Model {
  lnxKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      lnxKey: 'lnxKey',
      packageName: 'packageName',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lnxKey: 'string',
      packageName: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LnxVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: LnxVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: LnxVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WinUpgradeRequest extends $tea.Model {
  winKey: string;
  arch: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      winKey: 'winKey',
      arch: 'arch',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      winKey: 'string',
      arch: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WinUpgradeDataResponse extends $tea.Model {
  winKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  urlPath: string;
  urlFileSize: number;
  urlFileMd5: string;
  upgradeType: number;
  promptUpgradeContent: string;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WinUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: WinUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: WinUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WinVersionRequest extends $tea.Model {
  winKey: string;
  versionCode: number;
  arch: string;
  static names(): { [key: string]: string } {
    return {
      winKey: 'winKey',
      versionCode: 'versionCode',
      arch: 'arch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      winKey: 'string',
      versionCode: 'number',
      arch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WinVersionDataResponse extends $tea.Model {
  winKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      winKey: 'winKey',
      packageName: 'packageName',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      winKey: 'string',
      packageName: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WinVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: FileVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: FileVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MacUpgradeRequest extends $tea.Model {
  macKey: string;
  arch: string;
  versionCode: number;
  appointVersionCode: number;
  devModelKey: string;
  devKey: string;
  static names(): { [key: string]: string } {
    return {
      macKey: 'macKey',
      arch: 'arch',
      versionCode: 'versionCode',
      appointVersionCode: 'appointVersionCode',
      devModelKey: 'devModelKey',
      devKey: 'devKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      macKey: 'string',
      arch: 'string',
      versionCode: 'number',
      appointVersionCode: 'number',
      devModelKey: 'string',
      devKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MacUpgradeDataResponse extends $tea.Model {
  macKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  urlPath: string;
  urlFileSize: number;
  urlFileMd5: string;
  upgradeType: number;
  promptUpgradeContent: string;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MacUpgradeResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: MacUpgradeDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: MacUpgradeDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MacVersionRequest extends $tea.Model {
  macKey: string;
  versionCode: number;
  arch: string;
  static names(): { [key: string]: string } {
    return {
      macKey: 'macKey',
      versionCode: 'versionCode',
      arch: 'arch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      macKey: 'string',
      versionCode: 'number',
      arch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MacVersionDataResponse extends $tea.Model {
  macKey: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  description: string;
  static names(): { [key: string]: string } {
    return {
      macKey: 'macKey',
      packageName: 'packageName',
      versionName: 'versionName',
      versionCode: 'versionCode',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      macKey: 'string',
      packageName: 'string',
      versionName: 'string',
      versionCode: 'number',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MacVersionResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: MacVersionDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: MacVersionDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppReportRequest extends $tea.Model {
  eventType: string;
  appKey: string;
  timestamp?: string;
  eventData: AppReportRequestEventData;
  static names(): { [key: string]: string } {
    return {
      eventType: 'eventType',
      appKey: 'appKey',
      timestamp: 'timestamp',
      eventData: 'eventData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      appKey: 'string',
      timestamp: 'string',
      eventData: AppReportRequestEventData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppReportResponse extends $tea.Model {
  code: number;
  msg: string;
  docs: string;
  traceId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      docs: 'docs',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      docs: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStatisticsInfoRequest extends $tea.Model {
  appKey: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'appKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadCount7DayInfo extends $tea.Model {
  timeData: string;
  data: number;
  static names(): { [key: string]: string } {
    return {
      timeData: 'timeData',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeData: 'string',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGetStrategyCount7DayInfo extends $tea.Model {
  timeData: string;
  data: number;
  static names(): { [key: string]: string } {
    return {
      timeData: 'timeData',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeData: 'string',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppUpgradeCount7DayInfo extends $tea.Model {
  timeData: string;
  data: number;
  static names(): { [key: string]: string } {
    return {
      timeData: 'timeData',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeData: 'string',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStartCount7DayInfo extends $tea.Model {
  timeData: string;
  data: number;
  static names(): { [key: string]: string } {
    return {
      timeData: 'timeData',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeData: 'string',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStatisticsInfoDataResponse extends $tea.Model {
  yesterdayDownloadCount: number;
  totalDownloadCount: number;
  yesterdayAppGetStrategyCount: number;
  totalAppGetStrategyCount: number;
  yesterdayAppUpgradeCount: number;
  totalAppUpgradeCount: number;
  yesterdayAppStartCount: number;
  totalAppStartCount: number;
  downloadCount7Day: DownloadCount7DayInfo[];
  appGetStrategyCount7Day: AppGetStrategyCount7DayInfo[];
  appUpgradeCount7Day: AppUpgradeCount7DayInfo[];
  appStartCount7Day: AppStartCount7DayInfo[];
  static names(): { [key: string]: string } {
    return {
      yesterdayDownloadCount: 'yesterdayDownloadCount',
      totalDownloadCount: 'totalDownloadCount',
      yesterdayAppGetStrategyCount: 'yesterdayAppGetStrategyCount',
      totalAppGetStrategyCount: 'totalAppGetStrategyCount',
      yesterdayAppUpgradeCount: 'yesterdayAppUpgradeCount',
      totalAppUpgradeCount: 'totalAppUpgradeCount',
      yesterdayAppStartCount: 'yesterdayAppStartCount',
      totalAppStartCount: 'totalAppStartCount',
      downloadCount7Day: 'downloadCount7Day',
      appGetStrategyCount7Day: 'appGetStrategyCount7Day',
      appUpgradeCount7Day: 'appUpgradeCount7Day',
      appStartCount7Day: 'appStartCount7Day',
    };
  }

  static types(): { [key: string]: any } {
    return {
      yesterdayDownloadCount: 'number',
      totalDownloadCount: 'number',
      yesterdayAppGetStrategyCount: 'number',
      totalAppGetStrategyCount: 'number',
      yesterdayAppUpgradeCount: 'number',
      totalAppUpgradeCount: 'number',
      yesterdayAppStartCount: 'number',
      totalAppStartCount: 'number',
      downloadCount7Day: { 'type': 'array', 'itemType': DownloadCount7DayInfo },
      appGetStrategyCount7Day: { 'type': 'array', 'itemType': AppGetStrategyCount7DayInfo },
      appUpgradeCount7Day: { 'type': 'array', 'itemType': AppUpgradeCount7DayInfo },
      appStartCount7Day: { 'type': 'array', 'itemType': AppStartCount7DayInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppStatisticsInfoResponse extends $tea.Model {
  code: number;
  msg: string;
  traceId: string;
  data: AppStatisticsInfoDataResponse;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      traceId: 'traceId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      traceId: 'string',
      data: AppStatisticsInfoDataResponse,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppReportRequestEventData extends $tea.Model {
  launchTime?: string;
  versionCode: number;
  devModelKey?: string;
  devKey?: string;
  target?: string;
  arch?: string;
  downloadVersionCode?: number;
  upgradeVersionCode?: number;
  code?: number;
  static names(): { [key: string]: string } {
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

  static types(): { [key: string]: any } {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client {
  _accessKey: string;
  _accessSecret: string;
  _protocol: string;
  _endpoint: string;

  constructor(config: Config) {
    this._accessKey = config.accessKey;
    this._accessSecret = config.accessSecret;
    if (Util.equalString(config.protocol, "HTTPS")) {
      this._protocol = "HTTPS";
    } else {
      this._protocol = "HTTP";
    }

    if (Util.empty(config.endpoint)) {
      this._endpoint = "api.upgrade.toolsetlink.com";
    } else {
      this._endpoint = config.endpoint;
    }

  }

  async UrlUpgrade(request: UrlUpgradeRequest): Promise<UrlUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/url/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<UrlUpgradeResponse>({
          ...result,
        }, new UrlUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async UrlVersion(request: UrlVersionRequest): Promise<UrlVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/url/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<UrlVersionResponse>({
          ...result,
        }, new UrlVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async FileUpgrade(request: FileUpgradeRequest): Promise<FileUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/file/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<FileUpgradeResponse>({
          ...result,
        }, new FileUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async FileVersion(request: FileVersionRequest): Promise<FileVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/file/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<FileVersionResponse>({
          ...result,
        }, new FileVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async ApkUpgrade(request: ApkUpgradeRequest): Promise<ApkUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/apk/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<ApkUpgradeResponse>({
          ...result,
        }, new ApkUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async ApkVersion(request: ApkVersionRequest): Promise<ApkVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/apk/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<ApkVersionResponse>({
          ...result,
        }, new ApkVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async ConfigurationUpgrade(request: ConfigurationUpgradeRequest): Promise<ConfigurationUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/configuration/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<ConfigurationUpgradeResponse>({
          ...result,
        }, new ConfigurationUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async ConfigurationVersion(request: ConfigurationVersionRequest): Promise<ConfigurationVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/configuration/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<ConfigurationVersionResponse>({
          ...result,
        }, new ConfigurationVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async TauriVersion(request: TauriVersionRequest): Promise<TauriVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/tauri/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<TauriVersionResponse>({
          ...result,
        }, new TauriVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async ElectronVersion(request: ElectronVersionRequest): Promise<ElectronVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/electron/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<ElectronVersionResponse>({
          ...result,
        }, new ElectronVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async LnxUpgrade(request: LnxUpgradeRequest): Promise<LnxUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/lnx/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<LnxUpgradeResponse>({
          ...result,
        }, new LnxUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async LnxVersion(request: LnxVersionRequest): Promise<LnxVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/lnx/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<LnxVersionResponse>({
          ...result,
        }, new LnxVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async WinUpgrade(request: WinUpgradeRequest): Promise<WinUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/win/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<WinUpgradeResponse>({
          ...result,
        }, new WinUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async WinVersion(request: WinVersionRequest): Promise<WinVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/win/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<WinVersionResponse>({
          ...result,
        }, new WinVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async MacUpgrade(request: MacUpgradeRequest): Promise<MacUpgradeResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/mac/upgrade";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<MacUpgradeResponse>({
          ...result,
        }, new MacUpgradeResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async MacVersion(request: MacVersionRequest): Promise<MacVersionResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/mac/version";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<MacVersionResponse>({
          ...result,
        }, new MacVersionResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async AppReport(request: AppReportRequest): Promise<AppReportResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = Util.toJSONString(request);
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = "/v1/app/report";
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<AppReportResponse>({
          ...result,
        }, new AppReportResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  async AppStatisticsInfo(request: AppStatisticsInfoRequest): Promise<AppStatisticsInfoResponse> {
    let _runtime: { [key: string]: any } = {
      timeout: 10000,
      // 10s 的过期时间
    }

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
        let bodyStr = "";
        // 生成请求参数
        let timestamp = DarabonbaBase.timeRFC3339();
        let nonce = DarabonbaBase.generateNonce();
        let uri = `/v1/app/statistics/info?appKey=${request.appKey}`;
        let accessKey = this._accessKey;
        let accessSecret = this._accessSecret;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessSecret, timestamp, uri);
        request_.protocol = this._protocol;
        request_.method = "GET";
        request_.pathname = `/v1/app/statistics/info`;
        request_.query = {
          appKey: request.appKey,
        };
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

        let result = Util.assertAsMap(await Util.readAsJSON(response_.body));
        if (!Util.equalNumber(response_.statusCode, 200)) {
          throw $tea.newError({
            statusCode: `${response_.statusCode}`,
            code: `${result["code"]}`,
            message: `${result["msg"]}`,
            docs: `${result["docs"]}`,
            traceId: `${result["traceId"]}`,
          });
        }

        return $tea.cast<AppStatisticsInfoResponse>({
          ...result,
        }, new AppStatisticsInfoResponse({}));
      } catch (ex) {
        if ($tea.isRetryable(ex)) {
          continue;
        }
        throw ex;
      }
    }

    throw $tea.newUnretryableError(_lastRequest);
  }

  static timeRFC3339(): string {
    return DarabonbaBase.timeRFC3339();
  }

}
