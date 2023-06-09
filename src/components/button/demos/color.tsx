import React from 'react';
import { Color } from 'rc-component';
import themeVariable from 'rc-component/styles/theme-variable';

export default () => {
  const colors = ['--text-1', '--line-3', '--fill-4', '--brand-1', '--line-1'];
  const data = colors?.map((item) => {
    return {
      name: item.slice(2),
      value: themeVariable[item],
    };
  });
  return <Color data={data} />;
};
