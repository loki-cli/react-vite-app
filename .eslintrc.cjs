module.exports = {
  env: {
    // 运行环境设置为浏览器
    browser: true,
    // 语言环境设置为 ES2021
    es2021: true,
  },
  extends: [
    // 使用 react 插件推荐的规则
    'plugin:react/recommended',
    // 使用 standard 规则集
    'standard',
    // 使用 prettier 规则集来确保代码格式
    'prettier'
  ],
  parser: '@typescript-eslint/parser', // 使用 @typescript-eslint/parser 解析 TypeScript
  parserOptions: {
    ecmaFeatures: {
      // 启用对 JSX 语法的支持
      jsx: true,
    },
    // 设置 ECMAScript 版本为 12（即 ES2021）
    ecmaVersion: 12,
    // 使用 ES 模块
    sourceType: 'module',
  },
  settings: {
    react: {
      // 自动检测 React 版本
      version: 'detect',
    },
  },
  plugins: [
    // 使用 react 插件
    'react',
    // 使用 @typescript-eslint 插件
    '@typescript-eslint'
  ],
  rules: {
    // 关闭对 React prop-types 的检查（使用 TypeScript 可以代替）
    'react/prop-types': 'off',
    // 强制 JSX 花括号中包含的表达式使用花括号
    'react/jsx-curly-brace-presence': 'error',
    // 关闭 React 17 中不再需要的 react/jsx-uses-react 检查
    'react/jsx-uses-react': 'off',
    // 关闭 React 17 中不再需要的 react/react-in-jsx-scope 检查
    'react/react-in-jsx-scope': 'off',
    // 强制在没有子元素的组件和 HTML 元素上使用自闭合标签
    'react/self-closing-comp': [
      'error',
      {
        component: true, // 应用到 React 组件
        html: true,      // 应用到 HTML 元素
      },
    ],
    // 强制在 JSX 中使用布尔属性值
    'react/jsx-boolean-value': 'error',
    // 强制使用模板字符串而不是字符串连接
    'prefer-template': 'error',
    // 强制使用双引号包裹 JSX 属性值
    'jsx-quotes': ['error', 'prefer-double'],
    // 强制在 JSX 标签中强制一致的空格规则
    'react/jsx-tag-spacing': 'error',
  },
};
