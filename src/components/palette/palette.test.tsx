import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Palette, { Color } from '.';

describe('Palette component', () => {
  // Palette 组件渲染
  test('renders Palette with document', () => {
    const { getByText } = render(
      <Palette
        data={[
          { name: '--brand-1', value: '#1890ff' },
          { name: '--brand-2', value: '#000000' },
        ]}
      />,
    );
    const palette = getByText('--brand-1');
    expect(palette).toBeInTheDocument();
  });
  // Palette 组件渲染
  test('renders Color with document', () => {
    const { getByText } = render(
      <Color
        data={[
          { name: 'brand-1', value: '#1890ff' },
          { name: 'brand-2', value: '#000000' },
        ]}
      />,
    );
    const color = getByText('brand-1');
    expect(color).toBeInTheDocument();
  });
});
