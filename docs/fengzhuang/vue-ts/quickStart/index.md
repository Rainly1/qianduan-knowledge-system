## 快速开始

因为当前组件库是基于 `element-plus`二次封装，所有在项目当中必须确保已经安装和正确使用了`element-plus`,[element-plus 安装使用指南](https://github.com/)

## 使用指南

1. 在项目目录里安装`imooc-element-components`
   - npm 安装：
   - cnpm 安装：
   - yarn 安装：
2. 全局引入
   在`main.ts`文件当中写入以下代码:

```js
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import IMoocUI from "rain-element-components";
import "rain-element-components/style.css";

const app = createApp();
app.use(ElementPlus);
// app.use(IMoocUI);
```

3. 按需引入

```js
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import chooseIcon from "rain-element-components/chooseIcon";
import chooseArea from "rain-element-components/chooseArea";
// ...
import "rain-element-components/style.css";

const app = createApp();
app.use(ElementPlus);
// app.use(chooseIcon);
// app.use(chooseArea);
```

4. 使用 在需要的组件内参照以下文档了解具体使用方式
