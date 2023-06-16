---
nav:
  title: 设计
  order: 0
group:
  title: 色彩
  order: 0
mobile: false
---

# 主题色 v2

## 主色

```jsx
import React from 'react';
import { Palette, createColorData_v2 } from 'rc-component';
import { dominant_v2 } from '@leslies/css';

const colorsData = createColorData_v2(dominant_v2);
export default () => <Palette data={colorsData} />;
```

## 渐变色

```jsx
import React from 'react';
import { Palette, createColorData_v2 } from 'rc-component';
import { gradient_v2 } from '@leslies/css';

const colorsData = createColorData_v2(gradient_v2);
export default () => <Palette data={colorsData} />;
```

## 辅助色

```jsx
import React from 'react';
import { Palette, createColorData_v2 } from 'rc-component';
import { auxiliary_v2 } from '@leslies/css';

const colorsData = createColorData_v2(auxiliary_v2);
export default () => <Palette data={colorsData} />;
```

## 文本色

```jsx
import React from 'react';
import { Palette, createColorData_v2 } from 'rc-component';
import { text_v2 } from '@leslies/css';

const colorsData = createColorData_v2(text_v2);
export default () => <Palette data={colorsData} />;
```

## 中性色

```jsx
import React from 'react';
import { Palette, createColorData_v2 } from 'rc-component';
import { neutral_v2 } from '@leslies/css';

const colorsData = createColorData_v2(neutral_v2);
export default () => <Palette data={colorsData} />;
```

## 线框色

```jsx
import React from 'react';
import { Palette, createColorData_v2 } from 'rc-component';
import { line_v2 } from '@leslies/css';

const colorsData = createColorData_v2(line_v2);
export default () => <Palette data={colorsData} />;
```
