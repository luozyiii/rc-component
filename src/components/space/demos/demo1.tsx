import React from 'react';
import { Space } from '@leslies/rc-component';
import './style.scss';

export default () => (
  <>
    <h4>基础示例</h4>
    <Space>
      <div className="square">1</div>
      <div className="square">2</div>
      <div className="square">3</div>
    </Space>
    <h4>direction 示例</h4>
    <Space direction="vertical">
      <div className="square">1</div>
      <div className="square">2</div>
      <div className="square">3</div>
    </Space>
    <h4>size 示例</h4>
    <Space size={20}>
      <div className="square">1</div>
      <div className="square">2</div>
      <div className="square">3</div>
    </Space>
  </>
);
