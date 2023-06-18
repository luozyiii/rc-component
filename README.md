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

## 标准

### 样式命名

- 前缀 【.rc-】

```scss
$btn-prefix: '.rc-btn';
```

## publish 发布

```bash
# 部署 verdaccio 私域 npm
npm publish --registry http://localhost:4873

# 撤销
npm unpublish --registry http://localhost:4873 --force
# 强制撤销指定版本
npm unpublish @leslies/rc-component@0.0.1 --registry http://localhost:4873 --force
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

npm publish --registry http://localhost:4873
npm unpublish --registry http://localhost:4873 --force
