/**
 * 入口文件
 */

import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import xhr from './xhr'

/**
 * 主入口函数
 * @param config 请求体配置
 */
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

/**
 * 调用请求前，对请求体配置做处理
 * @param config 请求体配置
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

/**
 * 对url做参数处理
 * @param config 请求体配置
 */
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
