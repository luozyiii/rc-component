import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '.';

describe('Button component', () => {
  // 组件渲染
  test('renders button with document', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  // 点击回调
  test('calls onClick callback when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  // type 属性
  test('renders a primary Button', () => {
    const { getByRole } = render(<Button type="primary">primary</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-primary');
  });

  test('renders a danger Button', () => {
    const { getByRole } = render(<Button type="danger">danger</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-danger');
  });

  test('renders a dashed Button', () => {
    const { getByRole } = render(<Button type="dashed">dashed</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-dashed');
  });

  test('renders a link Button', () => {
    const { getByRole } = render(<Button type="link">link</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-link');
  });

  test('renders a text Button', () => {
    const { getByRole } = render(<Button type="text">text</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-text');
  });

  // size 属性
  test('renders a large Button', () => {
    const { getByRole } = render(
      <Button size="large" type="primary">
        large
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-large');
  });

  test('renders a small Button', () => {
    const { getByRole } = render(
      <Button size="small" type="primary">
        small
      </Button>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-small');
  });

  // block 属性
  test('renders a Block Button', () => {
    const { getByRole } = render(<Button block>Block Button</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('rc-btn-block');
  });

  // loading 属性
  test('renders a Loading Button', () => {
    const { getByRole } = render(
      <Button loading block>
        Loading Button
      </Button>,
    );
    const button = getByRole('button')?.querySelector('.rc-btn-loading');
    expect(button).toBeInTheDocument();
  });
});
