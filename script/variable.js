const fs = require('fs');
const glob = require('glob');

// 搜索指定目录下的所有 .scss 文件
const searchDir = './src/components'; // 搜索目录
const files = glob.sync(`${searchDir}/**/*.scss`);

// 用于存储字段名的对象
const variableNamesByFile = {};

// 遍历每个 .scss 文件，提取其中的 CSS 变量字段名
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/--[\w-]+/g);

  if (matches) {
    // 将字段名存储到对应的文件名下
    variableNamesByFile[file] = [...new Set(matches)];
  }
});

const outputFilePath = './config/theme.json';
const result = JSON.stringify(variableNamesByFile, null, 2);
fs.writeFileSync(outputFilePath, result);
