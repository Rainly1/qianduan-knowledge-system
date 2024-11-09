// 浏览器
/* //案例1
//函数在被调用的时候，没有被绑定在任何的对象上面，也没有使用apply等方式调用
function foo(){
    console.log('案例1',this);
}

foo() */

/* // 案例2
function foo1(){
    console.log(`output->foo1`,this)
}
function foo2(){
    console.log(`output->foo2`,this)
    foo1()
}
function foo3(){
    console.log(`output->foo3`,this)
    foo2()
}
foo3() */

// 案例3
// var obj = {
//     name: "小雨",
//     foo: function(){
//         console.log(`output->this`,this)
//     }
// }
// var fn = obj.foo 
// fn()             //  this指向window，而不是obj

/* 说明：将obj.foo赋值给fn，fn成为独立函数，不再与obj绑定。
当调用fn()时，this的值是根据函数调用的上下文决定的。
在这个情况下，由于fn是全局上下文中被调用，JavaScript将this绑定到全局对象，即window。 
 */

// 案例4
// function foo(){
//     console.log(`output->this`,this)
// }
// var obj = {
//     name: "小雨",
//     foo: foo    // 将foo函数赋值给obj的foo属性
// }
// var bar = obj.foo  //将obj.foo赋值给bar
// bar()

/* 说明：当我们调用 bar() 时，this 的值同样是根据调用上下文来决定的。
由于 bar 也是在全局上下文中被调用，this 被绑定到全局对象，因此输出的结果仍然是 output->this window
 */

// 案例5
// 1. 独立调用
// function foo(){
//     function bar(){
//         console.log(`output->this`,this)
//     }
//     return bar
// }
// var fn = foo()
// fn()
// // 说明：此时fn函数调用时返回window，fn调用时foo函数里面的bar函数，并没有牵扯到foo函数上，属于独立调用。

// // 2. 隐式绑定,闭包不再指向window形式：
// var obj = {
//     name: "Rain",
//     age: fn
// }
// obj.age()  //隐式绑定
/*  说明：
    这种调用方式，js引擎会将obj绑定到age的函数内部。
    调用顺序： age->fn-->bar，bar函数被作为对象的方法调用，this的指向为 obj
 */

// 隐式绑定

/* var obj = {
    name: "小雨",
    eating: function() {
        console.log(`输出结果->`,this.name + "在吃东西")
    },
    running: function(){
        console.log(`输出结果->`,this.name + "在跑步")
    }
}
obj.eating()   // 输出结果-> 小雨在吃东西
obj.running()  // obj 和running 有绑定关系  输出结果-> 小雨在跑步

var fn = obj.eating
fn()   // 解除了obj和eating方法的绑定关系  输出结果-> 在吃东西 */

// 
/* var obj1 = {
    name: "obj1",
    foo: function(){
        console.log(`output->this`,this)
    }
}
var obj2 = {
    name: "obj2",
    bar: obj1.foo
}
obj2.bar()
// node环境返回结果： output->this { name: 'obj2', bar: [Function: foo] } */

/* function foo(){
    console.log(`output->this`,this)
}
// 默认绑定和现实绑定bind冲突
var newFoo = foo.bind("小雨")

var bar = foo
console.log(`output->bar === foo`,bar === foo)         // output->bar === foo true
console.log(`output->newFoo === foo`,newFoo === foo)  // output->newFoo === foo false */

/* // call用法
function greet(greeting){
    console.log(`output->${greeting}, ${this.name}!`)
}
const person = { name: "小雨"}
greet.call(person, "你好")    // output->你好, 小雨!

// apply用法
function greetApply(greeting, arrArg){
    console.log(`output->${greeting}, ${this.name}${arrArg}`)
}
const person2 = { name: "Rain"}
greet.apply(person2, ["你好","很高兴见到你"])   //  output->你好, Rain!

// bind用法
function greetBind(greeting){
    console.log(`output->${greeting}, ${this.name}!`)
}
const person3 = { name: '小雨Rain'}
const greetPerson = greetBind.bind(person3, "你好啊")
greetPerson()  // output->你好啊, 小雨Rain! */


/* const obj = {
    value: "Hello, World!",
    showThis: function () {
      // 普通函数
      setTimeout(function () {
        console.log(this); // 非严格模式：全局对象（`window` / `{}`）
      }, 1000);
  
      // 箭头函数
      setTimeout(() => {
        console.log(this); // 保留 `obj`，即箭头函数定义时的 `this`
      }, 1000);
    },
  };
  
  obj.showThis(); */

 /*  var names = ["ABC",'小雨','Rain']
// 允许使用第二个参数 thisArg 来指定回调函数中 this 的指向。
  names.forEach(function(){
    console.log(`output->forEach`,this)
  }, "小雨+Rain")

  names.map(function(){
    console.log(`output->map`,this)
  }, "小雨+Rain")

  names.filter(function(){
    console.log(`output->filter`,this)
  }, "小雨+Rain")

  names.find(function(){
    console.log(`output->find`,this)
  }, "小雨+Rain")

//   箭头函数
names.forEach(()=>{
    console.log(`output->forEach箭头函数`,this)  // window 
}, "小雨+Rain")   //箭头函数，thisArg不生效 */

/* //争论：代码规范，到底加不加分号;
var obj1 = {
    name:"这是onj1",
    foo:function(){
        console.log(this);
    }
}

var obj2 = {
    name:"这是obj2",
}

obj2.foo = obj1.foo
obj2.foo()//{ name: '这是obj2', foo: [Function: foo] }

//第二种情况，比较难的情况
(obj2.foo = obj1.foo)()
//  ---------------------
// 相当于变成：
var obj2 = {
    name: "这是obj2",
}(obj2.foo = obj1.foo)()
// 报错： Uncaught TypeError: obj2.foo(...) is not a function

// ---------------------
var obj2 = {
    name: "这是obj2"
};
(obj2.foo = obj1.foo)()  // 正常返回window */

function foo(ele){
    console.log(`output->ele:`,ele, `output->this:`,this)
}
var obj = {
    id: "Rain"
}

[1, 2, 3].forEach(foo,obj)
// 报错：Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
// ------------------------------------

// 解决方法1
function foo(ele){
    console.log(`output->ele:`,ele, `output->this:`,this)
}
var obj = {
    id: "Rain"
}

var names = [1,2,3]
names.forEach(foo,obj)

// 解决方法2：
function foo(ele){
    console.log(`output->ele:`,ele, `output->this:`,this)
}
var obj = {
    id: "Rain"
};  //加上分号
[1, 2, 3].forEach(foo,obj) // foo是独立定义了，obj是传入forEach中this要绑定的对象