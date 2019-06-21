/**
 * 公共类型定义文件
 */

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

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
