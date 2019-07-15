# cyan's axios

![](https://img.shields.io/badge/npm-v0.1.0-cb3837.svg)
![](https://img.shields.io/badge/platform-chrome|firefox-orange.svg)
![](https://img.shields.io/badge/build-passing-success.svg)
![](https://img.shields.io/badge/language-typescript-blue.svg)
![](https://img.shields.io/badge/license-MIT-blueviolet.svg)
![](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

使用TypeScript构建一个在浏览器端使用的Axios，实现Axios在浏览器端的所有功能

## 已实现功能

- 在浏览器端使用 XMLHttpRequest 对象通讯
- 支持 Promise API
- 支持请求和响应的拦截器
- 支持请求数据和响应数据的转换
- 支持请求的取消
- JSON 数据的自动转换
- 客户端防止 XSS

## 安装

```bash
npm i cyans-axios
```

## 使用

```js
const cyanaxios = require('cyans-axios')

cyanaxios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Yee',
    lastName: 'Huang'
  }
})
```

## 具体功能

### RESTful API

```typescript
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
```

- 简单请求发送

```js
cyanaxios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Yee',
    lastName: 'Huang'
  }
})

cyanaxios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
```
