# @leslies/rc-component

[![NPM version](https://img.shields.io/npm/v/@leslies/rc-component.svg?style=flat)](https://npmjs.org/package/@leslies/rc-component)
[![NPM downloads](http://img.shields.io/npm/dm/@leslies/rc-component.svg?style=flat)](https://npmjs.org/package/@leslies/rc-component)

A react library developed with dumi

## Docs 文档

https://luozyiii.github.io/rc-component

```bash
# 手动部署文档

# package.json 升级一下版本号
# 构建 docs
npm run docs:build

# 部署
npm run deploy
```

## 组件开发

```bash
# 组件名 小写
npm run add [组件名]

# 最后在 src/index.ts 增加组件的引用
export { default as Space } from './components/space';
```

## 组件自动化测试(Jest)

### 基础

#### 1、安装依赖

```bash
npm install --save-dev jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom
```

#### 2、在项目根目录下创建一个 tsconfig.json 文件，并添加以下配置：

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

#### 3、在 Jest 的配置文件中（通常是 jest.config.js 或 package.json 中的 jest 字段）添加以下配置：

```json
{
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
}
```

### scss 支持

#### 1、在 Jest 的配置文件中（通常是 jest.config.js 或 package.json 中的 jest 字段）添加以下配置：

```json
{
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
}
```

#### 2、在项目根目录下创建一个 **mocks** 目录，并创建一个 styleMock.js 文件，添加以下代码：

```js
module.exports = {};
```

## publish 发布

```bash
# 部署 verdaccio 私域 npm
npm publish --registry http://81.71.98.176:4873

# 撤销
npm unpublish --registry http://81.71.98.176:4873 --force
# 强制撤销指定版本
npm unpublish @leslies/rc-component@0.0.1 --registry http://81.71.98.176:4873 --force
```

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# check your project for potential problems
$ npm run doctor
```

## Link 参考

- [dumi](https://d.umijs.org/guide)
- [mobile.ant.design](https://mobile.ant.design/)
- [ant.design](https://ant.design/)

## LICENSE

MIT
