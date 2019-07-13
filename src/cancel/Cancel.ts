/*
 * Cancel类
 */
export default class Cancel {
  message?: string

  constructor(message?: string) {
    this.message = message
  }
}

// 判断是否cancel实例
export function isCancel(value: any): boolean {
  return value instanceof Cancel
}
