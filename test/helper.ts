/**
 * 测试request的辅助函数
 */
export function getAjaxRequest(): Promise<JasmineAjaxRequest> {
  return new Promise(function(resolve) {
    setTimeout(() => {
      return resolve(jasmine.Ajax.requests.mostRecent()) // 模拟了xhr
    }, 0)
  })
}
