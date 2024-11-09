# CSS 知识点

<div class="tip-box">
  <h3 style="margin: 0px 0 10px">什么是盒模型？</h3>
  <div>
    当对一个文档进行布局时，浏览器的渲染引擎会根据标准之一的css基础框盒模型（CSS
    basic box
    model），将所有元素表示为一个个矩形的盒子；css决定这些盒子的大小、位置以及属性（如颜色、背景、边框尺寸等）
  </div>
  <div>每个盒子（即盒模型）从外到内由四个部分组成</div>
  <ul>
    <li><strong>margin</strong> 外边距 (不计入盒子的实际大小)</li>
    <li><strong>border</strong> 边距</li>
    <li><strong>padding</strong> 内边距</li>
    <li><strong>content</strong> 内容</li>
</ul>
</div>
盒模型分为W3C标准盒模型和IE盒模型，其区别只有一个：计算盒子实际大小（即总宽度/总高度）的方式不一样。
- W3C标准盒模型（默认）
    - 盒子实际宽 = width + padding  + border
    - 其中width只包含content（即内容区域的宽度）
    - 通过box-sizing:content-box；来设置为W3C标准盒模型
- IE盒模型
    - 盒子实际宽 = width
    - 其中width = content + border + padding
    - 通过box-sizing: border-box；来设置为IE盒模型

## 什么是 BFC

<div class="tip-box">
  <h3 style="margin: 0px 0 10px">格式化上下文（Formatting Context）</h3>
  <div>
    格式化上下文即FC，是Web页面中一种特殊的渲染区域，并有一套渲染规则，它决定了其元素如何排列、定位、以及和其他元素的关系和相互作用
  </div>
  <div>在css中，每个元素都属于一个特定的格式化上下文。有一些元素自带格式化上下文，例如根元素(html)、块级元素、浮动元素、绝对定位元素等。其他元素则可以通过一些css属性来创建自己的格式化上下文，例如display:inline-block、overflow:hidden、floa:left等。</div>
</div>

BFC 即块级格式化上下文(Block Formatting Context)，是 Web 页面中一种渲染模式，用于确定块级元素如何排列、定位和与其他元素交互，其相当于一个独立的容器，里面的元素和外部的元素相互不影响。

### BFC 的布局规则

- BFC 内部的 Box 会在垂直方向，一个接一个的防止（不会出现元素重叠）
- BFC 中两个 Box 垂直方向的距离由 margin 决定
- 同一个 BFC 中两个相邻 Box 的垂直边距 margin 会发生重叠，在不同的 BFC 中则不会发生重叠
- BFC 中每个子元素的左外边距(margin-left)与容器父元素的左边界相接触(border-left)
- BFC 中元素的布局不受外界的影响，也不会影响到外界的元素
  - 形成了 NFC 的区域不会与浮动元素区域重叠
  - 计算 NFC 的高度时，浮动元素也会参与计算

### BFC 如何创建

- 根元素（<`html`>）
- 浮动元素：float 不为 none
- 绝对定位元素：position 为 absolute 或 fixed
- display 值为如下属性：
  - inline-block 行内块元素
  - flow-root 块级元素盒
  - table 该行为类似于`<table>`元素
  - table-cell 该行为类似于`<td>`元素
  - table-caption 该行为类似于`<caption>`
  - table-row 该行为类似于`<tr>`元素
  - table-row-group 该行为类似于`<tbody>`元素
  - table-header-group 该行为类似于`<thead>`元素
  - table-footer-group 该行为类似于`<tfoot>`元素
  - inline-table 内联表格
- display 值为`flex` `inline-flex` `grid` `inline-grid`的直接子元素，且它们本身都不是`flex`、`grid`、`table`容器
- contain 值为`layout`、`content`或`paint`的元素
- overflow 不为`visible`和`clip`的块元素
- 多列容器：`column-count`或`column-width`值不为 auto
- column-span 值为 all

### BFC 的应用场景

- 浮动元素高度塌陷
- 阻止元素被浮动元素覆盖
- 防止 margin 重叠（塌陷）
- 自适应布局

### 常见的格式化上下文总结

- BFC：块级格式上下文
- IFC：行内格式化上下文在 IFC 中元素会沿着基线对齐并按从左到右的顺序排列
- TCFC：表格单元格格式化上下文在 ICFC 中表格的列宽会根据单元格的内容自动调整，而不会出现列宽不一致的情况
- FFC：弹性盒子格式化上下文在 FFC 中弹性盒子元素可以按照自己的尺寸和顺序进行排列
- GFC：网格格式化上下文在 GFC 中网格元素可以按照网格的行和列进行排列
  FFC 和 GFC 除布局之外规则与 BFC 块格式上下文类似，其容器中不存在浮动子元素，但排除外部浮动和阻止外边距重叠仍然有效
