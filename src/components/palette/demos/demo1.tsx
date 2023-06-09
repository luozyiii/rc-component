import React from 'react';
import { Palette, Color, Space } from '@leslies/rc-component';

export default () => (
  <Space direction="vertical" size={30}>
    <Palette
      data={[
        { name: '--brand-1', value: '#1890ff' },
        { name: '--brand-2', value: '#000000' },
      ]}
    />
    <Color
      data={[
        { name: 'brand-1', value: '#1890ff' },
        { name: 'brand-2', value: '#000000' },
        { name: 'brand-3', value: '#000000' },
        { name: 'brand-4', value: '#000000' },
        { name: 'brand-5', value: '#000000' },
      ]}
    />
  </Space>
);
