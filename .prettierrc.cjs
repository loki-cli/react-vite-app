module.exports = {
  semi: true, // 在语句末尾打印分号
  trailingComma: 'es5', // 尽可能控制尾随逗号
  singleQuote: true, // 使用单引号而不是双引号
  printWidth: 100, // 指定打印行的宽度
  tabWidth: 2, // 指定每个缩进级别的空格数
  useTabs: false, // 使用空格代替制表符进行缩进
  jsxSingleQuote: true, // 在JSX中使用单引号而不是双引号
  htmlWhitespaceSensitivity: 'css', // HTML 文件的全局空白敏感度
  endOfLine: 'lf', // 行尾序列使用LF
  bracketSpacing: true, // 在对象字面量之间打印空格
  arrowParens: 'always', // 箭头函数单个参数时不使用括号
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 100,
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: ['*.html', '*.xml'],
      options: {
        printWidth: 120,
      },
    },
  ],
};
