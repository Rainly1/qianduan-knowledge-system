# 《学习 JavaScript 数据结构与算法》

## 环境搭建

1. 使用 Web 服务器  
   在 Chrome 上安装一个 Web 服务器，Web Server for Chrome 的扩展

2. 通过 Node.js http-server

```
# 安装命令
  npm install http-server -g
# 运行命令
  打开实例所在文件夹，终端输入 http-server
```

3. 在 HTML 文件中编写 JavaScript

   **浏览器中运行 html 文件**

   1. 安装扩展 `open in browser`. 注意：版本用 v1.1.0
   2. 直接通过快捷键 `Alt+B` 即可打开所在的 html 文件

   3. 在 html 文件中声明 script 标签，把 JavaScript 代码写进标签里

   ```html
   <! DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8" />
     </head>
     <body>
       <script>
         alert("Hello, World! ");
       </script>
     </body>
   </html>
   ```

   2. 第二种

   ```html
   <! DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8" />
       <title></title>
     </head>
     <body>
       <!-- 引入js文件 -->
       <script src="01-HelloWorld.js"></script>
     </body>
   </html>
   ```
