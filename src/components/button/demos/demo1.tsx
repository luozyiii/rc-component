import React from 'react';
import { Button } from '@leslies/rc-component';

export default () => (
  <>
    <Button>default</Button>
    <Button type="primary" style={{ marginLeft: '12px' }}>
      primary
    </Button>
    <Button type="dashed" style={{ marginLeft: '12px' }}>
      dashed
    </Button>
    <Button type="link" style={{ marginLeft: '12px' }}>
      link
    </Button>
    <Button type="text" style={{ marginLeft: '12px' }}>
      text
    </Button>
  </>
);
