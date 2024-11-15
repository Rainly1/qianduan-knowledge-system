# Vue

## 从 0 到 1 架构一个 vue3 项目，说说有哪些步骤、哪些重要插件、目录结构会怎么组织？

拿 vue3 项目举例：确定好是 vue3 技术，UI 框架是 Ant Design Vue/ Element Plus，是否需要 TS 进行类型管理。

1. 初始化项目：
   选择一个构建工具来初始化项目。vue3 推荐使用 Vite 或 Vue Cli。
2. 创建项目：使用 Vue cli 或 vite 创建新项目。
   ```cmd
   npm create vite@latest my-vue3-project -- --template vue
   ```
3. 目录结构：

```
   my-vue3-project
   ├── public/
   │ └── index.html
   ├── src/
   │ ├── api/ # API 接口请求
   │ ├── assets/ # 静态资源，如图片、字体等
   │ ├── components/ # 组件
   │ ├── views/ # 页面组件
   │ ├── router/ # 路由配置
   │ ├── store/ # Vuex/Pinia 状态管理
   │ ├── styles/ # 样式文件
   │ ├── utils/ # 工具函数
   │ ├── App.vue # 根组件
   │ ├── main.js # 主入口文件
   │ └── env.d.ts # 环境变量类型定义
   ├── package.json
   ├── vite.config.js # Vite 配置文件
   └── tsconfig.json # TypeScript 配置文件（如果使用 TypeScript）
```

4. 安装依赖
   一些必要的库和插件：

- Vue Router —— Vue 官方路由管理器
- Vuex/Pinia —— 状态管理库
- Axios —— HTTP 客户端
- Element PLUS/Vant/Ant Design Vue：UI 组件库
- TypeScript —— 类型系统（可选。如果需要用 TS 进行类型管理的话）

5. 配置路由：使用 Vue Router 配置应用的路由
6. 配置状态管理：如果需要，配置 Vuex 或 Pinia 管理应用的状态
7. 编写组件和视图：创建和编写组件以及视图
8. 编写服务： 使用 Axios 创建 API 服务（一般都会对 axios 进行二次封装再使用）
9. 编写全局样式： 在 styles 目录中编写全局 css 或 scss/less 样式
10. 编写 工具函数：在 utils 目录中编写工具函数【如 时间戳转换/正则表达式实现手机号验证
11. 环境配置：配置环境变量和环境特定的逻辑
12. 构建和部署：配置构建脚本，并准备部署
13. 测试：

## v-show 和 v-if 的理解

一、共同点：

- v-show 和 v-if 都是控制元素在页面的显隐

二、区别：

- v-show 隐藏是当前元素添加样式 display:none，且当前元素依旧在，只是隐藏了。v-if 显示隐藏是将当前的 dom 元素整个添加或者删除
- v-if 在切换显隐的时候，可能存在子组件的销毁和重建，因此会触发组件的生命周期；而 v-show 只是通过样式控制显隐，不会触发组件的生命周期。
- v-show 更适合于元素的频繁切换。且 v-show 在 template 上使用是没有效果的，因为 template 是没有实际的 dom 元素的。

## v-if 和 v-for 哪个优先级更高

- v-for 的优先级 优于 v-if
  当 v-for 和 v-if 同时出现，每次渲染都会先执行循环判断条件，这样会很浪费性能。可以通过在外层嵌套 template 的 这一层先进行 v-if 判断，然后再 v-for 循环渲染出需要的数据。
  也可以通过计算属性 computed 利用数组方法[filter]先筛选出需要的数据，再进行渲染。

## vue 中 key 的作用和工作原理，说出理解

1. key 作用是 帮助识别节点的唯一性，以便进行高效的 DOM 操作和更新。
2. 工作原理上，Vue 在进行 diff 算法比较新旧 VNode 树时，会根据节点的`key`属性来判断节点的唯一性，并决定是否复用已存在的 DOM 元素。这样可以有效地减少 DOM 操作的次数，提升页面渲染的性能。
3. `key`的值应该是每一项的唯一标识符。一般使用 id 来作为`key`值，不建议使用索引`index` 或不使用`key`值，因为可能在列表渲染的时候出现一些问题，例如节点数据错位、重复渲染、相同标签名元素过渡切换等，导致页面渲染效果不符合逾期，甚至影响用户体验。

## Vue2 组件 data 为什么必须是个函数而 Vue 的根实例没有此限制？

两点原因：

1. 保证组件的复用性和独立性：组件在 Vue 中是可以被复用的，一个组件可能会被多次实例化使用。为了确保每个组件实例拥有独立的数据副本，而不是共享一个数据对象，Vue 组件的`data`选项必须是一个函数。这样每次组件实例化时，`data`函数都会被调用，返回一个全新的数据对象，确保了组件间数据的独立性和封装性。
2. 组件生命周期和响应式数据：Vue 组件中的数据需要具备响应式特性，以便在数据发生变化时，自动更新视图。通过将`data`定义为一个函数，Vue 能够在创建组件实例时调用该函数，为每个实例返回一个独立的数据对象，并确保该数据对象具备响应式特性。这样在组件的生命周期内，可以方便地通过`this`访问到组件实例的数据，并确保数据的更新能够及时地反映到视图上。

   而 Vue 根实例通常是唯一的，不存在复用的情况，因此不需要像组件那样为每个实例返回一个独立的数据对象。在根实例中，`data`选项可以直接是一个对象，因为不会存在多个根实例之间共享数据的情况，也不需要考虑数据的独立性和复用性。因此，Vue 根实例没有限制`data`必须是一个函数的要求。

## vue2 中给对象添加新属性界面不刷新

一、原理说明：
vue2 是通过 Object.defineProperty 实现数据响应式，当为对象添加新属性的时候，无法触发拦截。原因是一开始对象的属性已经被设成了响应式数据，但后增加的属性，没有通过 Obejct.defineProperty 拦截设成响应式的，所以无法触发视图更新。

二、解决方案：
vue2 中不允许在已经创建的实例上动态添加新的响应式属性，若想实现数据与视图同步更新，可采用的解决方案：

- Vue.set()。通过 vue.set()方法，将新属性添加到响应式对象上，确保新属性同样是响应式的，且触发视图更新。
- Object.assign()。应通过创建一个新对象，合并原对象和新增的对象属性。【直接使用 Object.assign()方法，添加到对象的新属性不会触发更新。】

```js
this.someObject = Object.assign({}, this.someObject, { newProp: "new value" });
```

- $forceUpdate。通过$forceUpdate()方法，强制更新组件，确保视图更新。（不推荐）

三、 vue3 中用 Proxy 实现数据响应式，直接动态添加新属性仍可以实现数据响应式。

## vue3.0 为什么用 ProxyAPI 替代 definePropertyAPI?

vue2 中的 Object.defineProperty 实现响应式，主要通过 defineProperty 的两个属性 get 和 set 实现对数据的获取和修改，但存在以下问题：1）检测不到对象属性的添加和删除；2）无法监听数组 API 方法变化，对数组的监听需要通过重写数组的方法实现监听；3）需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题。

ProxyAPI 的监听是针对一个对象的，可以直接劫持整个对象，并返回一个新对象，我们就可以只操作新的对象到达响应式目的。proxy 可以直接监听数组的变化；且 Proxy 有多达 13 中拦截方法不限于 apply/ownKeys、deleteProperty、has 等，这是 Object.defineProperty 不具备的。【但 Proxy 不兼容 IE，也没有 polyfill】

在 vue3.0 中，通过 ProxyAPI 实现响应式，ProxyAPI 是 ES6 新增的特性，在 vue3.0 中，ProxyAPI 可以减少代码体积，减少内存占用，提高性能。

## 封装 Vue3 组件的过程？

1. 先搭组件模板框架，全盘考虑组件的基本逻辑；
2. 确定好组件需要的输入数据，定好 props 里面的数据及类型；
3. 根据组件逻辑，defineExpose 需要暴露的方法或属性；
4. 封装完成，就可以使用啦。

## assets 和 static 的区别

相同点: asstes 和 static 都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下。
不同点：assets 中存放的静态资源文件在项目打包 npm run build 时，会将 assets 中放置的静态资源文件进行打包上传，即 压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在 static 文件中跟着 index.html 一同上传至服务器。 static 中放置的静态资源文件 不会进行压缩等操作，直接上传至服务器。
所以，在开发过程中，template 需要的样式文件 js 文件等都可以放置在 assets 中，进行打包来减少体积。项目中引入的第三方的资源文件如 iconfont.css 等文件可以放置在 static 中，因为这些引入的第三方文件是已经经过处理的，不需要再次处理，可以直接上传。

## Vue 中常用的修饰符:

1. `.prevent`：阻止默认事件的触发，例如 在表单提交时使用`@submit.prevent`可以阻止表单的默认提交行为。
2. `.stop`：组织事件冒泡
3. `.capture`：使用事件捕获模式
4. `.self`：只当事件是从触发事件的元素本身触发时才触发回调；
5. `.once`：指定事件只能触发一次，触发后自动解绑事件监听器；
6. `.sync`：父子组件之间双向数据绑定，使得子组件可以修改父组件传递的 props;
7. `.native`：监听组件根元素的原生事件，而不是组件内部通过 `emit`触发的事件；
8. `.passive`：告知浏览器这个事件监听器永远不会调用`preventDefault()`，可以提高性能。

## 说说对 slot 的理解？以及使用场景有哪些？

<img src="../Vue/Image/slot回答思路.png">

一、slot 是什么及分类
slot 就是插槽。可分为 默认插槽；具名插槽；作用域插槽。

1. 默认插槽：父组件在使用的时候，直接在子组件的标签内写入内容即可。
2. 具名插槽：子组件用 name 属性表示插槽名称，不传为默认插槽，默认插槽名为 default。
3. 作用域插槽：子组件在作用域上绑定属性来将组件信息传给父组件，父组件通过`v-slot（简写：#）`获取子组件的信息，动态渲染内容。
   总结：
   - `v-slot`属性只能在`<template>`上使用，但默认插槽可以在组件标签上使用。
   - 默认插槽名为 default，可以省略 default 直接写`v-slot`。
   - 缩写为#时不能不写参数，写成#default。
   - 可以通过结构获取 v-slot={user}，还可以重命名 v-slot="{user:newName}"和定义默认值 v-slot="{user='默认值'}"。

```html
<!-- 默认插槽  -->
子组件Child.vue
<template>
  <slot>
    <p>默认插槽内容</p>
  </slot>
</template>
父组件
<Child>
  <div>默认插槽</div>
</Child>
<!-- 具名插槽 -->
子组件Child.vue
<template>
  <slot>默认插槽内容</slot>
  <slot name="content">插槽内容</slot>
</template>
父组件
<Child>
  <template v-slot:default>具名插槽</template>
  <template v-slot:content>具名插槽内容...</template>
</Child>
<!-- 作用域插槽 -->
子组件Child.vue
<template>
  <slot name="footer" testProps="子组件的值">
    <h3>没传footer插槽</h3>
  </slot>
</template>
父组件
<Child>
  <template v-slot:default="slotProps">
    来自子组件数据：{{slotProps.testProps}}
  </template>
  <template #default="slotProps">
    来自子组件数据：{{slotProps.testProps}}
  </template>
</Child>
```

二、使用场景

1. 动态内容传递：如一个自定义卡片组件，父组件可根据不同的需求向卡片的标题、内容和按钮等部分传入不同的信息。
2. 布局扩展：如一个对话框组件，根据需求显示不同的标题、内容和按钮。
3. 组件组合：可以通过插槽将多个组件组合在一起，形成更复杂的组件。

三、slot 原理分析
vue 中的插槽通过编译阶段的模板解析和生成渲染函数，以及运行阶段的父组件渲染和子组件渲染处理，实现灵活的内容传递和组件组合。
一）编译阶段

1. 解析模板

- 在 vue 的编译过程中，当遇到带有插槽的组件模板时，编译器会识别出插槽的位置和类型。
- 对于默认插槽，编译器会标记出在子组件模板中没有被具名的`<slot>`标签的位置。对于具名插槽，会根据插槽的名称进行标记。

2. 生成渲染函数

- 编译器会为包含插槽的子组件生成渲染函数。这个渲染函数会包含对插槽内容的处理逻辑。如，对于默认插槽，会在适当的时候返回父组件传入的默认插槽内容；对于具名插槽，会根据插槽名称来确定返回相应的具名插槽内容。

二）运行阶段

1. 父组件渲染

- 当父组件使用带有插槽的子组件时，父组件可以在子组件的标签内部通过`<template>`标签和`v-slot`指令来传入插槽内容。
- 父组件在渲染过程中，会将插槽内容作为一个特殊的部分进行处理，等待子组件来获取和渲染。

2. 子组件渲染

- 子组件在渲染时，会根据编译阶段生成的渲染函数来处理插槽内容。
- 如果有默认插槽，子组件会在需要显示默认插槽内容的地方，查找父组件传入的默认插槽内容并进行渲染。如果有具名插槽，会根据插槽名称找到对应的父组件传入的具名插槽内容进行渲染。
- 子组件可以将插槽内容与自身的模板内容进行组合渲染，从而实现灵活的组件组合和内容传递。

三）数据传递和作用域

1. 数据传递

- 通过插槽，父组件可以向子组件传递静态内容（如文本、html 元素）和动态内容（通过使用 vue 的数据绑定和指令）
- 父组件传入的动态内容在子组件中可以像子组件自身的模板内容一样进行数据绑定和响应式更新。

2. 作用域

- 插槽内容的作用域是父组件的作用域。这意味着在插槽内容中可以访问父组件的数据和方法。
- 子组件内部的数据和方法在插槽内容中是不可直接访问的，除非通过特殊的方式（如事件传递）将数据从子组件传递给父组件，再由父组件传递给插槽内容。

## Vue 的两个核心点：

1. **数据驱动**：Vue.js 的核心是一个响应式的数据绑定系统，它让开发者能够将数据与 DOM 进行简单的绑定。当数据发生变化时，视图会自动更新，而无需手动操作 DOM。这种数据驱动的方式使得开发者可以专注于数据的处理和业务逻辑，不必关心 DOM 的操作和细节，提高开发效率。

2. **组件化**：Vue.js 采用了组件化的开发方式，将页面拆分成多个独立的组件，每个组件负责自己的 UI 和逻辑。组件可以嵌套组合，形成复杂的界面，提高了代码的复用性和可维护性。通过组件化，开发者可以将复杂的应用拆分成简单的组件，每个组件只关注自己的功能，降低开发的复杂度，提高代码的可读性和可维护性。

## vue2 中 实例挂载的过程中发生了什么？

一、结论：

- new vue 的时候调用会调用\_init 方法

  - 定义$set、$get、$delete、$watch 等方法
  - 定义$on、$off、$emit 等事件
  - 定义\_update、$forceUpdate、$destroy 生命周期

- 调用$mount 进行页面的挂载
- 挂载的时候主要是通过 mountComponent 方法
- 定义 updateComponent 更新函数
- 执行 render 生成虚拟 dom
- \_update 将虚拟 DOM 生成真实 dom 结构，并且渲染到页面中。

## 自定义指令的应用场景有哪些？

一、什么是自定义指令：
二、如何实现自定义指令：
注册一个自定义指令有全局和局部注册两种方法。

1. 全局注册：通过 Vue.directive()方法注册指令。
   Vue.directive 第一个参数是指令的名字，第二个参数可以是对象数据，也可以是一个指令函数

```js
// 注册全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到DOM中时
  inserted: function (el) {
    el.focus(); //页面加载完成之后自动让输入框获取到焦点的小功能
  },
});
```

2. 局部注册：通过在组件 options 选项中设置 directive 属性

```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}

// 在模板中使用 v-focus 指令
<input v-focus />
```

自定义指令也存在钩子函数：

- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
- inserted：被绑定元素插入父节点时调用。（仅保证父节点存在，但不一定已被插入文档中）
- update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
- unbind：只调用一次，指令与元素解绑时调用。

所有钩子函数的参数都有一下：

- el：指令所绑定的元素，可以用来直接操作 dom
- binding：一个对象，包含以下 property:

  - name：指令名，不包括 v- 前缀.
  - value：指令绑定的值，例如：v-my-directive="1 + 1" 中，value 的值为 2.
  - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。仅用于 v-model 或 .sync 修饰符的更新。
  - expression：字符串形式的指令表达式。例如：v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
  - arg：传给指令的参数，可选。例如 v-my-directive:foo，arg 的值为 "foo"。
  - modifiers：一个对象，包含修饰符（修饰符是添加在指令名后面的特殊字符，例如：v-my-directive.foo.bar，修饰符对象为 { foo: true, bar: true }）。
  - vnode：Vue 编译生成的虚拟节点
  - oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

    > 除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行

三、应用场景

案例：

- 设置按钮权限【判断权限，通过 el.style.display = '' 或 'none' 控制元素显隐】
- 页面添加水印效果

```js
Vue.directive("watermark", {
  bind: function (el, binding) {
    const watermark = document.createElement("div");
    watermark.className = "watermark";
    watermark.textContent = binding.value.text;
    el.appendChild(watermark);
  },
});
```

- 模态对话框
- 悬停提示
- 表单防止重复提交
- 图片懒加载
- 一键 Copy 的功能

## Vue2 中的过滤器应用场景有哪些？

一、过滤器介绍：
过滤器实质不改变原始数据，只是对数据进行加工处理后返回过滤后的数据再进行调用处理，也可以理解为一个纯函数。
**注：Vue3 中已经废弃 filter**

二、如何用：

1. vue2 中的过滤器可以用在两个地方：双花括号插值 和 v-bind 表达式，过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```js
//在双括号中：
{
  {
    message | capitalize;
  }
}

// 在v-bind表达式中：
<div v-bind:id="rawId | formatId"></div>;
```

2.  过滤器可以串联：`{{ value | filter1 | filter2}}`

    串联过滤器时，每个过滤器都会接收到前一个过滤器返回的结果，并对其进行进一步的处理。

         ```js
           <!-- 串联过滤器实例： -->
           // 日期格式化
           Vue.filter('timestampToDate', function (value) {
           return new Date(value * 1000);
           });

         Vue.filter('formatDate', function (value) {
         return value.toLocaleDateString();
         });

         // 使用串联过滤器
         {{ timestamp | timestampToDate | formatDate }}

         ```

- 局部过滤器优先于全局过滤器被调用
- 一个表达式可以使用多个过滤器。过滤器之间需要用管道符"|"隔开。执行顺序 从左到右。

三、应用场景：
单位转换、文本格式化、时间格式化等。
若涉及到大量的数据处理，应考虑使用计算属性或方法来替代。

## 什么是虚拟 dom？如何实现一个虚拟 dom？

一、虚拟 dom：实际是使用 JavaScript 对象来表示 dom 节点。用来描述真实的 DOM 结构。虚拟 dom 的优点是：① 性能优化：虚拟 dom 允许开发者在内存中批量更新 dom，减少实际 dom 操作的数量。② 最大的优点是实现了跨平台，可以根据不同的平台去进行渲染。当然，虚拟 dom 提供了更好的工具支持，使得调试和理解应用程序的状态变化变得更容易。

二、实现虚拟 dom：

1. 定义虚拟 dom 节点：即 一个 JavaScript 对象，包含节点的类型、属性、子节点等信息。
2. 创建虚拟 dom 树：根据应用程序的状态构建虚拟 DOM 树。
3. 比较个更新：当应用程序状态改变时，创建新的虚拟 dom 树，并与旧的虚拟 dom 树进行比较，找出差异。
4. 应用差异：将差异应用到真实的 dom 上，更新视图。

```js
// 创建虚拟dom节点的构造函数
function VNode(type, props, children) {
  this.type = type;
  this.props = props || {};
  this.children = children || [];
}
// createElement 创建 VNode
function createElement(type, props, ...children) {
  return new VNode(type, props, children);
}

function render(vnode, container) {
  const dom = document.createElement(vnode.type);

  // 设置属性
  Object.keys(vnode.props).forEach((key) => {
    dom.setAttribute(key, vnode.props[key]);
  });

  // 渲染子节点
  vnode.children.forEach((child) => {
    if (typeof child === "string") {
      dom.appendChild(document.createTextNode(child));
    } else {
      render(child, dom);
    }
  });

  container.appendChild(dom);
}

// 创建虚拟DOM
const vdom = createElement(
  "div",
  { id: "root" },
  createElement("h1", null, "Hello World!"),
  createElement("p", null, "Welcome to the virtual DOM!")
);

// 渲染到真实DOM
render(vdom, document.body);
```

## 对 diff 算法的理解？

diff 算法 是发生在虚拟 dom 上的；新的虚拟 dom 和旧的虚拟 dom 进行 diff 算法，算出最小量的更新，最后反映在真实的 dom 上。
diff 算法的基本原理：

1. 同层比较：Vue 只会比较同一层节点，而不会跨层级进行比较。意味着如果父节点改变，Vue 不会对其子节点做深层次比较，只会比较同层次子节点。
2. 节点的类型比较：如果节点的类型发生变化，Vue 会替换到纠结点
3. Key 的使用：为了提高节点的匹配效率，Vue 鼓励在列表中使用 key 属性。key 属性用于唯一标识节点，当节点的 key 变化时，Vue 可以更准确的识别哪些节点需要更新、添加或删除。

diff 算法步骤：

1. 节点匹配：

- 子节点的 diff：同层节点，使用`patch`函数来比较新旧虚拟 dom 树中的节点。首先比较节点的类型、属性、子节点等。

- 节点类型的比较：

        - 如果节点的类型相同，但属性不同，Vue 会更新节点的属性。
        - 如果节点的类型不同（如 `<div>` 改成`<span>`），Vue 会直接替换旧节点。
        - 如果节点的类型和属性都相同，Vue会递归的比较子节点。

- 列表的 diff： - 当处理列表时，Vue 会使用`key`属性来追踪每个节点。当`key`发生变化时，Vue 能够更高效地找到和移动节点，而不是完全重新渲染。

diff 算法的特点：

- 局部更新：Vue 的 diff 算法只关注变化的部分，而不是整个 dom 树。
- 性能优化：通过勇士虚拟 dom 和高效的 diff 算法，Vue 能够减少不必要的 dom 操作，从而提高性能。
- key 的重要性：在使用 v-for 循环时，使用唯一的可以作为 key，帮助更准确的识别节点，提高 diff 算法的效率。

## vue 怎么做权限管理？

一、

1. 前端权限控制可分为：接口权限、按钮权限、菜单权限、路由权限。

二、

1. 接口权限：通过 登录拿到 token，每次接口请求的时候头部携带 token。

2. 接口权限：

- 初始化即挂载全部路由，在路由上标记相应的权限信息，每次路由跳转前做校验。
- 用户登录后，获取用户权限信息，筛选有权限访问的路由，在全局路由守卫里进行调用 addRoutes 添加路由。

3. 菜单权限：

- 菜单和路由分离，菜单由后端返回，前端定义路由信息。在全局路由守卫里判断后端返回的菜单信息中有与路由 name 对应的字段，做唯一性校验。
- 菜单和路由都由后端返回，前端处理后端返回的路由组件格式，将 component 字段换为对应显示的组件。

4. 按钮权限：

- v-if 进行判断按钮显隐。
- 通过自定义指令进行按钮权限的判断。【推荐】

## vue 项目中如何解决跨域的问题？

一、跨域介绍：跨域本质是浏览器基于同源策略的一种安全手段。

**同源具有三个相同点：** 协议相同，主机相同，端口相同。
非同源请求，即 协议、主机、端口任一项不相同，就会产生跨域问题。

二、解决方法：

- JSONP
- CORS
- Porxy

        在开发阶段，通过vue-cli脚手架工具搭建项目，在根目录下通过配置`vue/vite.config.js`文件来设置代理：

        ```js
        export default defineConfig({
          plugins: [
            vue(),
            ],
          server: {
            proxy: {
               "/api": {
                target: "http://127.0.0.1:4523/m1/1049809-0-default",
                },
            },
          },
          });
        ```

## 谈谈对 vue 设计原则的理解？

## vue3 特性：

1. 更快的性能：Vue3 在性能方面有显著提升：优化的虚拟 DOM 实现、静态树提升、静态属性提升等技术。
2. 更小的体积：Vue3 在保持功能完整性的同时，通过摇树优化核心库体积，使得整个库更加轻量化。
3. 更友好的 TypeScript 支持：Vue3 原生支持 TypeScript，提供了更强大的类型推断和代码补全功能，有助于提高代码的可靠性和可维护性。
4. 更好的调试支持：Vue3 提供了改进的调试支持，包括更清晰的错误信息和警告，以及更直观的开发者工具。
5. 基于 Proxy 的数据响应式：Vue3 使用了 Proxy 作为观察机制，相比 Vue2 中的 Object.Property，提升了性能并减少了内存开销。
6. Composition API：Vue3 引入了组合式 API，使得组件的逻辑可以更灵活地组织和复用，解决了 Vue2 中复杂组件逻辑难以维护的问题。
7. 静态树提升和静态属性提升：Vue3 的编译器能够检测到静态内容，并将其提升，从而减少渲染了成本和内存开销。
8. 跨平台：Vue3 的编译器核心和运行时核心与平台无关，可以更轻松地与各种平台（Web、Android、iOS 等）一起使用。

## Vue 性能优化方法：

- 路由懒加载
- keep-alive 缓存页面
- 使用 v-show 复用 DOM
- v-for 遍历避免同时使用 v-if
- 长列表性能优化
- 如果列表是纯粹的数据展示，不会有任何变化，就不需要做响应式
- 如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容
- 事件的销毁（Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件）
- 图片懒加载（对于图片过多的页面，为了加速页面加载速度，很多时候需要将页面内未出现在可视区域内的图片先不做加载，等到滚动到可视区域后再加载）
- 第三方插件按需引入
- 无状态的组件标记为函数式组件
- 子组件分割
- SSR

## Vue3 性能提升主要是通过哪几方面体现的？

1. 响应式系统改进：Vue3 使用基于 Proxy 的响应式系统，替代 Vue3 中的 Object.defineProperty。
   优点：

- 动态属性监听：可以监听对象新增和删除属性
- 更全面的响应式支持：除了对象，数组和其他类型的响应式支持也得到了增强
- 更好的性能：新的响应式系统在某些场景下提供了更好的性能表现。

2. 编译优化：

- Vue3 的模板编译器进行了优化，生成的渲染函数更加高效，
- 优化包括减少了不必要的 DOM 操作和提高了渲染效率。

3. 源码体积优化：Vue3 支持 ES6 模块，允许按需引入，只引入实际使用的功能，有效减少了最终打包文件的体积

4. Diff 算法优化：Vue3 中的虚拟 DOM diff 算法进行了优化，引入静态标记来区分静态节点和动态节点；减少不必要的比较和更新，从而提高性能。

5. 静态提升：Vue3 对不参与更新的元素进行了静态提升处理，这些元素只会被创建一次，在后续渲染时直接复用，从而减少了不必要的渲染开销。

6. 事件监听缓存：Vue3 对事件监听器进行了缓存，避免了重复绑定相同的事件监听器，从而减少了 DOM 操作。

7. SSR 优化：当静态内容大到一定量级的时候，会用 createStaticVNode 方法在客户端生成一个静态虚拟节点，这些静态内容可以在首次渲染时被标记为惊天，并在后续客户端渲染时直接复用，避免不必要的 DOM 更新。

8. 更好的 TS 支持：Vue3 更好地集成了 TypeScript，提供了更好的类型支持。

## SPA（单页应用）首屏加载速度慢怎么解决？

一、加载慢的原因：

- 网络延时问题。
- 资源文件体积过大。
- 资源是否重复发送请求去加载。
- 加载脚本的时候，渲染内容堵塞。

二、 解决方案
优化首屏加载：

1. 减少入口文件体积

- 路由懒加载。一函数的形式动态加载路由，这样可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载该路由对应的文件。

2. 静态资源本地缓存

- 后端返回资源：采用 http 缓存，设置 Cache-Control，Last-Modified,Etag 等响应头。采用 Service Worker 离线缓存。
- 前端合理利用 localStorage。

3. UI 框架按需加载

4. 图片资源的压缩

- 对于页面上使用到的 icon，可以使用在线字体图标，或雪碧图，将众多小图标合并到同一张图上，来减轻 http 请求压力。

5. 组件重复打包

6. 开启 GZip 压缩
7. 使用 SSR（服务端渲染）

<img src="./Image/首屏加载优化.png">

## SSR 解决了什么问题？举例说说怎么做的 SSR?

一、介绍：

SSR 即 服务端渲染，是一种网页渲染技术，网页的内容在服务器生成 HTML，然后发送给客户端浏览器进行展示。与传统的客户端渲染不同，SSR 不依赖于客户端执行 JavaScript 来生成页面的内容。

二、 SSR 的优势：

1. 首屏加载速度快：通过在服务器上预渲染 HTML，减少了客户端渲染的负担，从而提高了首屏加载速度。
2. 搜索引擎优化：SSR 可以生成完整的 HTML 页面，使搜索引擎能够正确抓取页面内容，提高网站的可见度。
3. 更好的性能：大部分渲染工作已经在服务器端完成，减轻了客户端设备的负担；即使在网络连接较慢的情况下，用户也能很快的看到页面内容。

三、 SSR 应用场景：1）大型网站；2）单页应用；3）静态站点生成器

说明：在 Vue3 实现 SSR，需要下载 SSR 相关依赖【npm install vue @vue/server-renderer】，目前项目未使用到 SSR，使用脚手架和 vite 已经满足大部分需求，如果需要使用 SSR，可以参考官方文档。

## watch 和 computed 的区别以及怎么选用？

在 Vue3 中，`watch`和`computed`是两种不同的响应式特性，它们主要区别在使用场景和触发时机。

1. computed：

- `computed`属性用于派生状态，它会根据其所依赖的响应式数据自动计算出一个新的值，并且只在依赖数据发生变化时才会重新计算。
- 适用于需要根据其他数据计算得出的衍生值，比如 根据数据属性显示一个标签的样式、对数据的过滤、排序、格式化等。

2. watch：

- `watch`函数用于观察特定的数据，并在数据变化时执行自定义方法。
- `watch`可以监听具体的数据变化，也可以监听多个数据的变化，甚至可以进行深度监听。
- 适用于需要在数据变化时执行异步操作、执行副作用操作、或者需要监听非响应式数据的变化。
  选择使用`computed`或`watch`，取决于具体的需求：
- 如果是根据其他响应式数据计算出一个新值，并且该值会被频繁使用，那么应该使用`computed`。
- 如果需要监听某个特定数据的变化，并且在数据变化时执行一些副作用操作或者执行异步操作，则使用`watch`。

```js
import { reactive, computed, watch } from "vue";

const state = reactive({
  count: 0,
  doubleCount: computed(() => state.count * 2),
});

watch(
  () => state.count,
  (newValue, oldValue) => {
    console.log(`count 发生变化，新值为: ${newValue}`);
  }
);

// 修改 count 的值
state.count = 10;
// 控制台输出：count 发生变化，新值为: 10
```

## nextTick 使用

`nextTick`用于在下次 DOM 更新之后执行的回调函数。比如在修改数据后立即获取更新后的 DOM 元素的信息或进行一些 DOM 操作。

## Vue-router 跳转和 location.href 有什么区别

**综述：**

- Vue Router：页面切换不需要刷新整个页面，提供更好的用户体验。提供丰富的路由功能、包括路由守卫、动态路由、嵌套路由等。适用于现代单页应用，需要复杂的路由管理。
- `location.href`：页面会整体刷新，体验差。只能做简单的提哦啊黄钻，没有额外的路由功能。适用于传统多页应用，或需要完整刷新页面的场景。

`Vue Router`：

- Vue Router 使用 JavaScript 来处理路由，不会导致页面刷新；页面跳转时，页面的组件会重新渲染，但浏览器不会完整的刷新页面，资源不会重新加载；
- 支持路由之间传递参数和状态；可以通过`$route`对象获取当前路由的参数、查询字符串等；
- 提供路由守卫功能，可以在路由跳转之前或之后执行特定逻辑，如 身份验证、数据预加载等；
- 支持嵌套路由，方便管理复杂的视图层次。
- URL 美化：支持动态路由参数、命名路由、编程式导航等功能，URL 结构更清晰。

`loaction.href`：

- 设置`location.href`会导致浏览器进行完整的页面刷新；浏览器会重新加载所有资源(html、css、js)，可能会导致性能问题。
- 无法直接在路由之前传递复杂的状态，通常需要通过 URL 参数传递信息；刷新状态会丢失，且会重新加载和初始化；
- `loaction.href`是浏览器原生的跳转方式，适用于简单的页面跳转需求，不适合复杂的单页应用场景

## v-on 可以监听多个方法吗？请举例说明

`v-on`指令可以监听多个方法。可以通过在同一个元素上多次使用`v-on`指令，每次绑定不同的事件和方法来实现监听多个方法的效果。

```html
<button v-on="{ click: method1, mouseover: method2 }">
  点击或悬停调用方法
</button>
```

## vue2 项目升级到 vue3，有哪些需要修改的

1. Vue 版本升级：npm/yarn/cnpm 更新 Vue，Vue2--> Vue3。
2. Composition API 替代 Options API：vue3 引入组合式 API，提供更灵活、可复用性更高的组件逻辑编写方式。需要将原有的 Options API 的组件逻辑重构为 Composition API。
3. 组件库：注意是否兼容 Vue3，并进行升级。
4. Vue Router 和 Vuex 升级：注意将项目中的使用了 Vue Router 和 Vuex 版本升级兼容 Vue3 版本。
5. 过渡和动画的更新：
6. Vue3 新特性和语法更新：
7. 第三方库和插件：确保兼容 Vue3 ，或使用其他替代方案
8. 性能优化和代码优化：Vue3 中引入许多性能优化和代码优化的改进，

## 在 vue3 中为什么推荐使用 ref 而不是 reactive

1. 更轻量：ref 通常比 reactive 更轻量，因为它只是创建一个响应式引用，而不是 reactive 创建的是一个包含多个属性的对象。
2. 更透明： 使用 ref 可以避免在模板中使用.value 后缀，因为 ref 本身就会返回它内部的值，这样让模板看起来更直观和透明。
3. 模板中的易用性：在 vue 模板中，ref 可以直接在模板表达式中使用，而不需要额外的.value 访问，让模板更简洁。4.
4. TypeScript 支持：ref 提供了更好的 TypeScript 类型推断，因为 TypeScript 可以识别 ref 包裹的值的类型，而 reactive 返回的是一个 ReactiveRef 类型的对象。
5. 函数式编程：ref 更符合函数式编程范式，它允许你将响应式变量作为参数传递给函数，而不需要关心其响应式包装。
6. 避免副作用：某些情况下，使用 ref 可以避免不必要的副作用，因为只有主动解包 ref(即访问.value)时，才会触发响应式更新。
   【例如：1. 初始化数据：需要在组件初始化时设置一些初始数据，并且这些数据在后续组件的生命周期中不会发生变化时，使用`ref`可以避免不必要的响应式更新。2. 定时器和事件监听器：需要在组件中使用定时器或事件监听器时，使用`ref`可以避免不必要的重新渲染。因为定时器或事件监听器通常会导致组件重新渲染，而使用`ref`可以延迟使用响应式更新，直到显式地访问`ref`。

   ```js
   import { ref, onMounted } from "vue";
   export default {
     setup() {
       const count = ref(0);
       onMounted(() => {
         setInterval(() => {
           // 只有当我们显式地访问 ref 时，才会触发响应式更新
           count.value++;
         }, 1000);
       });
       return {
         count,
       };
     },
   };
   ```

## 在 vue3 中 setup 是如何获得组件实例的？

- 在 setup 和其他 CompositionAPI 中没有 this；可以通过 getCurrentInstance 获取当前实例。
  如果是使用的 OptionsAPI 可以像 vue2 一样使用 this 获取。

```js
import { onMounted, getCurrentInstance } from "vue";
export default {
  data() {
    return {
      x: 1,
    };
  },
  setup() {
    //<!-- 这里打印是 undefined，setup里没有this -->
    console.log(this); // undefined
    onMounted(() => {
      console.log(instance.data.x); //输出：1
    });
    const instance = getCurrentInstance();
    //<!-- 这里打印是 undefined，因为setup声明周期是 beforeCreated和created合并的，这时候data还没有初始化，所以要在onMounted里打印 -->
    console.log(instance.data.x); //输出：undefined
  },
};
```

## vue3 中 setup 的使用和原理解析

- setup 带来的改变：
  <!-- 1. 解决了 vue2 的 data 和 methods 方法相距太远，无法组件之间复用
  2. 提供了 script 标签引入共同业务逻辑的代码块，顺序执行
  3. script 变成 setup 函数，默认暴露给模板
  4. 组件直接挂载，不需要注册
  5. 自定义的指令也可以在模板中自动获得
  6. this 不再是这个活跃实例的引用
  7. 带来的大量全新 api，比如 defineProps，defineEmits，toRef，toRefs，withDefault... -->
  1. 属性和方法不需要返回，可以直接使用；
  2. 引入的组件会自动注册，不需要通过 components 手动注册；
  3. 使用 defineProps 接收父组件传递的值；
  4. useAttrs 获取属性，useSlots 获取插槽，defineEmits 接收事件；
  5. 可以通过 defineExpose 来暴露组件的属性和方法。
  - ref 带来的改变：
    Vue 提供了一个 ref()方法来允许我们创建可以使用任何值类型的响应式数据；
  - reactive 带来的改变：
    可以使用 reactive()函数创建一个响应式对象或数组；reactive 可以隐式地从它的参数中推导类型；使用 interface 进行类型标注。
- 在 setup()函数中手动暴露大量的状态和方法非常繁琐。可以使用 setup 语法糖在简化代码`<script setup>`。`<script setup>`中的顶层导入和变量声明可在同一组件的模板中直接使用，里面的代码会被编译成组件 setup()函数的内容。
  官方解答：`<script setup>`是在单文件(SFC)中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的`<script>`语法具有的优势： - 更少的样板内容，更简洁的代码。 - 能够使用纯 TypeScript 声明 props 和自定义事件。 - 更好的运行时性能（其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象）。 - 更好的 IDE 类型推导性能（减少了语言服务器从代码中抽取类型的工作）。
  setup 执行是在创建实例之前就是 beforeCreate 执行，所以 setup 函数中的 this 还不是组件的实例，而是 undefined，setup 是同步的。

## vuex 和 localStorage 有什么区别

首先两者都是用于 vue 中存储数据的工具。根据具体的业务需求和场景选择合适的工具来管理数据。
区别：

1. 数据存储位置：

- Vuex 是 vue 官方提供的状态管理库，用于共享状态。vuex 存储的数据是存储在内存中的，仅在当前页面生命周期内有效。Vuex 的数据是响应式的，可以实时地进行读写和更新。
- localStorage 是浏览器提供的 Web 存储 API 之一，用于在浏览器中永久性地存储数据。localStorage 中存储的数据是以键值对的形式存储在浏览器的本地文件系统中，并在浏览器关闭后仍然有效。

2. 数据持久性：

- Vuex 中存储的数据侄子啊当前页面生命周期内有效。当页面刷新或关闭时，Vuex 中的数据会丢失，需要重新初始化。
- localStorage 中存储的数据是永久性地，即使浏览器关闭后再次打开，数据仍然有效。页面刷新或关闭也不会丢失，除非主动删除。

3. 数据管理范围：

- Vuex 中的数据可以被任何组件访问和修改，可以实现全局的状态管理和数据通信。
- localStorage 用于在同一个域名下的不同页面之间共享数据，通常用于持久化存储用户的登录状态、用户设置等信息。

4. 数据安全性：

- Vuex 中的数据存储在内存中，相对来说比较安全，不容易被恶意篡改或窃取。但刷新页面或关闭浏览器，Vuex 中的数据会丢失。可以通过相关插件实现持久化，达到刷新页面不丢失数据。
- localStorage 中的数据是存储在浏览器的本地文件系统中，相对不够安全，容易被恶意脚本访问和窃取。不建议在 localStorage 中存储敏感信息，【密码、银行卡号...

## vue3/vue2 组件通信方式

Vue3 八种通信方式：

- props
- $emit
- expose/ ref
- $attrs
- v-model
- provide/inject(原理：原型链)
- vuex/pinia
- mitt

vue2 的 12 中通信方式：

- porps
- $emit/ v-on
- .sync
- v-model
- ref
- children/ parent
- attrs/ listeners
- provide/ inject
- EventBus
- vuex
- $root
- slot

## EventBus 与 mitt 区别

vue2 中使用 EventBus 来实现跨组件之间的一些通信，依赖于 vue 自带的$on/$emit/$off 等方法，这种方式使用简单方便，但如果使用不当也会带来难以维护的毁灭灾难。
vue3 中移除了这些相关方法，对于 vue3 中官方建议的外部辅助库 mitt 优点：

- 体积小；
- 完整 TS 支持；
- 可跨框架使用；
- 使用简单，仅有 on、emit、off 等少量实用 API。

## 说说 vue3.0 中 Treeshaking 特性？举例说明

一、介绍：
Tree shaking 是一种通过清除多余代码方式来优化项目打包体积的技术。是基于 ES6 模块系统的特性，在使用 ES6 的 import/export 语法时，编译器会根据模块的引用情况，自动去除未引用的代码，从而达到 Tree shaking 的目的。

二、原理步骤：

1. 分析依赖图：构建工具会分析项目的依赖关系，确定哪些模块和模块中的导出成员被实际使用。
2. 移除未使用的代码：对于那些未被导入的模块和成员，构建工具会从最终的构建产物中移除它们。

三、总结：

vue3 中的 Tree Shaking 特性通过以下几种方式优化应用打包体积：

- 按需引入：只引入使用到的功能。
  【如：只需要用到 watch 和 ref 两个 API，只用引入 import { ref, watch } from 'vue';不需要引入整个 Vue 库】
- ES6 模块化：Vue3 使用 ES6 模块化，使得 Tree Shaking 工具可以静态分析代码，移除未使用的导出部分
- Composition API：Vue3 使用 Composition API， 使得代码更加模块化，增强 Tree Shaking 的效果。【使得组件可以拆分为多个函数，每个函数可以单独被 Tree Shaking 工具移除】
