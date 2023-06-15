const createColorData = (name: string, colors: string[]) => {
  return colors?.map((color, index) => {
    return {
      name: `${name}-${index + 1}`,
      value: color,
    };
  });
};

export { createColorData };
