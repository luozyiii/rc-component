import classnames from 'classnames';
import React, { type FC } from 'react';
import './index.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'dashed' | 'link' | 'text';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    type,
    size = 'medium',
    style,
    onClick,
    onBlur,
    ...other
  } = props;

  const cls = classnames({
    'ant-btn': true,
    [`ant-btn-${type}`]: type,
    [`ant-btn-${size}`]: ['small', 'large'].includes(size),
    [className as string]: !!className,
  });

  return (
    <button
      {...other}
      className={cls}
      style={style}
      onClick={onClick}
      onBlur={onBlur}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
