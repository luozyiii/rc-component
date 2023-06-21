const createColorData = (name: string, colors: string[]) => {
  return colors?.map((color, index) => {
    return {
      name: `${name}-${index + 1}`,
      value: color,
    };
  });
};

const createColorData_v2 = (colors: any) => {
  return Object.keys(colors).map((key: string) => {
    return {
      name: key,
      value: colors[key],
    };
  });
};

const copyToClipboard = (text: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  console.log('复制成功');
};

export { createColorData, createColorData_v2, copyToClipboard };
