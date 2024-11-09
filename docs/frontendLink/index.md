# 前端导航

---

<script setup>
let BoxNav;
if (typeof window !== 'undefined') {
    BoxNav = await import('./BoxNav.vue');
}
// import BoxNav from './BoxNav.vue'
</script>

## 工具

<BoxNav :navLink="[
{
link: 'https://www.json.cn/',
iconSrc: 'jsongeshihua',
title: 'Json中文网',
desc: 'JSON在线解析及格式化验证'
},{
link: 'https://chatgpt.com/',
iconSrc: 'chatgpticon',
title: 'ChatGPT',
desc: ''
},{
link: 'https://tool.lu/',
iconSrc: null,
title: '在线工具',
desc: '开发人员的工具箱'
},{
link: 'https://caniuse.com/',
iconSrc: null,
title: 'Can I use',
desc: '前端API兼容性查询'
},]"/>

---

## 前端文档

<BoxNav :navLink="[
{
link: 'https://developer.mozilla.org/zh-CN/',
iconSrc: null,
title: 'MDN | Web开发者指南',
desc: 'Mozilla的开发者平台，提供了大量关于HTML、CSS和JavaScript详细文档'
},{
link: 'https://www.runoob.com/',
iconSrc: null,
title: '菜鸟教程',
desc: '学的不仅是技术，更是梦想'
},{
link: 'https://es6.ruanyifeng.com/',
iconSrc: 'tubiaozhizuomoban',
title: 'ES6入门教程',
desc: '阮一峰的网络日志'
},]"/>

---

## 社区

<BoxNav :navLink="[
{
link: 'https://juejin.cn/',
iconSrc: 'juejin',
title: '稀土掘金',
desc: '面向全球中文开发者的技术内容分享与交流平台'
},{
link: 'https://www.csdn.net/',
iconSrc: 'csdn',
title: 'CSDN',
desc: 'CSDN'
},{
link: 'https://www.cnblogs.com/',
iconSrc: null,
title: '博客园',
desc: '博客园是一个面向开发者的知识分享社区'
},{
link: 'https://gitee.com/',
iconSrc: null,
title: 'Gitee',
desc: '国内软件项目的托管平台'
},{
link: 'https://github.com/',
iconSrc: 'github',
title: 'Github',
desc: '一个面向开源及私有软件项目的托管平台'
},{
link: 'https://www.v2ex.com/',
iconSrc: 'vex',
title: 'V2EX',
desc: '...'
},{
link: 'https://segmentfault.com/',
iconSrc: null,
title: 'SegmentFault思否',
desc: '技术问答开发者社区'
},]"/>

---

## Vue 生态

<BoxNav :navLink="[
{
link: 'https://cn.vuejs.org/',
iconSrc: 'Vue',
title: 'Vue 3',
desc: '渐进式 JavaScript 框架'
},{
link: 'https://router.vuejs.org/zh/',
iconSrc: 'Vue',
title: 'Vue Router',
desc: 'Vue.js 的官方路由 为 Vue.js 提供富有表现力、可配置的、方便的路由'
},{
link: 'https://vueuse.org/',
iconSrc: 'vueuse',
title: 'VueUse',
desc: 'Vue Composition API的常用工具库'
},{
link: 'https://vant-ui.github.io/vant/#/zh-CN',
iconSrc: 'vant',
title: 'Vant',
desc: '轻量，可定制的移动端Vue组件库 (Vant4--适用于 Vue3)'
},{
link: 'https://pinia.vuejs.org/zh/',
iconSrc: 'pinia',
title: 'Pinia',
desc: '符合直觉的 Vue.js 状态管理库'
},{
link: 'https://antdv.com/components/overview-cn',
iconSrc: null,
iconImg: './img/AntDesignVue.png',
title: 'Ant Design Vue',
desc: 'Ant Design的Vue实现，开发和服务于企业级后台产品'
},{
link: 'https://element-plus.org/zh-CN/',
iconSrc: 'element-plus',
title: 'Element Plus',
desc: '基于Vue3，面向设计师和开发者的组件库'
},]"/>

---

## React 生态

<BoxNav :navLink="[
{
link: 'https://zh-hans.react.dev/',
iconSrc: 'React',
title: 'React',
desc: '用于构建用户界面的 JavaScript 库'
},{
link: 'https://reactrouter.com/en/main',
iconSrc: 'React',
title: 'React Router',
desc: 'React的声明式路由'
},{
link: 'https://ahooks.js.org/zh-CN/',
iconSrc: 'ahooks',
title: 'ahooks',
desc: '一套高质量可靠的React Hooks 库'
},{
link: 'https://ant-design.antgroup.com/docs/react/introduce-cn',
iconSrc: 'antd',
title: 'Ant Design React',
desc: '一套企业级UI设计语言和React组件库'
},{
link: 'https://mobile.ant.design/zh',
iconSrc: null,
title: 'Ant Design Mobile',
desc: '构建移动WEB应用程序的React组件库'
},{
link: 'https://cn.redux.js.org/',
iconSrc: 'redux',
title: 'Redux',
desc: 'JavaScript应用的状态容器，提供可预测的状态管理'
},{
link: 'https://nextjs.org/',
iconSrc: 'cib-next-js',
title: 'Next.js',
desc: '一个用于Web的React框架'
},]"/>

---

## 小程序

<BoxNav :navLink="[
{
link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
iconSrc: 'weixinxiaochengxu',
title: '微信小程序文档',
desc: '原生-微信小程序官方文档'
},{
link: 'https://uniapp.dcloud.net.cn/',
iconSrc: 'uni-app',
title: 'uni-app',
desc: '开发一次，多端覆盖'
},{
link: 'https://docs.taro.zone/docs/',
iconSrc: null,
title: 'Taro',
desc: 'Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发'
},]"/>

---

## 可视化框架

<BoxNav :navLink="[
{
link: 'https://echarts.apache.org/zh/index.html',
iconSrc: 'ECharts',
title: 'ECharts',
desc: '一个基于JavaScript的开源可视化图表库'
},{
link: 'https://d3js.org/',
iconSrc: null,
title: 'D3.js',
desc: '一个遵循Web标准用于可视化数据的JavaScript库'
},{
link: 'https://www.chartjs.org/',
iconSrc: null,
title: 'Chart.js',
desc: '一个简单而灵活的JavaScript图表库'
},{
link: 'https://threejs.org/',
iconSrc: null,
title: 'Three.js',
desc: 'JavaScript 3d库'
},]"/>

---

## 图表库

<BoxNav :navLink="[
{
link: 'https://www.iconfont.cn/',
iconSrc: null,
iconImg: './img/iconfont.png',
title: 'iconfont',
desc: '国内功能很强大且图表内筒丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换以及图标库管理。'
},{
link: 'https://iconpark.oceanengine.com/official',
iconSrc: null,
iconImg: './img/iconPark.png',
title: 'IconPark',
desc: 'IconPark图表库是一个通过技术驱动矢量图标样式的开源图表库，可以实现根据单一的主题色，快速生成一套图标样式。'
},]"/>

---

## Node

<BoxNav :navLink="[
{
link: 'https://nodejs.org/zh-cn/learn/getting-started/introduction-to-nodejs',
iconSrc: 'Nodejs',
title: 'Node',
desc: '基于Chrome V8引擎的JavaScript运行环境，Node.js程序可以运行在Windows、Linux、MacOS、FreeBSD、OpenBSD、Android、iOS等操作系统上。'
},{
link: 'https://expressjs.com/',
iconSrc: null,
title: 'Express',
desc: '基于Node.js平台，快速、开放、极简Web开发框架'
},]"/>

---

## 编译&构建&打包工具

<BoxNav :navLink="[
{
link: 'https://www.webpackjs.com/',
iconSrc: 'webpack',
title: 'Webpack 中文网',
desc: '一个基于JavaScript的开源可视化图表库'
},{
link: 'https://cn.vitejs.dev/',
iconSrc: null,
title: 'Vite 中文文档',
desc: '一个遵循Web标准用于可视化数据的JavaScript库'
},{
link: 'https://www.babeljs.cn/',
iconSrc: 'babel',
title: 'Babel',
desc: 'Babel是一个JavaScript编译器'
},{
link: 'https://esbuild.github.io/',
iconSrc: 'Esbuild',
title: 'esbuild',
desc: '...'
},{
link: 'https://www.rollupjs.com/',
iconSrc: 'logo',
title: 'Rollup',
desc: 'Rollup是一个JavaScript模块打包器'
},]"/>

---

## 静态站点生成器

<BoxNav :navLink="[
{
link: 'https://astro.build/',
iconSrc: null,
title: 'Astro',
desc: '一个现代化的轻量级静态站点生成器'
},{
link: 'https://vuepress.vuejs.org/zh/',
iconSrc: 'vue',
title: 'VuePress',
desc: 'Vue驱动静态网站生成器'
},{
link: 'https://vitepress.dev/',
iconSrc: 'vue',
title: 'VitePress',
desc: '由Vite和Vue驱动的静态网站生成器'
},{
link: 'https://d.umijs.org/',
iconSrc: null,
title: 'dumi',
desc: '基于Umi为组件研发而生的静态站点框架'
},{
link: 'https://docusaurus.io/zh-CN',
iconSrc: null,
title: 'Docusaurus',
desc: '基于React的静态网站生成器'
},]"/>
