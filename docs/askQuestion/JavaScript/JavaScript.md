# JavaScript

## es6

### 如何理解 Promise 及使用场景？

一、介绍：
Promise 是用于处理异步操作的一种解决方案。优点：链式操作减低编码难度；代码可读性增强。

Promise 的三种状态：pending(等待中)；fulfilled(已成功)；rejected(已失败)

特点：

- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态；
- 一旦状态改变(pending 变为 fulfilled 和 pending 变为 rejected)，就不会再改变，任何时候都可以得到这个结果。

二、用法：
Promise 对象是一个构造函数，用来生成 Promise 实例。
Promise 构造函数接受一个函数作为参数，该函数两个参数分别为 resolve 和 rejecte

- resolve 函数作用：将 Promise 对象的状态从“未完成”变为“成功”。
- reject 函数作用：将 Promise 对象的状态从“未完成”变为“失败”。

三、 实例方法：then()；catch()；finally()

- then()： then 方法接收两个参数，第一个参数是 Promise 成功的回调函数，第二个参数是 Promise 失败的回调函数。then 方法返回一个新的 Promise 实例，也就是 Promise 能链式书写的原因。
- catch()：是.then(null,rejection) 或 .then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
  Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
  一般使用 catch 方法代替 then()第二个参数
- finally()：用于指定不管 Promise 对象最后状态如何，都会执行的操作。

四、Promise 相关方法：

- all()：Promise.all()方法适用于多个请求合并在一起，，汇总所有请求的结果。注意：所有的 promise 都成功时才返回结果。其参数传递一个数组，数组中记录所有的 promise 一步处理，然后进入.then，如果有一个异步执行了 reject，就会终止进入 catch，不会再进入.then。
- race()：Promise.race()方法只返回最快被处理的那一个 promise 的结果。
- any()：Promise.any()方法只会返回第一个成功的结果，如果第一个是失败的，就会拿不到。
- allSettled()：Promise.allSettled()方法 会返回所有 promise 的最终状态（无论成功还是失败），并提供每个 promise 的结果或错误信息。

### Generator

`Generator`是一种可以在执行过程中暂停和恢复的函数。

- `yield`可以暂停函数的执行。`next()`方法恢复执行。
- `Generator`函数状态可以是`suspended（暂停中）`或`completed（完成）`。

### async 和 await

`async/await`是基于 promise 的语法糖，可以简化异步操作的写法，使得处理异步操作更加直观和同步化。

- `async`：标记一个函数为一步函数，该函数会返回一个`Promise`
- `await`：用来暂停异步函数的执行，直到`Promise`被解决，然后返回结果。(只能在`async`函数内部使用.)

(async 和 await 的使用细节)[https://mp.weixin.qq.com/s/MiyHSzjCprtq99l8yKoPrw]

## JavaScript 部分

### JavaScript 有哪些数据类型及区别？

八种数据类型：Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

栈(先进后出)-基本数据类型：Undefined、Null、Boolean、Number、String；

堆(先进先出)-引用数据类型：Object、数组和函数。

- Symbol 代表创建后独一无二且不可变的数据类型，为解决可能出现的全局变量冲突的问题。
- BigInt 是一种数字类型的数据，可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。

### 数据类型检测方式

- typeof —— 数组、对象、null 都会被判断为 object，其他基本数据类型都可以判断正确。
- instanceof —— 正确判断对象的类型，即正确判断引用数据类型，不能判断基本数据类型。内部运行机制是判断在其原型链中能否找到该类型的原型。
- constructor —— 作用一：判断数据的类型；作用二：对象实例通过 constrcutor 对象访问它的构造函数。
- Object.prototype.toString.call()使用 Object 对象的原型方法 toString 来判断数据类型。
  【说明：Array、function 等类型作为 Object 的实例，都重写了 toString 方法。不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法(function 类型返回内容为函数体的字符串， Array 类型返回元素组成的字符串...)而不会去调用 Object 上原型 toString 方法(返回对象的具体类型)，所以采用 obj.toString()不能得到其对象类型，只能将 obj 转换为字符串类型；
  因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString 方法。】

  2.1 判断一个对象是空对象

  - JSON.stringify()
  - Object.keys()来判断

  ```js
  if (JSON.stringify(obj) == "{}") {
    console.log("空对象");
  }
  if (Object.keys(obj).length < 0) {
    console.log("空对象");
  }
  ```

### 简述 JavaScript 中的类型转换机制

一、概述：常见类型转换有：强制转换（显式转换）、隐式转换。

1. 强制转换（显式转换）常见方法：

- Number();
- parseLint();
- String();
- Boolean().

2. 隐式转换

- 发生隐式转换的情况：比较运算符(==、!=、===、>、<、if、while 需要布尔值地方)、算术运算符(+、-、\*、/、%)，且运算符两边的数据类型不一致。

1）自动转换为布尔值：undefined、null、false、+0、-0、NaN 会被转化为 false，其他非零数据都被转化为 true。
2）自动转换为字符串：在字符串和非字符串数据进行 相加运算 的时候会自动转换为字符串。
3）自动转换为数值：除了加号 可能转换为字符串，字符串和数字 进行其他的数学运算时，JavaScript 会尝试转为数字进行运算，且结果也是数字型。
4）比较操作符：① `==` 会先类型转换，再进行比较，null == undefined 是 true。② `===` 是更严格的比较，不仅比较数值是否相等，还会比较类型。null === undefined 是 false。

```js
// 字符/串 遇到‘+’会隐式转换，结果是拼接后的字符串
"5" + {}; // "5[object Object]"
"5" + []; // "5"
"5" + 1; // '51'
"5" + true; // "5true"
"5" + false; // "5false"
"5" + function () {}; // "5function (){}"
"5" + undefined; // "5undefined"
"5" + null; // "5null"
//==隐式转换为数字，进行计算====
/** null转为数值时，值为0 。undefined转为数值时，值为NaN **/
"abc" - 1; // NaN
undefined + 1; // NaN
"5" - "2"; // 3
"5" * "2"; // 10
true - 1; // 0
false - 1; // -1
"1" - 1; // 0
"5" * []; // 0
false / "5"; // 0
null + 1; // 1
```

### 数据类型检测方法

1. typeof

- 可以准确检测基本数据类型（string number boolean undefined symbol bigint），
- 但对于 null，typeof 返回的是 object。引用数据类型（object array function date RegExp）也会返回 object。

2. instanceof

- 用于检查一个对象是否是某个构造函数的实例，适用于引用类型的检测。

3. constructor

- 被检查对象的 constructor 属性可以获取到其构造函数，可以检测由字面量方式创建的对象类型

```js
const arr = [];
console.log(arr.constructor === Array);
```

4. Array.isArray：专门用于检测是否是数组

5. Object.prototype.toString.call()：是更加全面的数据类型检测方法。toString()方法是 Object 的原型方法，是一个内部属性，格式[object, Xxx]，Xxx 就是返回的数据类型。

```js
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]
Object.prototype.toString.call([]); //[object Array]
Object.prototype.toString.call(new RegExp()); // [object RegExp]
Object.prototype.toString.call(new Error()); // [object Error]
Object.prototype.toString.call(document); // [object HTMLDocument]
Object.prototype.toString.call(window); // [object global] window 是全局对象 global 的引用
```

6. Buffer.isBuffer()：专门用于检测 Buffer 类型

```js
const buffer = Buffer.from("hello");
console.log(Buffer.isBuffer(buffer)); //true
```

7. Lodash 库提供一系列的类型检测方法

### null 和 undefined 区别

两者都是基本数据类型。

- undefined 代表未定义，变量声明但未定义会返回 undefined，
- null 是对象。用于赋值给一些可能会返回对象的变量，作为初始化。typeof 进行检测类型，返回是 Object

### Object.is()与比较操作符“===”、"=="的区别

- 使用双等号(==)进行相等判断，如果两边类型不一致，会进行强制类型转化后再进行比较。不够严谨，尽量避免使用双等号。
- 使用三等号(===)进行相等判断，是比较值和类型都相等。
- 使用 Object.is()进行严格的相等判断，处理一些特殊情况：-0 和 +0 不相等，两个 NaN 是相等的。

### 深拷贝和浅拷贝方法

- 浅拷贝：只复制第一层属性，如果属性是引用类型，那么复制的是属性的引用地址，如果修改其中一个对象，另一个对象也会发生改变。
- 深拷贝：地柜复制对象的所有层级，新的对象与原始对象完全独立，修改其中一个对象，不会影响到另一个对象。

浅拷贝方法：

1. Object.assign()
2. 使用扩展运算符(...)
3. slice()或 Array.from()复制数组

深拷贝方法：

1. JSON.parse(JSON.stringify(obj))，适用对象和数组，但不能处理函数、undefined、Date、Map、Set 等特殊类型
2. 使用递归方法手写实现深拷贝
3. 使用第三方库，如 Lodash 的 `_.cloneDeep()`方法

### 数组常用方法

一、增：

- push()，数组尾部添加新元素
- unshift()，数组头部压入新元素
- splice(开始位置，要删除的元素数量，插入元素)
- concat()，不会都原数组产生影响

二、删：

- pop()，删除数组最后一个元素
- shift()，删除数组第一个元素
- splice(开始位置，删除元素数量)，会改变原数组，返回包含删除元素的数组。
- slice(),不会改变原数组

三、查：

- indexOf()，返回查找元素在数组中的下标索引，找不到则返回-1
- includes()，返回布尔值，判断数组中是否包含某个元素
- find()，返回第一个找到的元素，找不到则返回 undefined

四、排序

- reverse()，反转数组
- sort(),对数组元素进行排序

五、

- join(),将数组元素按照制定字符分隔，返回字符串

六、迭代方法：

- some(),对数组的每一项进行判断，至少有一个满足条件就返回 true，否则返回 false
- every(),对数组的每一项进行判断，所有满足条件才返回 true，否则返回 false
- forEach(),对数组的每一项进行遍历，没有返回值
- filter(),对数组的每一项进行判断，返回满足条件的元素组成的新数组
- map(),对数组的每一项进行遍历，返回一个新数组

### 字符串常用方法

- concat(),将一个或多个字符串拼接成一个新字符串
- slice()、substr()、substring()三个方法都可以实现字符串的截取，不会改变原字符串内容
- trim()、trimLeft()、trimRight()，去除字符串前、后或前后所有的空格，返回新的字符串
- repeat(一个整数参数)，表示将字符串复制多少次，返回拼接后的结果。
- toLowerCase()、toUpperCase()，将字符串转换为小写、大写，返回新的字符串
- chatAt(一个整数参数)，返回字符串中索引指定位置的字符，返回字符串。
- indexOf(),从字符串头部开始查找，返回查找 字符串 的下标索引值
- startWith()、includes()，从字符串中搜索传入字符串，返回布尔值

2. 模板匹配方法

- match()，接收一个参数，可以是一个正则表达式字符串，也可以是一个 RegExp 对象，返回数组
- search(),接收一个参数，可以是一个正则表达式字符串，也可以是一个 RegExp 对象，返回匹配到的字符串的索引值，否则返回 -1
- replace()，接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）

```js
let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches[0]); // "cat"
// --------------------
let text = "cat, bat, sat, fat";
let pos = text.search(/at/);
console.log(pos); // 1
// --------------------
let text = "cat, bat, sat, fat";
let result = text.replace("at", "ond");
console.log(result); // "cond, bat, sat, fat"
```

### instanceof 操作符实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

### 如何获取安全的 undefined 值

表达式 void \_ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。因此可以用 void 0 来获得 undefined。

### 什么是 JavaScript 中的包装类型

JavaScript 包装类型是将基本数据类型(字符串、数字、布尔值)转换为对应的对象类型的过程。JavaScript 中的基本数据类型是原始值，它们是不可变的，不能拥有方法或属性。为了能够对原始值进行方法调用和属性访问，JavaScript 引擎会在必要时自动将其转换为对应的包装对象，然后调用对象的方法或属性。

```js
// (1) 在访问'abc.length'时，JavaScript将'abc'在后台转换成String('abc')，然后再访问其lengt属性。
const a = "abc";
a.length; // 3
a.toUpperCase(); // "ABC"
// (2) JavaScrip也可以使用Object函数显式地将基本类型转换为包装类型：
let a = "abc";
Object(a); //String("abc")
// (3) 可以使用valueOf()方法将包装类型转成基本类型：
let a = "abc";
let b = Object(a);
let c = b.valueOf(); // 'abc'
// (4) 虽然包裹的基本类型是 false，但是 false 被包裹成包装类型后就成了对象，所以其非值为false，所以循环体中的内容不会运行。
let a = new Boolean(false);
if (!a) {
  console.log("打印了吗"); // never runs
}
```

### 为什么有 BigInt 提案

JavaScript 中 Number.MAX_SAEF_INTEGER 表示最大安全数字，计算结果是 900719925470991，即在这个数范围内不会出现精度丢失(小数除外)。但是一旦超过这个范围，js 就会出现计算不准确的情况，这在大数计算的时候不得不依靠一些第三方库进行解决，因此官方提出 BigInt 来解决该问题。

- 避免精度丢失。
- BigInt 允许表示大整数，也可以对整数进行算术运算的方法(加减乘除和幂运算)，并确保运算的精度和正确性。

### for...in 和 for...of 的区别

for...of 允许遍历含有 iterator 接口的数据结构(数组、对象等)并且返回各项的值。

- for...of 遍历获取对象的键值，for...in 获取的是对象的键名。for...in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for...of 之遍历当前对象不会遍历原型链。
- 总之：for...in 循环是为了遍历对象而生，不适用遍历数组；for...of 循环可以用来遍历数组、类型对象，字符串、Set、Map 以及 Generator 对象。

## 收集的问题

### 浏览器对队头阻塞有什么优化？

### JavaScript 如何做内存管理？

### Eslint 代码检查的过程是啥？

### 在做 eslint 和 commitlint 的时候， 可以使用 --no-verify 跳过， 这种情况下该如何强制卡点

### Node 更适合处理处理 I/O 密集型任务还是 CPU 密集型任务？为什么

Node 更适合处理 I/O 密集型任务。
因为 Node 的 I/O 密集型任务可以异步调用，利用事件循环的处理能力，资源占用极少，并且事件循环的处理能力，资源占用极少，并且事件循环能力避开了多线程的调用，在调用方面是单线程，内部处理其实是多线程的。另外，由于 JavaScript 是单线程的原因，Node 不适合处理 CPU 密集型的任务，CPU 密集型的任务会导致 CPU 时间片不能释放，使得后续 I/O 无法发起，从而造成阻塞。但是可以利用多进程的特点完成对一些 CPU 密集型任务的处理，不过由于 JavaScript 并不支持多线程，所以在啊这方面的处理能力会弱于其他多线程语言(例如 Java、Go)。
