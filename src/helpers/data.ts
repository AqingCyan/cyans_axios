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
