import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from 'vite-plugin-mdx';
import commonjs from 'vite-plugin-commonjs';


export default defineConfig({
  plugins: [react(), mdx(),commonjs()],
  // define: {
  //   'window': 'globalThis', // 模拟 window 对象
  //   'window.document': 'globalThis.document' // 如果有 `document` 使用这个
  // },
  ssr: {
    // noExternal: ['your-problematic-module']
    noExternal: ['specific-plugin-or-library']
  },
  outDir: './docs/' //指定输出目录
});
