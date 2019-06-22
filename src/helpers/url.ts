/*
 * 处理url的工具
 */
import { isPlainObject, isDate } from './util'

/**
 * encode字符串
 * @param val 待处理字符串
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+') // 约定空格变加号
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * 处理get请求中url的params参数的拼接
 * @param url 待处理url
 * @param params get请求所带参数
 */
export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url
  }
  // 键值对数组存放参数
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    // 参数可能存在数组，我们把所有情况统一成数组存储
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    // 再对值进行一个判断，可能还存在日期类型与对象类型
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  // 把parts数组中的键值对拼接成参数字符串
  let serializedParams = parts.join('&')

  // 把参数字符串拼接到url后面
  if (serializedParams) {
    // 规避url带哈希的情况
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
