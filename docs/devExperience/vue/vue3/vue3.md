# vue3 开发后台系统

## 纯前端实现导出 PDF 文件

1. 首先确定使用的工具：html2Canvas + jspdf

```cmd
   <!-- 通过npm/yarn/cnpm下载 -->
   npm i --save html2Canvas
   npm i --save jspdf
```

```js
export const htmlToPdf = (id, title) => {
  const element = document.getElementById(`${id}`);
  const opts = {
    margin: 5,
    // 如果导出的内容过多，scale越大，canvas图片绘制会出现空白
    scale: 3, //缩放比例，提高生成图片清晰程度
    // scale: 13,  //缩放比例，提高生成图片清晰程度
    useCORS: true, //允许加载跨域的图片
    allowTaint: true, //允许图片跨域，和useCORS二者不可共同使用
    tainttest: true, //检测每张图片已经加载完成
    logging: true, //日志开关，发布的时候记得改成false
  };
  //   由于需要导出的数据过多，所以setTimeout设置的时间很长(10秒)
  setTimeout(() => {
    html2Canvas(element, opts)
      .then((canvas) => {
        const contentWidth = canvas.width;
        const contentHeight = canvas.height;
        //一页pdf显示html页面生成的canvas高度
        const pageHeight = (contentWidth / 592.28) * 841.89;
        //未生成pdf的html页面高度
        let leftHeight = contentHeight;
        //页面偏移
        let position = 0;
        //A4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        const imgWidth = 595.28;
        const imgHeight = (592.28 / contentWidth) * contentHeight;
        console.log(`output->imgHeight`, imgHeight);
        const pageData = canvas.toDataURL("image/jpeg", 1.0);
        console.log("pageData", pageData);
        //A4纸纵向，一般默认使用 new JsPDF('landscape');横向页面
        const PDF = new JsPDF("", "pt", "a4");
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          // addImage(pageData,'JPEG',左，上，宽度，高度)设置
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, pageHeight);
        } else {
          //超过一页时，分页打印（每页高度841.89）
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            // position -= 840
            position -= 850; //视情况调整position的值
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        // 添加页脚 【此功能未实现，导出中文是乱码】
        const totalPages = PDF.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          PDF.setPage(i);
          const pageWidth = PDF.internal.pageSize.width;
          const text = `第${i}页 / 共${totalPages}页`;
          const textWidth = PDF.getTextWidth(text);
          const x = (pageWidth - textWidth) / 2;
          PDF.setFont("宋体", "normal");
          PDF.text(text, x, PDF.internal.pageSize.height - 10);
        }
        PDF.save(title + ".pdf");
      })
      .catch((error) => {
        console.log("打印失败", error);
      });
  }, 10000);
};
```

```vue
<!-- 在vue3页面使用 -->
<template>
  <div id="pdfEvent">
    <!-- 内容 -->
  </div>
  <a-button type="primary" @click="handlePrint">导出PDF</a-button>
</template>
<script setup>
// 生成PDF
const handlePrint = () => {
  nextTick(() => {
    htmlToPdf(【传入需要导出的内容ID值("pdfEvent")】, 【导出PDF的文件名称("文件报告")】);
  });
};
</script>

<!-- 页面使用 -->
<template>
  <a-button type="primary" @click="handlePrint">导出PDF</a-button>
  <template v-for="(item, index) in list" :key="item.id">
    <div class="module">
      <div>
        <!-- 渲染item中的内容 -->
      </div>
      <!-- 分页 -->
      <div class="footer-page">第{{ index + 1 }}页 (共{{ list.length }}页)</div>
    </div>
  </template>
</template>
<script setup>
// 生成PDF
const handlePrint = () => {
  nextTick(() => {
     htmltoPDF2('.module','.footer-page', '文件报告').then(()=>{
            const footerAll = document.querySelectorAll('.footer-page')
            footerAll.forEach(item=>{
            item.style.display = 'none'
        })
  });
};
</script>
<style lang="less" scoped>
.footer-page {
  display: none;
  text-align: center;
}
</style>
```

### 多个类名相同的元素导出 PDF，占满一页，加入页脚

```js
/**
 * 多个类名相同的元素导出PDF，且每个元素占PDF一页,且需要加入页脚
 */
export const htmltoPDF2 = async (id, footerId, title) => {
  const footerAll = document.querySelectorAll(`${footerId}`);
  footerAll.forEach((item) => {
    item.style.display = "block";
  });
  const modules = document.querySelectorAll(`${id}`);
  const PDF = new JsPDF("l", "pt", "a4");
  for (let i = 0; i < modules.length; i++) {
    const module = modules[i];
    await html2Canvas(module).then((canvas) => {
      const contentHeight = 1122.05 - 10;
      //A4纸张横向宽高 [793.70, 1122.52]
      const scaleFactor = Math.min(
        793.7 / canvas.width,
        contentHeight / canvas.height
      );
      const pageData = canvas.toDataURL("image/jpeg", 1.0);
      if (i !== 0) {
        // 增加分页
        PDF.addPage();
      }
      const imgWidth = canvas.width * scaleFactor;
      const imgHeight = canvas.height * scaleFactor - 10;
      PDF.addImage(pageData, "JPEG", 8, 10, imgWidth, imgHeight);
    });
  }
  return PDF.save(`${title}.pdf`);
};
```

```vue
<!-- 在vue3页面使用 -->
<template>
  <a-button type="primary" @click="handlePrint">导出PDF</a-button>
  <template v-for="(item, index) in list" :key="item.id">
    <div class="module">
      <div>
        <!-- 渲染item中的内容 -->
      </div>
      <!-- 分页 -->
      <div class="footer-page">第{{ index + 1 }}页 (共{{ list.length }}页)</div>
    </div>
  </template>
</template>
<script setup>
// 生成PDF
const handlePrint = () => {
  nextTick(() => {
     htmltoPDF2('.module','.footer-page', '文件报告').then(()=>{
            const footerAll = document.querySelectorAll('.footer-page')
            footerAll.forEach(item=>{
            item.style.display = 'none'
        })
  });
};
</script>
<style lang="less" scoped>
.footer-page {
  display: none;
  text-align: center;
}
</style>
```

## Echarts 封装

(可参考文章[https://juejin.cn/post/7304959484828844043?searchId=20241014085816FA02F82D20EBAC7FCDC2#heading-10])

1. 解决问题：优化依赖，自动渲染清除，图表大小自适应，主题切换。

   - 单独文件书写 Echarts 依赖引入文件，编写方法 draw()可对 dom 节点进行初始化，清除并绘制新的 Echarts 对象。
   - 监听 dom 更新。MutationObserver()接口监视 DOM 树，来动态 resize 当前的 echarts 实例。
   - 主题切换：书写一个方法 drawOption()来进行颜色代理，通过监听器，监听一个主题切换的变量，来改变主题。根据主题的切换，可以将 echarts 实例 option 内的颜色变量字符串转为切合主题的颜色。
   - 扩展交互事件：通过获取到的 echarts 实例，对 dom 节点进行事件监听，实现自定义交互。

2. 【代码实例待完成....】

## 可视化大屏开发

1. 自定义 UI 颜色
2. 自己封装 Echarts 图表（或 开源框架：vue-echarts）
3. 大屏界面响应式:宽高 vw、vh 就可以。（或者自己写一个基于 rem 方案的响应式 hooks，方便在 vue3 项目中使用。）
4. 一些实用的第三方插件（工具函数 lodash、动画插件等...）
5. 好用的动画库推荐（可以对其二次封装成一个通用的 vue3 组件）：[建议收藏！用了这 3 个 CSS3 可视化网站，摸鱼时间直接翻倍！https://juejin.cn/post/7406547469624606754]
6. 由于没有可适配的组件，手搓一个工作时间段图表(svg + css)(类似甘特图变体)，以内嵌的展示方式表现在表格中。

## 优化代码

```js
if (
  !userInfo.value.name ||
  !userInfo.value.building ||
  !userInfo.value.unit ||
  !userInfo.value.room
) {
  uni.showToast({
    title: "请完善个人信息",
    icon: "error",
  });
  return;
}
// 等价于=====
const { name, building, unit, room } = userInfo.value; //使用对象解构赋值

const requiredFields = [name, building, unit, room];
//数组every()方法检查多个变量是否都有值
if (!requiredFields.every((field) => field)) {
  uni.showToast({
    title: "请完善个人信息",
    icon: "error",
  });
  return;
}
```
