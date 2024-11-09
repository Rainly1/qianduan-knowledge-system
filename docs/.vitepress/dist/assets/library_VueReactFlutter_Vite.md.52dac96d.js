import{_ as e,o as a,c as t,S as s}from"./chunks/framework.0fe8f473.js";const C=JSON.parse('{"title":"Vite","description":"","frontmatter":{},"headers":[],"relativePath":"library/VueReactFlutter/Vite.md","filePath":"library/VueReactFlutter/Vite.md"}'),l={name:"library/VueReactFlutter/Vite.md"},n=s(`<h1 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h1><h2 id="vite-介绍" tabindex="-1">Vite 介绍 <a class="header-anchor" href="#vite-介绍" aria-label="Permalink to &quot;Vite 介绍&quot;">​</a></h2><ol><li><p>Vite 解决了 Webpack 开发阶段 Dev Serve 冷启动时间过长，HMR（热更新）反映速度慢的问题。</p></li><li><p>Vite 优点：</p><ul><li>去掉打包步骤，快速地冷启动。</li><li>及时进行模块热更新，不会随着模块变多而使热更新变慢。</li><li>真正按需编译。</li></ul></li><li><p>安装 Vite，同时构建 vue3 项目</p></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># npm create vite@latest [项目名称] --template vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># yarn create vite [项目名称] --template vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># pnpm create vite [项目名称] -- --template vue</span></span></code></pre></div><ol start="4"><li>通过 Vite 构建 React 项目</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># npm create vite@latest my-react-app[项目名称] --template react</span></span>
<span class="line"><span style="color:#A6ACCD;">cd my-react-app            //进入项目文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install                //下载依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run dev               //运行项目</span></span></code></pre></div>`,6),i=[n];function p(c,o,r,d,u,_){return a(),t("div",null,i)}const h=e(l,[["render",p]]);export{C as __pageData,h as default};