# CSS

### 简述对 BFC 的理解

一、介绍：BFC 是页面中的一块渲染区域，并有自己的一套渲染规则。BFC 的目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部元素。

二、触发条件：

- 根元素 html
- 浮动元素：float: left/right
- overflow 的值不为 visible，为 auto、scroll、hidden
- display 的值为 inline-block、flex、inltable-cell、table-caption、table、inline-table、inline-flex、grid、inline-grid
- position 的值为 absolute 或 fixed

三、应用场景：

1. 防止 margin 重叠
2. 清除内部浮动
   清除浮动方式：

- 父盒子设置高度；
- 父盒子设置 overflow：hidden；
- 额外添加一个标签，设置 clear: both；
- 伪元素清除浮动；
- 双伪元素设置清除浮动。

3. 自适应多栏布局

### CSS 选择器有哪些？优先级？哪些属性可以继承？

一、选择器：

- id 选择器：#id
- class 类选择器：.class
- 标签选择器：div
- 后代选择器（#box div）,选择 id 为 box 元素内部所有的 div 元素
- 子选择器（.one>one1）,选择父元素为.one 的所有.one1 的元素
- 相邻同胞选择器（.one+.two）,选择紧接在.one 之后的所有.two 元素
- 群组选择器（div,p）,选择 div、p 的所有元素

- 伪类选择器

```css
:first-of-type 表示一组同级元素中其类型的第一个元素
:last-of-type 表示一组同级元素中其类型的最后一个元素
:only-of-type 表示没有同类型兄弟元素的元素
:only-child 表示没有任何兄弟的元素
:nth-child(n) 根据元素在一组同级中的位置匹配元素
:nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
:last-child 表示一组兄弟元素中的最后一个元素
:root 设置HTML文档
:empty 指定空的元素
:enabled 选择可用元素
:disabled 选择被禁用元素
:checked 选择选中的元素
:not(selector) 选择与 <selector> 不匹配的所有元素
:link：选择未被访问的链接
:visited：选取已被访问的链接
:active：选择活动链接
:hover：鼠标指针浮动在上面的元素
:focus：选择具有焦点的
:first-child：选择父元素下的第一个子元素
```

- 伪元素选择器

```css
:first-letter：用于选取指定选择器的首字母
:first-line：选取指定选择器的首行
:before：选择器在被选元素的内容前面插入内容
:after：选择器在被选元素的内容后面插入内容
```

- 属性选择器

```css
[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
```

- 层次选择器(p~ul)，选择前面有 p 元素的每个 ul 元素
- 伪类选择器

二、优先级：内联 > ID 选择器 > 类选择器 > 标签选择器

三、 继承属性

- 字体系列属性：
- 文本系列属性：
- 元素可见性：
- 表格布局属性：
- 列表属性：
- 引用
- 光标属性
  **注意：** a 标签的字体颜色不能被继承；h1~h6 标签字体的大小不能被继承

**无继承的属性：**

- display
- 文本属性：vertical-align、text-decoration
- 盒子模型的属性：width、height、margin、padding
- 背景属性：background-color、background-image、background-repeat、background-position
- 定位属性：浮动、清除浮动、定位 position 等
- 生成内容属性：content、counter-reset、counter-increment
- 轮廓样式属性：ontline-style、outline-width、outline-color、outline
- 页面样式属性：size、page-break-before、page-break-after、

### CSS 中有哪些方式可以隐藏页面元素？区别？

一、实现方式：

- display: none;
- visibility: hidden;
- opacity：0;
- 设置 height、width 模型属性为 0;
- position: absolute;
- clip-path

**总结：**最常用的是 display:none 和 visibility:hidden，

二、区别：

|                        | display:none | visibility:hidden  | opacity:0            |
| :--------------------- | ------------ | ------------------ | -------------------- |
| 页面中                 | 不存在       | 存在，依然占据空间 | 存在，但依然占据空间 |
| 重排                   | 会           | 不会               | 不会                 |
| 重绘                   | 会           | 会                 | 不一定               |
| 自身绑定事件           | 不触发       | 不触发             | 可触发               |
| transition             | 不支持       | 支持               | 支持                 |
| 子元素可复原           | 不能         | 能                 | 不能                 |
| 被遮挡的元素可触发事件 | 能           | 能                 | 不能                 |

### 元素水平垂直居中的方法有哪些？如果元素不定宽高呢？

一、实现方式：

- 定位+margin：auto
- 定位：margin：负值
- 定位+transform
- table 布局
- flex 布局
- grid 布局

二、元素宽高未知，仍能实现水平垂直居中的方法：

- 定位+margin：auto
- 定位+transform
- flex 布局
- grid 布局

三、 总结：
**1. 内联元素居中布局**

1. 水平居中

- 行内元素可设置：text-align: center;
- flex 布局设置父元素：display: flex;justify-content: center;

2. 垂直居中

- 单行文本父元素确认高度：height === line-height
- 多行文本父元素确认高度：display: table-cell;vertical-align:middle

**2. 块级元素居中布局**

1. 水平居中

- 定宽：margin:0 auto
- 绝对定位+left:50%+margin:负自身一半

2. 垂直居中

- position：absolute;设置 left、top、margin-left、margin-top（定高）
- display：table-cell
- transform：translate(X,Y)
- flex(不定高，不定宽)
- grid(不定高，不定宽)，兼容性相对比较差

### 如何实现两栏布局，右侧自适应，三栏布局中间自适应

一、两栏布局

1. float

- 使用 float 左浮动左边栏
- 右边模块使用 margin-left 撑出内容块做内容展示
- 为父级元素添加 BFC，防止下方元素飞到上方内容

2. flex 弹性布局，为了让左右两个盒子高度自动，需要设置 align-items: flex-start

二、三栏布局
实现方式：

- 两边 float，中间使用 margin
- 两边 absolute，中间使用 margin
- 两边 float 和负 margin
- display: table 实现
- flex 布局
- grid 网格布局

### 说说 flexbox(弹性布局)以及适用场景？

一、介绍：采用 flex 弹性布局的元素，其所有子元素自动成为容器成员 flex item

二、属性：关于 flex 常用的属性，可划分为容器属性和容器成员属性
容器属性：

1. flex-direction：设置主轴方向,属性：

- row：水平方向，起点在左端
- column：垂直方向，起点在上端
- row-recerse：水平方向，起点在右端
- column-reverse：垂直方向，起点在下端

2. flex-wrap：设置是否换行，属性：

- nowrap：不换行
- wrap：换行，第一行在下方
- wrap-reverse：换行，第一行在上方

3. flex-flow：设置主轴方向和是否换行，是 flex-direction 和 flex-wrap 的简写形式。默认值为 row nowrap
4. justify-content：设置主轴对齐方式，属性：

- flex-start(默认值)：左对齐
- flex-end：右对齐
- center：居中
- space-between：两端对齐，项目之间的间隔都相等
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

5. align-items：设置交叉轴对齐方式,属性：

- flex-start：交叉轴起点对齐
- flex-end：交叉轴终点对齐
- center：交叉轴中心对齐
- baseline：第一根轴线与交叉轴的基线对齐
- stretch：如果项目未设置高度或设为 auto，将占满整个容器的高度

6. align-content：设置多根轴线的对齐方式。如果只有一根轴线则无效。属性：

- flex-start：与交叉轴的起点对齐
- flex-end：与交叉轴的终点对齐
- center：与交叉轴的中点对齐
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
- stretch(默认值)：轴线占满整个交叉轴

### display 的 block、inline 和 inline-block 的区别

- block：会独占一行，多个元素会另起一行，可以设置 width、height、margin 和 padding 属性；
- inline：多个元素会紧挨在一行，设置 width、height、垂直方向的 padding 和 margin 属性无效，可以设置水平方向的 margin 和 padding；
- inline-block：将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。
  (1) 行内元素：设置宽高无效，不能设置垂直方向的 padding 和 margin，可以设置水平方向的 margin 和 padding 属性。
  (2) 块级元素：可以设置宽高，margin 和 padding，自动换行，多个块级元素默认从上到下。

### link 和@import 区别
