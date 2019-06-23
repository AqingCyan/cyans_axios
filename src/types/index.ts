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

// axios请求体接口
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
}
