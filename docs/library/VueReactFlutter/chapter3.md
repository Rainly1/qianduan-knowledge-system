# 前端构建工具

## npm yarn pnpm

### 介绍

1. npm 是随同 Node 一起安装的包管理工具，用于 Node 模块管理（安装、卸载、管理依赖等）。
2. yarn 保持对 npm 代理的兼容性。在现有工作流程功能相同的情况下保证了 操作更快、更安全和更可靠。
3. pnpm 速度快、磁盘空间高效的软件包管理器。

### 安装

```
# 全局安装yarn
npm install --g yarn

# 全局安装pnpm
npm install --g pnpm
# 通过npx 安装
npx pnpm add -g pnpm
# 一旦安装了pnpm，就无须再使用其他软件包管理器进行升级，可以使用 pnpm 升级自己pnpm add -g pnpm
```

\*\* **推荐使用 pnpm**

## Node.js

\*\* 注意： 保持 Node.js 和 Webpack 的版本尽量新，可以提升 Webpack 打包速度。

```
1. 更新Node.js
node -v            //查看当前Node版本
npm info node      //查看Node版本信息
npm install -g n   //安装n模块
sudo n stable      //安装稳定版本
sudo n latest     //或者安装最新版本

2. 更新npm
sudo npm install npm@latest -g
```
