/*
 * 发送请求文件
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { createError } from '../helpers/error'
import { parseHeaders } from '../helpers/headers'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout, cancelToken } = config
    // 实例化请求并发送
    const request = new XMLHttpRequest()

    // 如果设置了responseType
    if (responseType) {
      request.responseType = responseType
    }

    // 如果设置了超时时间
    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url!, true)

    // 当响应成功分情况处理
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }

    // 处理网络错误
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    // 处理超时请求
    request.ontimeout = function handleTimeout() {
      reject(createError(`Request timeout of ${timeout} ms`, config, 'ECONNABORTED', request))
    }

    Object.keys(headers).forEach(name => {
      // 没有数据就删除掉没有意义的header，但是其他类型的header进入else进行设置
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    // 判断是否执行取消逻辑
    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort()
        reject(reason)
      })
    }

    request.send(data)

    /**
     * 封装辅助函数根据status判断是否异常并处理
     * @param response
     */
    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
