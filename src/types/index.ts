/**
 * 公共类型定义文件
 */

// method类型定义
export type Method =
  | 'GET'
  | 'get'
  | 'DELETE'
  | 'delete'
  | 'HEAD'
  | 'head'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'PUT'
  | 'put'
  | 'patch'
  | 'PATCH'

// axios请求体接口定义
export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

// axios响应体接口定义
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

// axios返回对象类型（是一个promise）
export interface AxiosPromise extends Promise<AxiosResponse> {}

// axios异常信息接口
export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

// 定义一个Axios接口，包含axios公用方法和属性
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise

  get(url: string, config?: AxiosRequestConfig): AxiosPromise

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise

  head(url: string, config?: AxiosRequestConfig): AxiosPromise

  options(url: string, config?: AxiosRequestConfig): AxiosPromise

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
}

// Axios混合类型接口
export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise
}
