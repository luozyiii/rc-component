import React, { type FC } from 'react';
import classnames from 'classnames';
import { copyToClipboard } from '../../utils';
import './style.scss';

export interface ColorProps extends React.HTMLAttributes<HTMLElement> {
  data: any[];
  className?: string;
  style?: React.CSSProperties;
}

const classPrefix = `rc-palette`;

export const Color: FC<ColorProps> = (props) => {
  const { className, style, data, ...other } = props;

  const cls = classnames({
    [`${classPrefix}-color`]: true,
    [className as string]: !!className,
  });

  return (
    <ul {...other} className={cls} style={style}>
      {data?.map((item) => (
        <li key={item.name}>
          <div
            className="circle"
            style={{ background: item.value }}
            onDoubleClick={() => copyToClipboard(item.value)}
          ></div>
          <div onDoubleClick={() => copyToClipboard(item.name)}>
            {item.name}
          </div>
          <div className="tool-tip">{item.value}</div>
        </li>
      ))}
    </ul>
  );
};
