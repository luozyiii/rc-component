import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '组件库',
    footer: 'Powered by 924361501@qq.com',
    // 配置高清方案，默认为 750 高清方案
    hd: {
      rules: [],
    },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
  },
});
