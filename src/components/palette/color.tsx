import React, { type FC } from 'react';
import classnames from 'classnames';
import './style.scss';

export interface ColorProps extends React.HTMLAttributes<HTMLElement> {
  data: any[];
  className?: string;
  style?: React.CSSProperties;
}

export const Color: FC<ColorProps> = (props) => {
  const { className, style, data, ...other } = props;

  const cls = classnames({
    'ant-palette-color': true,
    [className as string]: !!className,
  });

  return (
    <ul {...other} className={cls} style={style}>
      {data?.map((item) => (
        <li key={item.name}>
          <div className="circle" style={{ background: item.value }}></div>
          <div>{item.name}</div>
        </li>
      ))}
    </ul>
  );
};
