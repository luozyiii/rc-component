const { spawn } = require('child_process');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const glob = require('glob');
const handlebars = require('handlebars');
const _ = require('lodash');

(() => {
  const component = process.argv[2];
  if (!component) {
    console.log(chalk.red('请输入组件名!'));
    return;
  }
  const dirName = _.kebabCase(component);
  const componentName = _.upperFirst(_.camelCase(component));

  spawn('mkdir', ['-p', path.join(process.cwd(), `src/components/${dirName}`)]);

  const tplFiles = glob.sync(path.join(__dirname, 'template/**/*.hbs'));
  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = filePath
      .replace('script/template', `src/components/${dirName}`)
      .replace('COMPONENT', dirName)
      .replace('.hbs', '');
    await fs.ensureDir(path.dirname(newPath));
    await fs.writeFile(newPath, result);
    console.log(chalk.green(`wirte ${newPath} success`));
  });
})();
