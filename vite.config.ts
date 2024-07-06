import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // 从配置文件加载代理
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_SERVER,
          secure: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      rollupOptions: {
        // 打包配置
        output: {
          manualChunks: {
            echarts: ['echarts'],
            'antd-mobile': ['antd-mobile'],
          },
        },
      },
    },
  });
};
