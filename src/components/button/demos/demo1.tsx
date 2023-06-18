import React from 'react';
import { Space, Button } from '@leslies/rc-component';

export default () => (
  <>
    <h4>基础示例</h4>
    <Space>
      <Button>default</Button>
      <Button type="primary">primary</Button>
      <Button type="dashed">dashed</Button>
      <Button type="link">link</Button>
      <Button type="text">text</Button>
    </Space>
    <h4>size 示例</h4>
    <Space>
      <Button size="large" type="primary">
        large
      </Button>
      <Button type="primary">medium</Button>
      <Button size="small" type="primary">
        small
      </Button>
    </Space>
    <h4>loading 示例</h4>
    <Space>
      <Button loading>default</Button>
      <Button loading type="primary">
        primary
      </Button>
      <Button loading type="dashed">
        dashed
      </Button>
      <Button loading type="link">
        link
      </Button>
      <Button loading type="text">
        text
      </Button>
    </Space>
  </>
);
