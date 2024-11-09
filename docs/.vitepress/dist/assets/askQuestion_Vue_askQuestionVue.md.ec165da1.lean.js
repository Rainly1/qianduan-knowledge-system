import{_ as o,o as p,c as e,k as s,a as t,t as a,S as n}from"./chunks/framework.0fe8f473.js";const c="/qianduan-knowledge-system/assets/slot回答思路.9a1e5cf8.png",r="/qianduan-knowledge-system/assets/首屏加载优化.8c68bcd1.png",g=JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"askQuestion/Vue/askQuestionVue.md","filePath":"askQuestion/Vue/askQuestionVue.md"}'),i={name:"askQuestion/Vue/askQuestionVue.md"},y=n("",84),D={start:"2"},F=s("p",null,"串联过滤器时，每个过滤器都会接收到前一个过滤器返回的结果，并对其进行进一步的处理。",-1),u=n("",113);function A(l,C,d,h,v,f){return p(),e("div",null,[y,s("ol",D,[s("li",null,[s("p",null,[t("过滤器可以串联："),s("code",null,a(l.value|l.filter1|l.filter2),1)]),F,s("pre",null,[s("code",null,` \`\`\`js
   <!-- 串联过滤器实例： -->
   // 日期格式化
   Vue.filter('timestampToDate', function (value) {
   return new Date(value * 1000);
   });

 Vue.filter('formatDate', function (value) {
 return value.toLocaleDateString();
 });

 // 使用串联过滤器
 `+a(l.timestamp|l.timestampToDate|l.formatDate)+"\n\n ```\n",1)])])]),u])}const b=o(i,[["render",A]]);export{g as __pageData,b as default};
