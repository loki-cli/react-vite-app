import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	/* 基础全局样式 */
:root {
  /* 基础字体与排版设置 */
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  /* 颜色方案与背景色 */
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #fff;

  /* 文字渲染和优化 */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* 自定义 CSS 变量 */
  --main-theme-color: #cc2222;
  --adm-color-primary: #cc2222;
  --adm-color-wathet: #ffe9e9;
  --content-padding: 0px;
}

a {
  /* 链接样式 */
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

a:hover {
  /* 链接悬停样式 */
  color: #535bf2;
}

body {
  /* 全局布局设置 */
  margin: 0;
  display: flex;
  min-width: 100vw; /* 最小视口宽度 */
  min-height: 100vh; /* 最小视口高度 */
}

h1 {
  /* 标题样式 */
  font-size: 3.2em;
  line-height: 1.1;
}

p {
  /* 段落样式 */
  margin: 2px;
}

button {
  /* 按钮基础样式 */
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  /* 按钮悬停样式 */
  border-color: var(--main-theme-color);
}

button:focus,
button:focus-visible {
  /* 按钮聚焦样式 */
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    /* 适配浅色模式的颜色设置 */
    color: #213547;
    background-color: #fff;
  }

  a:hover {
    /* 浅色模式下的链接悬停样式 */
    color: #747bff;
  }

  button {
    /* 浅色模式下的按钮背景色 */
    background-color: #f9f9f9;
  }
}

`;

export default GlobalStyles;
