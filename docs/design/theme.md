---
nav:
  title: 设计
  order: 0
mobile: false
---

# 主题色

## Brand / 品牌色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('brand', [
  '#502CE2',
  '#4023B5',
  '#301A88',
  '#D5D6DA',
  '#EAEAFC',
]);
export default () => <Palette data={colorsData} />;
```

## Danger / 危险色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('danger', [
  '#FA3B29',
  '#E33323',
  '#CA2E1F',
  '#FEB0A9',
  '#FED7D4',
  '#FFECEB',
]);
export default () => <Palette data={colorsData} />;
```

## Warning / 警告色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('warning', [
  '#FA6F1E',
  '#D55E1A',
  '#AF4E15',
  '#FDD8A5',
  '#FEECD2',
  '#FFF9F0',
]);
export default () => <Palette data={colorsData} />;
```

## Caution / 警示色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('caution', [
  '#FFD200',
  '#D5B300',
  '#AA9200',
  '#FFF799',
  '#FFFDCC',
  '#FFFEEB',
]);
export default () => <Palette data={colorsData} />;
```

## Success / 成功色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('success', [
  '#1AC14F',
  '#16A443',
  '#128737',
  '#A3E6B9',
  '#D1F3DC',
  '#E8F9ED',
]);
export default () => <Palette data={colorsData} />;
```

## Tip / 提示色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('tip', [
  '#0077FC',
  '#0063D8',
  '#004FB5',
  '#98CDFE',
  '#CCE7FE',
  '#EAF5FF',
]);
export default () => <Palette data={colorsData} />;
```

## Text / 文本

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('text', [
  '#181A31',
  'rgba(24, 26, 49, 0.8)',
  'rgba(24, 26, 49, 0.6)',
  'rgba(24, 26, 49, 0.35)',
  '#FD5900',
  '#0077FC',
]);
export default () => <Palette data={colorsData} />;
```

## Fill / 中性色

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('fill', [
  '#F8F8F9',
  '#F2F3F5',
  '#DFDFE0',
  '#FFFFFF',
  'rgba(24, 26, 49, 0.6)',
]);
export default () => <Palette data={colorsData} />;
```

## Line / 分割线

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { generateTheme } from 'rc-component/styles';

const colorsData = generateTheme('line', [
  'rgba(24, 26, 49, 0.1)',
  'rgba(24, 26, 49, 0.18)',
  '#EBEDF0',
]);
export default () => <Palette data={colorsData} />;
```
