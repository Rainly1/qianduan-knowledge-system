import{_ as a,o as n,c as s,S as e}from"./chunks/framework.0fe8f473.js";const A=JSON.parse('{"title":"前端构建工具","description":"","frontmatter":{},"headers":[],"relativePath":"library/VueReactFlutter/chapter3.md","filePath":"library/VueReactFlutter/chapter3.md"}'),p={name:"library/VueReactFlutter/chapter3.md"},l=e(`<h1 id="前端构建工具" tabindex="-1">前端构建工具 <a class="header-anchor" href="#前端构建工具" aria-label="Permalink to &quot;前端构建工具&quot;">​</a></h1><h2 id="npm-yarn-pnpm" tabindex="-1">npm yarn pnpm <a class="header-anchor" href="#npm-yarn-pnpm" aria-label="Permalink to &quot;npm yarn pnpm&quot;">​</a></h2><h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><ol><li>npm 是随同 Node 一起安装的包管理工具，用于 Node 模块管理（安装、卸载、管理依赖等）。</li><li>yarn 保持对 npm 代理的兼容性。在现有工作流程功能相同的情况下保证了 操作更快、更安全和更可靠。</li><li>pnpm 速度快、磁盘空间高效的软件包管理器。</li></ol><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 全局安装yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install --g yarn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 全局安装pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install --g pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;"># 通过npx 安装</span></span>
<span class="line"><span style="color:#A6ACCD;">npx pnpm add -g pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;"># 一旦安装了pnpm，就无须再使用其他软件包管理器进行升级，可以使用 pnpm 升级自己pnpm add -g pnpm</span></span></code></pre></div><p>** <strong>推荐使用 pnpm</strong></p><h2 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h2><p>** 注意： 保持 Node.js 和 Webpack 的版本尽量新，可以提升 Webpack 打包速度。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. 更新Node.js</span></span>
<span class="line"><span style="color:#A6ACCD;">node -v            //查看当前Node版本</span></span>
<span class="line"><span style="color:#A6ACCD;">npm info node      //查看Node版本信息</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -g n   //安装n模块</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo n stable      //安装稳定版本</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo n latest     //或者安装最新版本</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2. 更新npm</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo npm install npm@latest -g</span></span></code></pre></div>`,10),t=[l];function o(r,c,i,d,m,h){return n(),s("div",null,t)}const y=a(p,[["render",o]]);export{A as __pageData,y as default};
