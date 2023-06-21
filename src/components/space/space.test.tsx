import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Space, { SpaceProps } from '.';

describe('Space component', () => {
  // 组件渲染
  test('renders Space with document', () => {
    const { getByText } = render(
      <Space>
        <div className="square">1</div>
        <div className="square">2</div>
        <div className="square">3</div>
      </Space>,
    );
    const space = getByText('1');
    expect(space).toBeInTheDocument();
  });

  // direction 属性
  test('renders horizontal space', () => {
    const props: SpaceProps = {
      direction: 'horizontal',
      children: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>,
      ],
    };
    const { getByRole } = render(<Space {...props} />);
    const spaceElement = getByRole('list');
    expect(spaceElement).toHaveClass('rc-space');
    expect(spaceElement).toHaveClass('rc-space-wrap');
    expect(spaceElement).not.toHaveClass('rc-space-vertical');
  });
  test('renders vertical space', () => {
    const props: SpaceProps = {
      direction: 'vertical',
      children: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>,
      ],
    };
    const { getByRole } = render(<Space {...props} />);
    const spaceElement = getByRole('list');
    expect(spaceElement).toHaveClass('rc-space');
    expect(spaceElement).toHaveClass('rc-space-vertical');
    expect(spaceElement).not.toHaveClass('rc-space-wrap');
  });

  // size 属性
  test('renders space with default size', () => {
    const props: SpaceProps = {
      children: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>,
      ],
    };
    const { getAllByRole } = render(<Space {...props} />);
    const liElements = getAllByRole('listitem');
    expect(liElements.length).toBe(3);
    expect(liElements[0]).toHaveStyle({
      marginRight: '12px',
      marginBottom: '12px',
    });
  });

  test('renders space with custom size', () => {
    const props: SpaceProps = {
      size: 16,
      children: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>,
      ],
    };
    const { getAllByRole } = render(<Space {...props} />);
    const liElements = getAllByRole('listitem');
    expect(liElements.length).toBe(3);
    expect(liElements[0]).toHaveStyle({
      marginRight: '16px',
      marginBottom: '16px',
    });
  });

  // wrap 属性
  test('renders space with wrap = true', () => {
    const props: SpaceProps = {
      wrap: true,
      children: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>,
      ],
    };
    const { getByRole } = render(<Space {...props} />);
    const element = getByRole('list');
    expect(element).toHaveClass('rc-space-wrap');
  });
  test('renders space with wrap = false', () => {
    const props: SpaceProps = {
      wrap: false,
      children: [
        <div key="1">1</div>,
        <div key="2">2</div>,
        <div key="3">3</div>,
      ],
    };
    const { getByRole } = render(<Space {...props} />);
    const element = getByRole('list');
    expect(element).not.toHaveClass('rc-space-wrap');
  });
});
