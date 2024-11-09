# this 指向

<div class="tiwen">
<div>this四种绑定规则：默认绑定、隐式绑定、显式绑定、new绑定，并分析其优先级。一些函数如setTimeout、监听点击、数组方法中的this情况，规则之外的特殊情况。</div>
</div>

## this 是什么

1. <span class="title-key">this：</span> 是在函数执行时用来指代 **当前执行上下文** 的对象。
   - 因为只有当函数执行时，才会创建对应的 FEC(函数执行上下文)。说明`this`的值是在函数被调用时确定的，而不是定义时确定的。
   - 不同调用方式下，`this`的指向会有所不同，函数执行时的上下文决定了`this`的值。

### 全局作用域下 this 的指向

1. `this`在全局作用域下
   - 浏览器：window
   - Node 环境： {}空对象
2. 但很少在全局作用域下使用 `this`，通常都在 **函数中使用**

```js
// 浏览器情况
console.log(`output->this`, this);
console.log(`output->window`, window);
console.log(`this === window`); // true
```

#### node 环境下为什么 this 是空对象

- node 环境下，全局作用域中的`this`指向一个空对象`{}`。这是由 Node.js 的模块化极致化和运行环境设计所决定的。
- Node.js 的定义的模块系统中，当一个模块加载时，Node 会将模块代码包裹在一个函数作用域中，确保模块代码独立执行，避免与其他模块发生冲突。同时，Node.js 会将`this`绑定到模块的`exports`，所以默认指向`{}`。

1. **Node.js 的模块封装机制**：在 Node.js 中，每个 JavaScript 文件都被视为一个独立的模块，而不是共享的全局作用域。
2. **this 指向的变化** ：在每个模块中，Node.js 将`this`重新绑定为该模块的局部作用域。即`{}`。具体来说，模块内部的顶层`this`实际上指向的是模块的`exports`对象，这也是一个空对象`{}`。

<div class="code-title">Node部分this源码：</div>

![Node部分this源码](../image/Node%E9%83%A8%E5%88%86this%E6%BA%90%E7%A0%81.png)

- 从 Node 源码中，可以看到默认的`this`值是指向模块的`exports`对象的。
- 把内容抽象出来，就是如下部分，导入导出，模块名，文件名，目录名，然后进行整体操作。

```js
(function (exports, require, module, __filename, __dirname) {
  // 模块代码
});
```

### 同一个函数 this 的不同

<div class="tip-box">
<div>1. this指向什么，跟函数所处的位置没有关系，跟函数被调用的方式有关系</div>
</div>

<div class="code-title">代码示例：</div>

```js
// 浏览器运行

function fun() {
  console.log(`output->this`, this);
}
// 1. 直接调用函数
fun();

// 2. 创建一个对象，对象中的函数指向fun
var obj = {
  name: "小雨",
  fun: fun,
};
obj.fun();

// 3. apply调用
fun.apply("rain");
```

![函数三种调用方式效果](../image/%E5%87%BD%E6%95%B0%E4%B8%89%E7%A7%8D%E8%B0%83%E7%94%A8%E6%96%B9%E5%BC%8F%E6%95%88%E6%9E%9C.png)

<span class="title-key">说明：</span>

1. 函数调用时，JavaScript 会默认给`this`绑定一个值
2. `this`的绑定和 <span class="key-word-line">定义的位置(编写的位置)没有关系</span>
3. `this`的绑定和 <span class="key-word-line">调用方式以及调用的位置有关系</span>
4. `this`是在运行时被绑定的。

<div class="code-title">函数调用内存图：</div>

![函数调用内存图](../image/%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E5%86%85%E5%AD%98%E5%9B%BE.png)

## this 绑定规则

<div class="tiwen">
<div>this的绑定规则中()，只有显式绑定 可以人为的改变this指向，其他三种绑定规则都是不变的。</div>
<div>简单来说，this就是在函数调用时被绑定的一个对象，知道它在不同类型场景下的绑定规则即可。</div>
</div>

### 默认绑定

- 默认绑定的情况：<span class="key-word-line">独立函数调用</span>
  - 独立函数调用，可以理解成函数没有被绑定到某个对象上进行调用。
  - 这种情况下，`this` 指向就是 `window`

```js
//案例1
//函数在被调用的时候，没有被绑定在任何的对象上面，也没有使用apply等方式调用
function foo() {
  console.log(this);
}

foo();

// 案例2
function foo1() {
  console.log(`output->foo1`, this);
}
function foo2() {
  console.log(`output->foo2`, this);
  foo1();
}
function foo3() {
  console.log(`output->foo3`, this);
  foo2();
}
foo3();
```

<div class="image-text">this默认指向-案例代码结果：</div>

![this默认指向代码结果](../image/this%E9%BB%98%E8%AE%A4%E6%8C%87%E5%90%91%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%9C.png)

```js
// 案例3
var obj = {
  name: "小雨",
  foo: function () {
    console.log(`output->this`, this);
  },
};
var fn = obj.foo;
fn(); //  this指向window，而不是obj

/* 说明：将obj.foo赋值给fn，fn成为独立函数，不再与obj绑定。
当调用fn()时，this的值是根据函数调用的上下文决定的。
在这个情况下，由于fn是全局上下文中被调用，JavaScript将this绑定到全局对象，即window。 
 */

// 案例4
function foo() {
  console.log(`output->this`, this);
}
var obj = {
  name: "小雨",
  foo: foo, // 将foo函数赋值给obj的foo属性
};
var bar = obj.foo; //将obj.foo赋值给bar
bar();

/* 说明：当我们调用 bar() 时，this 的值同样是根据调用上下文来决定的。
由于 bar 也是在全局上下文中被调用，this 被绑定到全局对象，因此输出的结果仍然是 output->this window
 */

// 案例5
// 1. 独立调用
function foo() {
  function bar() {
    console.log(`output->this`, this);
  }
  return bar;
}
var fn = foo();
fn();
// 说明：此时fn函数调用时返回window，fn调用时foo函数里面的bar函数，并没有牵扯到foo函数上，属于独立调用。

// 2. 隐式绑定,闭包不再指向window形式：
var obj = {
  name: "Rain",
  age: fn,
};
obj.age(); //隐式绑定
/*  说明：
    这种调用方式，js引擎会将obj绑定到age的函数内部。
    调用顺序： age->fn-->bar，bar函数被作为对象的方法调用，this的指向为 obj
 */
```

### 隐式绑定

- 隐式绑定： **通过某个对象发起的函数调用**

<div class="image-text">案例1：</div>

```js
// 隐式绑定

var obj = {
  name: "小雨",
  eating: function () {
    console.log(`输出结果->`, this.name + "在吃东西");
  },
  running: function () {
    console.log(`输出结果->`, this.name + "在跑步");
  },
};
obj.eating(); // 输出结果-> 小雨在吃东西
obj.running(); // obj 和running 有绑定关系  输出结果-> 小雨在跑步

var fn = obj.eating;
fn(); // 解除了obj和eating方法的绑定关系  输出结果-> 在吃东西
```

<div class="image-text">案例2：</div>

```js
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(`output->this`, this);
  },
};
var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};
obj2.bar();
// node环境返回结果： output->this { name: 'obj2', bar: [Function: foo] }
```

<div class="image-text">控制台结果：</div>

![this隐式指向-打印结果](../image/this%E9%9A%90%E5%BC%8F%E6%8C%87%E5%90%91-%E6%89%93%E5%8D%B0%E7%BB%93%E6%9E%9C.png)

<span class="title-key">说明：</span>

- 通过代码案例，调用 `obj2` 中的 `bar` 属性，`obj2.bar` 属性调用 `obj1` 中的 `foo 函数`。其实不算调用，因为没有`()`，就不会执行，而是转为存储 `foo` 的内存地址(类似 0xa00)
- 通过控制台打印结果看到 `this` 指向 `obj2` 身上，首先 `bar` 调用到了 `obj1` 中的 `foo` 函数身上，但是最后执行，是通过 `obj2` 来执行的，所以 `obj2` 就被绑定到了 `foo 函数`里，所以此时 `foo 函数`控制台打印 `this` 结果是 `obj2` 里面的内容

### 显式绑定

- 显式绑定：通过几个特定的原生 API 方法，**主动的改变 this 指向**

#### apply、call、bind 的使用

- `apply语法`：func.apply(thisArg, [argsArray])
- `call语法`：func.call(thisArg, arg1, agr2, ...)
- `bind语法`： func.bind(thisArg[,arg1[,arg2[,...]]])

1. `apply`、`call`、`bind` 三者的使用区别：

- `bind()` ———— 绑定`this`并<span class="key-word-line"> 返回一个新的函数 </span>，可以 <span class="key-word-line"> 重复使用 </span>。
- `call()` ———— 绑定并调用函数，适用于 <span class="key-word-line"> 逗号分隔 </span> 的参数传递。
- `apply()` ———— 绑定并调用函数，适用于 <span class="key-word-line"> 数组 </span> 传递参数。

<div class="code-title">用法代码示例：</div>

```js
// call用法
function greet(greeting) {
  console.log(`output->${greeting}, ${this.name}!`);
}
const person = { name: "小雨" };
greet.call(person, "你好"); // output->你好, 小雨!

// apply用法
function greetApply(greeting, arrArg) {
  console.log(`output->${greeting}, ${this.name}${arrArg}`);
}
const person2 = { name: "Rain" };
greet.apply(person2, ["你好", "很高兴见到你"]); //  output->你好, Rain!

// bind用法
function greetBind(greeting) {
  console.log(`output->${greeting}, ${this.name}!`);
}
const person3 = { name: "小雨Rain" };
const greetPerson = greetBind.bind(person3, "你好啊");
greetPerson(); // output->你好啊, 小雨Rain!
```

2. `bind` 的特别之处：

- `bind` 函数会返回新的内容，但不会修改原本函数的 `this`(他们指向的不是同一块内存空间，而是不相干的两处地方，)
- `call` 和 `apply` 函数是 立即调用函数，并改变调用对象。
- `bind` 函数可以在调用时指定函数的参数，而 `call` 和 `apply` 函数则需要在调用时传入所有的参数。

```js
/*
 ** 显式绑定bind函数优先级高于默认绑定
 */
function foo() {
  console.log(`output->this`, this);
}
// 默认绑定和现实绑定bind冲突
var newFoo = foo.bind("小雨");

var bar = foo;
console.log(`output->bar === foo`, bar === foo); // output->bar === foo true
console.log(`output->newFoo === foo`, newFoo === foo); // output->newFoo === foo false
/* 
`newFoo === foo` 返回是false，证明了bind函数会返回新内容，不会修改原本函数的this
 */
```

### new 绑定

`new`绑定，在使用`new`操作符调用函数时会创建一个新的对象，并将`this`绑定到新对象。构造函数通常使用`new`操作符来创建对象实例，确保`this`指向新实例。

```js
function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // this 指向 person，输出 Alice
```

- 使用`new`关键字来调用函数，大致分为三步：

1. **创建一个新对象**： 以构造器的 prototype 属性为原型，创建全新对象
2. **绑定 this 到新对象**：将 this(可理解为上句创建的新对象)和调用参数传给构造器，执行
3. **返回新对象**：如果构造器没有手动返回其他对象，则返回第一步创建的新对象。

## 一些函数的 this 分析

### setTimeout 定时器

- `setTimeout`中的 `this` 不绑定特定上下文，回调函数默认是 独立调用。
  - **非严格模式下**，`this` 默认指向全局对象。浏览器中：`window`。Node.js 中为`{}`
  - **严格模式下**，`this` 的默认值为 `undefined`
- 使用箭头函数，`this` 保留的时箭头函数定义时的上下文。

```js
const obj = {
  value: "Hello, World!",
  showThis: function () {
    // 普通函数
    setTimeout(function () {
      console.log(this); // 非严格模式：全局对象（`window` / `global`）
    }, 1000);

    // 箭头函数
    setTimeout(() => {
      console.log(this); // 保留 `obj`，即箭头函数定义时的 `this`
    }, 1000);
  },
};

obj.showThis();
```

### 监听点击

1. 当点击一个绑定了点击事件的 html 元素，事件处理函数中的`this`会指向 **触发事件的那个元素(即 事件的当前目标 `event.currentTarget`)**
2. 如果是箭头函数作为事件处理函数，`this`不会指向触发事件的元素，而是指向箭头函数定义的上下文。

```html
<body>
  <button id="myBtn">Click Me</button>
  <script>
    document.getElementById("myBtn").addEventListener("click", function () {
      console.log(`output->this`, this); //  输出为点击的按钮元素，即 <button id="myButton">Click Me</button>
    });
    document.getElementById("myBtn").addEventListener("click", () => {
      console.log(`output->this`, this); // 不指向按钮元素，而是指向定义箭头函数时的上下文(这里是 window)
    });
  </script>
</body>
```

### 数组中的绑定

```js
var names = ["ABC", "小雨", "Rain"];
// 允许使用第二个参数 thisArg 来指定回调函数中 this 的指向。
names.forEach(function () {
  console.log(`output->forEach`, this);
}, "小雨+Rain");

names.map(function () {
  console.log(`output->map`, this);
}, "小雨+Rain");

names.filter(function () {
  console.log(`output->filter`, this);
}, "小雨+Rain");

names.find(function () {
  console.log(`output->find`, this);
}, "小雨+Rain");

//   箭头函数
names.forEach(() => {
  console.log(`output->forEach箭头函数`, this); // window
}, "小雨+Rain"); //箭头函数，thisArg不生效
```

<div class="image-text">forEach map filter find高阶函数对比情况：</div>

![forEach map filter find高阶函数对比情况](../image/forEach%20map%20filter%20find%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0%E5%AF%B9%E6%AF%94%E6%83%85%E5%86%B5.png)

## this 规则优先级

- 绑定优先级：new > 显式 > 隐式 > Window

- 总结：
  | 绑定类型 | 描述 | 优先级 |
  | :----------- | ------------------------------------------------------------------------------------------------------------------------- | --------- |
  | New 绑定 | 当函数或方法被作为构造函数使用时，使用 new 关键字调用，this 绑定到新创建的对象上 | 最高 |
  | 显式绑定 | 使用`.apply()`、`.call()`、`.bind()`方法直接指定`this`的上下文。`bind()`方法返回的时新函数 | 中高 |
  | 隐式绑定 | 当函数作为对象的方法调用时，`this`绑定到该对象。如果函数在多层对象内，`this`指向最近一层的对象 | 中低 |
  | 默认绑定 | 在非严格模式下，单独调用函数，`this`指向全局对象(浏览器`window`，Node.js 中`{}空对象`)；在严格模式下，`this`为`undefined` | 最低 |
  | 箭头函数 | 词法作用域绑定，不受以上规则影响 | --- |

## this 规则之外

### 特殊绑定——忽略显式绑定

- apply、call、bind：当传入`null/undefined`时，自动绑定成全局对象
  - 显式绑定的三种方法在`null/undefined`的情况下，就会被忽略，变为最基础的默认绑定

```js
function foo() {
  console.log(this);
}
foo();
foo.apply(null);
foo.apply(undefined);
//打印出来全部都是window，可以看到填入 null跟undefined打印出来的也是全局的对象
```

### 特殊绑定——间接函数引用

- 创建一个函数的间接引用，这种情况使用默认绑定规则
  - 赋值表达式(obj2.foo = obj1.foo)的结果返回值是目标函数的引用，因此调用的位置是`foo()`，而不是`obj2.foo()`或`obj1.foo()`。那么就是`foo函数`被直接调用，即默认调用`window`

```js
//争论：代码规范，到底加不加分号;
var obj1 = {
  name: "这是onj1",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "这是obj2",
};

obj2.foo = obj1.foo;
obj2.foo()(
  //{ name: '这是obj2', foo: [Function: foo] }

  //第二种情况，比较难的情况
  (obj2.foo = obj1.foo)
)();
//  ---------------------
// 相当于变成：
var obj2 = {
  name: "这是obj2",
}((obj2.foo = obj1.foo))();
// 报错： Uncaught TypeError: obj2.foo(...) is not a function

// ---------------------
var obj2 = {
  name: "这是obj2",
};
(obj2.foo = obj1.foo)(); // 正常返回window
```

### 《你不知道的 JavaScript》测试代码

```js
function foo(ele) {
  console.log(`output->ele:`, ele, `output->this:`, this);
}
var obj = {
  id: "Rain",
}[(1, 2, 3)].forEach(foo, obj);
// 报错：Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
// ------------------------------------

// 解决方法1
function foo(ele) {
  console.log(`output->ele:`, ele, `output->this:`, this);
}
var obj = {
  id: "Rain",
};

var names = [1, 2, 3];
names.forEach(foo, obj);

// 解决方法2：
function foo(ele) {
  console.log(`output->ele:`, ele, `output->this:`, this);
}
var obj = {
  id: "Rain",
}; //加上分号
[1, 2, 3].forEach(foo, obj); // foo是独立定义了，obj是传入forEach中this要绑定的对象
```

- 原始代码问题在于 JavaScript 解析器将 `[(1, 2, 3)].forEach(foo, obj)` 解释为 一个属性访问表达式 `[(1, 2, 3)].forEach(foo` 和一个标签语句 `obj)`，导致语法错误。`foo`和`obj`中间的逗号被错误解析。

**解决方法 1：**

- 将数组存储在变量`names`中，是明确结束了声明语句，JS 代码会在回车换行后自动在变量后加上`;`。这样避免解析器将当前数组字面量解释为前一语句的一部分
- JavaScript 中实现在代码结尾自动加分好的机制叫做 **自动分号插入**(Automatic Semicolon Insertion,ASI)。这是 JavaScript 解析器的一个特性，允许省略某些情况下的分号，解析器会根据特定的规则自动补上。
- 因此，要避免直接字面量操作的解析问题，在 JS 中，如果连续的语句没有通过分号明确分隔，数组直接跟一个对象字面量后面可能被解释为尝试访问对象的属性或进行函数调用。

**解决方法 2：**

- 在`obj`对象声明后显式添加一个分号`;`，确保`obj`的声明被正确地结束。避免了 JavaScript 的自动分号插入(ASI)机制可能导致的问题，其中解释器可能不会在`obj`声明之后自动插入分号。
- 通过确保`obj`声明后有分号，可以安全地在数组`[1,2,3]`上调用`forEach`方法，并将`this`上下文绑定到`obj`，而不会引起语法解析错误。

## 关联面试题

<div class="tiwen">
<div>new绑定如何使用？显式绑定怎样实践？隐式绑定怎么理解？</div>
<div></div>
</div>

1. `new`绑定。使用`new`关键字调用一个函数时，`this`会被绑定到新创建的对象。
   - 创建一个新的空对象。
   - 绑定`this`到这个新对象上。
   - 继承函数的`prototype`属性。
   - 返回这个新对象(如果构造函数没有返回其他对象)
2. 显示绑定。通过`call`、`apply`、`bind`方法实现。手动指定`this`指向。
3. 隐式绑定。发生在调用对象方法时。若一个函数作为对象的属性被调用，`this`会隐式绑定到该对象上。特别情况，可能隐式绑定丢失。
4. `this`绑定优先级：`new`绑定 > 显式绑定(`call` `apply` `bind`) > 隐式绑定 > 默认绑定

```js
const person = {
  name: "Rain",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // 输出: Hello, Rain
//===============================
// 隐式绑定丢失
const person = {
  name: "Rain",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const greetFunction = person.greet; // 对象方法赋值给了另一变量，隐式绑定解除，此时关注点是 greetFunction，变成this的默认调用，this指向全局
greetFunction(); // 丢失隐式绑定，输出: Hello, undefined（严格模式）/ global（非严格模式）
```
