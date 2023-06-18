import React, { type FC } from 'react';
import classnames from 'classnames';
import './style.scss';

export interface PaletteProps extends React.HTMLAttributes<HTMLElement> {
  data: any[];
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `rc-palette`;

export const Palette: FC<PaletteProps> = (props) => {
  const { className, style, data, ...other } = props;

  const cls = classnames(classPrefix, {
    [className as string]: !!className,
  });

  return (
    <ul {...other} className={cls} style={style}>
      {data?.map((item) => (
        <li key={item.name} style={{ background: item.value }}>
          <span>{item.name}</span>
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  );
};
