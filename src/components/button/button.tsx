import React, { type FC } from 'react';
import classnames from 'classnames';
import './style.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    type = 'default',
    size = 'medium',
    style,
    onClick,
    ...other
  } = props;

  const cls = classnames({
    'rc-btn': true,
    [`rc-btn-${type}`]: type,
    [`rc-btn-${size}`]: ['small', 'large'].includes(size),
    [className as string]: !!className,
  });

  return (
    <button
      {...other}
      className={cls}
      style={style}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
