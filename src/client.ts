// This file is auto-generated, don't edit it
import Util from '@alicloud/tea-util';
import DarabonbaBase from '@toolsetlink/darabonba-base-typescript';
import * as $tea from '@alicloud/tea-typescript';

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


export default class Client {
  _endpoint: string;
  _accessKeyId: string;
  _accessKeySecret: string;

  constructor(accessKeyId: string, accessKeySecret: string) {
    this._endpoint = "api.upgrade.toolsetlink.com";
    this._accessKeyId = accessKeyId;
    this._accessKeySecret = accessKeySecret;
  }

  async getUrlUpgrade(request: UrlUpgradeRequest): Promise<UrlUpgradeResponse> {
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
        let accessKeySecret = this._accessKeySecret;
        let accessKeyId = this._accessKeyId;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessKeySecret, timestamp, uri);
        request_.protocol = "HTTP";
        request_.method = "POST";
        request_.pathname = `/v1/url/upgrade`;
        request_.headers = {
          host: this._endpoint,
          'content-type': "application/json",
          'x-timestamp': timestamp,
          'x-nonce': nonce,
          'x-accesskey': accessKeyId,
          'x-signature': signature,
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
            trace_id: `${result["trace_id"]}`,
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

  async getFileUpgrade(request: FileUpgradeRequest): Promise<FileUpgradeResponse> {
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
        let accessKeySecret = this._accessKeySecret;
        let accessKeyId = this._accessKeyId;
        // 生成签名
        let signature = DarabonbaBase.generateSignature(bodyStr, nonce, accessKeySecret, timestamp, uri);
        request_.protocol = "HTTP";
        request_.method = "POST";
        request_.pathname = `/v1/file/upgrade`;
        request_.headers = {
          host: this._endpoint,
          'content-type': "application/json",
          'x-timestamp': timestamp,
          'x-nonce': nonce,
          'x-accesskey': accessKeyId,
          'x-signature': signature,
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
            trace_id: `${result["trace_id"]}`,
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


}
