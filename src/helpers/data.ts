/*
 * 请求（响应）内容数据转换
 */
import { isPlainObject } from './util'

/**
 * 转化请求数据，因为ajax的send中支持的数据类型很多，例如blob等等，
 * 我们需要做转化处理的就是普通对象转JSON
 * @param data post请求数据
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/**
 * 转化响应体中的data，在不指定数据类型的情况下将字符串转化成对应JSON对象格式
 * @param data
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    // 尝试转化成JSON
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing
    }
  }
  return data
}
