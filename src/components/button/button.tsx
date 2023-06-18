import React, { type FC } from 'react';
import classnames from 'classnames';
import './style.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  loading?: boolean;
  block?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const classPrefix = `rc-btn`;

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    type = 'default',
    size = 'medium',
    style,
    onClick,
    loading = false,
    block = false,
    ...other
  } = props;

  const cls = classnames(classPrefix, {
    [`${classPrefix}-${type}`]: type,
    [`${classPrefix}-block`]: block,
    [`${classPrefix}-${size}`]: ['small', 'large'].includes(size),
    [className as string]: !!className,
  });

  const loadingCls = classnames({
    [`${classPrefix}-loading`]: true,
    [`${classPrefix}-${type}-loading`]: type,
    [`${classPrefix}-${size}-loading`]: size,
  });

  return (
    <button
      {...other}
      className={cls}
      style={style}
      onClick={onClick}
      type="button"
    >
      {loading && <i className={loadingCls}></i>}
      <span className="rc-btn-txt">{children}</span>
    </button>
  );
};
