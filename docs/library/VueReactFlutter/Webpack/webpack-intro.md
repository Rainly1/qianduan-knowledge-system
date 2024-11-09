# Webpack

## Webpack 安装与卸载

\* 注意：Webpack 安装需要同时安装 Webpack 和 Webpack-cli 两个模块。

```
npm install webpack webpack-cli -g                 //全局安装
npm uninstall webpack webpack-cli -g               //全局卸载
npm install webpack webpack-cli -D                  //在项目中安装
webpack npm install webpack@4.46.0 webpack-cli -D   //安装指定版本
npx webpack -v                                    //项目中安装查看Webpack版本号
npm info webpack                                   //查看webpack历史版本
```

### webpack.config.js 文件配置

```
//webpack.config.js
const path = require('path')
module.exports = {
mode: 'production',    //配置模式
entry: './src/main.js',
output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
}
}
# mode为production，打包出的文件会被压缩，mode为development，则不会被压缩
# entry 项目打包，及从哪一个文件开始打包。打包输出中ChunkNames配置的main就是entry中的main。
# output 是打包后的文件放在哪里
  (1) output.filename 指打包后的文件名。
  (2) output.path 打包后的文件放在哪一个文件夹下，是一个绝对路径，需要引入Node中的path模块，然后调用这个模块的resolve方法。

```

1. Webpack 配置文件的作用是设置配置的参数，提供给 Webpack-cli，Webpack 从 main.js 文件开始打包，打包生成的文件放到 bundle 文件夹下，生成的文件名叫做 bundle.js。如果运行 npx webpack 命令，则会按照配置文件进行打包。
2. Webpack 默认的配置文件名为 webpack.config.js，如果要使用自定义名字(例如 my.webpack.js 作为配置文件名)，则可以用指令 npx webpack--config my.webpack.js 实现。

#### 配置 package.json

1. NPM scripts 原理：当执行 npm run xx 命令时，实际上运行的是 package.json 文件中的 xx 命令。在 script 标签中使用 Webpack，会优先到当前项目的 node_modules 中查找是否安装了 Webpack（和直接使用 Webpack 命令时到全局查找是否安装 Webpack 不同）,命令如下：

```
"scripts": {
    "dev": "npx webpack"
}
```

\* 如果运行 dev 命令，则会自动执行 webpack 命令。最后可以直接运行 npm run dev 命令进行 Webpack 打包。
