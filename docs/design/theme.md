---
nav:
  title: 设计
  order: 0
group:
  title: 色彩
  order: 0
mobile: false
---

# 主题色

## Brand / 品牌色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'brand';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Danger / 危险色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'danger';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Warning / 警告色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'warning';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Caution / 警示色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'caution';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Success / 成功色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'success';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Tip / 提示色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'tip';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Text / 文本

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'text';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Fill / 中性色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'fill';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```

## Line / 分割线

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme, themeColor } from '@leslies/css';

const colorKey = 'line';
const colorsData = generateTheme(colorKey, themeColor[colorKey]);
export default () => <Palette data={colorsData} />;
```
