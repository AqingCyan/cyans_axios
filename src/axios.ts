/**
 * axios主函数
 */

import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

// 混合绑定axios函数与Axios对象，拓展接口
function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
