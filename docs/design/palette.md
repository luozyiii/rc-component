---
nav:
  title: 设计
  order: 0
group:
  title: 色彩
  order: 0
mobile: false
---

# 基础色

## Dust Red / 薄暮

斗志、奔放

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { red } from '@leslies/css';

const data = red?.map((item, index) => {
  return {
    name: `red-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Volcano / 火山

醒目、澎湃

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { volcano } from '@leslies/css';

const data = volcano.map((item, index) => {
  return {
    name: `volcano-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Orange / 日暮

温暖、欢快

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { orange } from '@leslies/css';

const data = orange.map((item, index) => {
  return {
    name: `orange-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Yellow / 日出

出生、阳光

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { yellow } from '@leslies/css';

const data = yellow.map((item, index) => {
  return {
    name: `yellow-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Lime / 青柠

自然、生机

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { lime } from '@leslies/css';

const data = lime.map((item, index) => {
  return {
    name: `lime-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Green / 极光绿

健康、创新

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { green } from '@leslies/css';

const data = green.map((item, index) => {
  return {
    name: `green-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Cyan / 明青

希望、坚强

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { cyan } from '@leslies/css';

const data = cyan.map((item, index) => {
  return {
    name: `cyan-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Blue / 拂晓蓝

包容、科技、普惠

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { blue } from '@leslies/css';

const data = blue.map((item, index) => {
  return {
    name: `blue-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Geek Blue / 极客蓝

探索、钻研

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { geekblue } from '@leslies/css';

const data = geekblue.map((item, index) => {
  return {
    name: `geekblue-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Purple / 酱紫

优雅、浪漫

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { purple } from '@leslies/css';

const data = purple.map((item, index) => {
  return {
    name: `purple-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```

## Magenta / 法式洋红

明快、感性

```jsx
import React from 'react';
import { Palette } from 'rc-component';
import { magenta } from '@leslies/css';

const data = magenta.map((item, index) => {
  return {
    name: `magenta-${index + 1}`,
    value: item,
  };
});

export default () => <Palette data={data} />;
```
