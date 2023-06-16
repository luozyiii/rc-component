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

export { createColorData, createColorData_v2 };
