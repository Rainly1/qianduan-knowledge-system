# Vite

## Vite 介绍

1. Vite 解决了 Webpack 开发阶段 Dev Serve 冷启动时间过长，HMR（热更新）反映速度慢的问题。

2. Vite 优点：

   - 去掉打包步骤，快速地冷启动。
   - 及时进行模块热更新，不会随着模块变多而使热更新变慢。
   - 真正按需编译。

3. 安装 Vite，同时构建 vue3 项目

```
# npm create vite@latest [项目名称] --template vue

# yarn create vite [项目名称] --template vue

# pnpm create vite [项目名称] -- --template vue

```

4. 通过 Vite 构建 React 项目

```
# npm create vite@latest my-react-app[项目名称] --template react
cd my-react-app            //进入项目文件夹
npm install                //下载依赖
npm run dev               //运行项目
```
