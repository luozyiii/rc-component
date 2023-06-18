import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  size?: number;
  wrap?: boolean;
}

const classPrefix = `rc-space`;

export const Space: FC<SpaceProps> = (props) => {
  const { children, direction = 'horizontal', size = 12, wrap = true } = props;

  const cls = classnames(classPrefix, {
    [`${classPrefix}-vertical`]: direction === 'vertical',
    [`${classPrefix}-wrap`]: direction === 'horizontal' && wrap,
  });

  return (
    <ul className={cls}>
      {React.Children.map(children, (child, index) => {
        return (
          <li
            key={index}
            style={{
              marginLeft: size / 2 + 'px',
              marginRight: size / 2 + 'px',
              marginBottom: size + 'px',
            }}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};
