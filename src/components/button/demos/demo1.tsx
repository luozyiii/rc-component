import React from 'react';
import { Button } from '@leslies/rc-component';

export default () => (
  <>
    <Button loading>default</Button>
    <Button type="primary" loading style={{ marginLeft: '12px' }}>
      primary
    </Button>
    <Button type="dashed" loading style={{ marginLeft: '12px' }}>
      dashed
    </Button>
    <Button type="link" loading style={{ marginLeft: '12px' }}>
      link
    </Button>
    <Button type="text" loading style={{ marginLeft: '12px' }}>
      text
    </Button>
    <br />
    <Button size="large" type="primary" loading style={{ marginLeft: '12px' }}>
      primary
    </Button>
    <br />
    <Button size="small" type="primary" loading style={{ marginLeft: '12px' }}>
      primary
    </Button>
  </>
);
