# vue-cli

> vue 脚手架实践

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构
对于深层文件夹，命名上尽量避免直接使用index定义文件名称，这样不利于快速锁定目标。
可以直接import指定文件，也可以使用一下方式：
```
src
  |--- components/
       |--- com/
           |--- a.vue
           |--- b.vue
           |--- index.js
```
```index.js
import a from './a'
import filesContent from './b'

export {
    a,
    b
}
```

## 文件命名规范
语义化

## less命名规范
语义化

## 定义目录模块结构

## 区分基础组件和业务组件

## 单元测试
