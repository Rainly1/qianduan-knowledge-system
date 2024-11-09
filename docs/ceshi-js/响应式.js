// 1. 响应式函数和依赖收集

// 1. 通过响应式函数，让对象开启响应式。
// 2. 依赖收集：通过收集函数watchFn，将依赖者们收集起来，方便当 被依赖者发生改变后，及时通知依赖者们跟上脚步。
    // 依赖的收集，需要两组对应关系：1. 响应式对象 与 属性的对应。2. 属性与depend依赖(depend实例对象)的对应。
    // 1. Map键值对：对应属性名与depend依赖。2. WeakMap的键值对：对应响应式对象与（属性&depend依赖）
    // 【】响应式对象通过WeakMap弱引用关联，高频的通知依赖调用不会一直影响正常垃圾回收。
//  处理复杂的依赖者与被依赖者之间的依赖关系：使用类与对象的结合，所有统一的响应式操作，放在Depend类中。
    // 好处：1. 便于管理，每个Depend实例可以独立管理一组依赖，而不会与其他实例的依赖混淆。2. Depend类可以被用在不同的项目或不同的部分中，每次用到响应式功能时可以重用，无需重复编写。
// 3. 监听对象变化：通过Proxy监听对象变化，来达到自动通知对应依赖的目标








// 一、Depend类 收集依赖，通知依赖 两步核心框架
class Depend {
    constructor() {
        // this.reactiveFns = [] //依赖组
        // 2. 采用Set，解决重复收集依赖的问题
        this.reactiveFns = new Set()  
    }
    /* // 收集依赖
    addDepend(reactiveFn){
        this.reactiveFns.push(reactiveFn)
    } */
    // 更好的依赖收集
    depend(){
        // if(activeReactiveFn) this.reactiveFns.push(activeReactiveFn)
        // 换成Set的add方法
        if(activeReactiveFn) this.reactiveFns.add(activeReactiveFn)
    }
    // 对所有依赖进行统一通知处理
    notify(){
        console.log(`this.reactiveFns===>`,this.reactiveFns)
    this.reactiveFns.forEach(fn=>{
        // 遍历依赖处理
        if(fn) fn()
    })
    }
}

let activeReactiveFn = null
// watchFn函数：注册一个响应式函数，并在执行该函数时，把它设置为全局的activeReactiveFn，方便依赖收集
function watchFn(fn) {
    activeReactiveFn = fn
    // fn()函数：对响应式数据的读取，一旦读取，这个函数就会被注册为依赖，并在数据变化时触发执行
    fn()
    // 用完置空，释放内存
    activeReactiveFn = null
}

// 二、实现依赖收集的核心逻辑
// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key){
    // 1. 根据target对象获取map的过程
    let map = targetMap.get(target)
    if(!map){
        map = new Map()
        targetMap.set(target,map)
    }
    // 2. 根据对象属性获取depend依赖
    let depend = map.get(key)
    if(!depend){
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}

// 三、封装响应式函数
// reactive函数将对象转化为响应式
/* function reactive(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj  //如果不是对象类型或是null，直接返回
    }
    // 使用proxy监听对象变化
    return new Proxy(obj, {
       get: function(target, key, receiver){
           // 1. 锁定确定的对象属性
           const depend = getDepend(target, key)
           // 2. 为确定的属性进行添加对应的依赖
           // depend.addDepend(activeReactiveFn)
           // 优化
           depend.depend()
           const result = Reflect.get(target, key,receiver)
            // 3. 如果是对象，递归处理该对象的属性   
           return reactive(result)
       },
       set: function(target,key,newValue,receiver){
            const oldValue = target[key]            //target：需要响应式的对象，key：对象属性
            const result = Reflect.set(target, key, newValue, receiver)

            // 4. 如果值发生变化，通知依赖更新
            if(oldValue !== newValue){
                 // 做到一个属性都有一个对应的depend依赖
                const depend = getDepend(target, key)  //获取属性对应的依赖
                depend.notify()
            }
            return result
       }
   })
} */
// Vue2响应式核心
function reactive(obj){
    Object.keys(obj).forEach(key=>{
        let value = obj[key]
        // 如果属性是对象类型，递归调用reactive来处理深层对象
        if(typeof value === 'object' && value !== null){
            reactive(value)
        }
        Object.defineProperty(obj, key, {
            get: function(){
                const depend = getDepend(obj, key)
                depend.depend()
                return value
            },
            set: function(newValue){
                value = newValue
                // 如果新值是对象，递归处理该新对象
                if(typeof value === 'object' && value !== null){
                    reactive(value)
                }
                const depend = getDepend(obj, key)
                depend.notify()
            }
        })
    })
    return obj
}
// 需要响应式的数据
const obj = {
    type: 'dog',
    feature: 'look house'
}
// 需要响应式的数据2
const info = {
    // 对象内的对象
    friends: {
        friend1: 'cat',
        friend2: 'chicken'
        
    },
    address: 'hubei'
}
// 响应式开关媒介
const objRef = reactive({
    type: 'dog',
    feature: 'look house'
})
const infoRef = reactive({
    friends: {
        friend1: 'reactive--cat',
        friend2: 'chicken'
        
    },
    address: 'hubei'
})
watchFn(()=>{
    console.log(`objRef.type->`,objRef.type)
})
watchFn(()=>{
    console.log(`infoRef.friends.friend1->`,infoRef.friends.friend1)
})
watchFn(()=>{
    console.log(`infoRef.address->`,infoRef.address)
})

infoRef.friends.friend1 = '响应式-好朋友'
infoRef.address = '响应式-hubei'
objRef.type = '响应式--cat'


/* // 
const objMap = new Map()
objMap.set('type', 'depend依赖')
objMap.set('feature', 'depend依赖')
const infoMap = new Map()
infoMap.set('friends', 'depend依赖')
infoMap.set('address', 'depend依赖')



targetMap.set(obj, objMap)
targetMap.set(info, infoMap)


// 收集依赖者
function watchFn(fn){
    depend.addDepend(fn)
}
function foo() {
    const newName = obj.type
    console.log(`output->响应式数据`, newName)
}
// 任何通过watchFn注册的函数都会成为响应式的依赖，即在数据发生变化时这些函数会被调用
watchFn(foo)  //每个属性都有对应一个depend，每个depend都有对应一个watchFn来收集相关的依赖者

// obj.type = 'cat'
// objProxy.type = 'cat1'
// objProxy.feature = 'sleeping'
// 通知属性对应的依赖重新调用进行响应式
const depend = targetMap.get(obj).get('type')  //获取依赖
depend.notify()  //与obj的type相关的所有操作进行重新加载

// 封装一个响应式函数
let reactiveFns = []
// 所有相关依赖
function watchFn(fn){
    reactiveFns.push(fn)
} */

