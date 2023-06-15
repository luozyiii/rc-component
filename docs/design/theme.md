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
import { Palette, createColorData } from 'rc-component';
import { brand } from '@leslies/css';

const colorsData = createColorData('brand', brand);
export default () => <Palette data={colorsData} />;
```

## Danger / 危险色

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { danger } from '@leslies/css';

const colorsData = createColorData('danger', danger);
export default () => <Palette data={colorsData} />;
```

## Warning / 警告色

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { warning } from '@leslies/css';

const colorsData = createColorData('warning', warning);
export default () => <Palette data={colorsData} />;
```

## Caution / 警示色

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { caution } from '@leslies/css';

const colorsData = createColorData('caution', caution);
export default () => <Palette data={colorsData} />;
```

## Success / 成功色

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { success } from '@leslies/css';

const colorsData = createColorData('success', success);
export default () => <Palette data={colorsData} />;
```

## Tip / 提示色

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { tip } from '@leslies/css';

const colorsData = createColorData('tip', tip);
export default () => <Palette data={colorsData} />;
```

## Text / 文本

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { text } from '@leslies/css';

const colorsData = createColorData('text', text);
export default () => <Palette data={colorsData} />;
```

## Fill / 中性色

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { fill } from '@leslies/css';

const colorsData = createColorData('fill', fill);
export default () => <Palette data={colorsData} />;
```

## Line / 分割线

```jsx
import React from 'react';
import { Palette, createColorData } from 'rc-component';
import { line } from '@leslies/css';

const colorsData = createColorData('line', line);
export default () => <Palette data={colorsData} />;
```
