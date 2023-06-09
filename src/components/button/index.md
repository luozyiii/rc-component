---
nav:
  title: 组件
  order: 1
---

# Button 按钮

用于开始一个即时操作。

## 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。

## 示例

<code src="./demos/demo1.tsx"></code>

## 属性

| 属性      | 说明             | 类型                                               | 默认值  |
| --------- | ---------------- | -------------------------------------------------- | ------- |
| block     | 是否是块级元素   | `boolean`                                          | false   |
| type      | 设置按钮类型     | `primary \| dashed \| link   \| text   \| default` | default |
| size      | 设置按钮大小     | `small \| medium  \| large`                        | medium  |
| className | 语义化结构 class | -                                                  | -       |
| style     | 语义化结构 style | -                                                  | -       |
| onClick   | 点击按钮时的回调 | `React.MouseEventHandler<HTMLButtonElement>`       | -       |

此外，还支持原生 `button` 元素的以下属性：`onMouseDown` `onMouseUp` `onTouchStart` `onTouchEnd`。

## 色彩

<code src="./demos/color.tsx"></code>

## CSS 变量

| 属性                     | 说明     | 默认值                        |
| ------------------------ | -------- | ----------------------------- |
| --background-color       | 背景颜色 | `var(--adm-color-background)` |
| --border-color           | 边框颜色 | `var(--adm-color-border)`     |
| --border-radius          | 圆角大小 | `4px`                         |
| --border-style           | 边框样式 | `solid`                       |
| --border-width           | 边框宽度 | `1px`                         |
| --text-1（--text-color） | 文字颜色 | `var(--adm-color-text)`       |
