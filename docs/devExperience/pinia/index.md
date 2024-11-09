# Pinia 使用

[pinia 官网](https://pinia.vuejs.org/zh/ssr/)

## 安装&引入项目

1. 安装

```cmd

npm install pinia

// 持久化插件
npm i  pinia-plugin-persistedstate

```

2. 引入

```js
import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
// pinia持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

## 使用

### getter4 种用法示例

1. 常规使用
2. 一个 getter 中使用另一个 getter
3. 让 getter 返回一个函数
4. 一个 getter 中调用另一个 store 中的数据

```js
import { defineStore } from "pinia";
import useCounter from "./counter";

export const useUserStore = defineStore("userData", {
  state: () => {
    return {
      userList: [
        {
          id: 1,
          name: "11",
        },
        {
          id: 2,
          name: "22",
        },
        {
          id: 3,
          name: "33",
        },
      ],
      count: 66,
    };
  },
  //  1.基本使用： getters类似于vue中的计算属性
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    doubleCount2() {
      return this.count * 4;
    },
    // 2. 一个getter调取另一个getter
    doubleCountAdd() {
      return this.doubleCount + 10;
    },
    // 3. getter支持返回一个函数【但推荐在actions中处理函数方法】
    findUserId(id) {
      return (id) => this.userList.find((item) => item.id === id);
    },
    // 4. getter 使用别的store中的数据
    showMessage(state) {
      // 导入别的store
      const counterStore = useCounter();
      // 2. 混合使用当前store/别的store的数据
      return state.age + "和" + counterStore.count;
    },
  },
  actions: {
    // 异步请求等方法
  },
  //   所有数据持久化
  persist: true,
});
```

```vue
<!-- vue页面中使用================== // User.vue -->
<template>
  <div>
    <div>测试pinia使用</div>
    <div>{{ doubleCount }}</div>
    <div>{{ doubleCountAdd }}</div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore();
const doubleCount = computed(() => userStore.doubleCount);
const doubleCountAdd = computed(() => userStore.doubleCountAdd);
</script>
```

### actions 用法

1. 在标签中绑定 actions 事件
2. 自定义方法，在自定义方法中调用对应的 actions 方法
3. pinia 中提供$patch，可以直接修改 state 中的值，并留下历史记录
4. 重置状态$reset
5. 注意：不能使用箭头函数定义 action，因为箭头函数绑定外部 this
6. 通过 storeToRefs 包裹，使 pinia 里面的数据成为响应式的

```js
import { defineStore } from "pinia";
// pinia模板
// 容器一
export const useUserStore = defineStore("userData", {
  state: () => {
    return {
      message1: "Hello",
      message2: "Pinia",
      count: 1,
    };
  },
  getters: {},
  //   actions用法
  actions: {
    addCount() {
      this.count++;
    },
  },
  // 数据持久化
  persist: true,
});
// 容器二
export const useFriendStore = defineStore("friendData", {
  state: () => {
    return {
      friendName: "friend",
      age: 20,
    };
  },
  getters: {},
  actions: {
    // 跨容器方法
    addAge(number) {
      // 实例化pinia容器
      const userStore = useUserStore();
      this.age = this.age + userStore.count + number;
      // 2. 使用$patch()
      this.$patch((state) => {
        state.age = state.age + userStore.count + number;
      });
    },
  },
  // 数据持久化
  persist: true,
});
```

```vue
<!-- vue页面中使用================== // User.vue -->
<template>
  <div>
    <div>测试pinia使用</div>
    <a-button @click="getCount">改变count值</a-button>
    <div>{{ count }}</div>
    <a-button @click="resetCount">重置</a-button>
    <a-button @click="onAddAge">跨容器调用的方法</a-button>
    <div>{{ age }}</div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/useUserStore";
import { storeToRefs } from "pinia";
const userStore = useUserStore();
const friendStore = useFriendStore();
// 通过storeToRefs包裹起来，里面的数据成为响应式的
const { message1, message2, count } = storeToRefs(userStore);
const { friendName, age } = storeToRefs(friendStore);

// 2. 自定义方法
const getCount = () => {
  // 1. 常规使用
  userStore.addCount();
  // 2. $patch直接改变state中的值
  userStore.$patch({
    message1: "你好吖",
    count: 100,
  });
  // 3. $patch 方法，通过分组改变 state 中的值
  userStore.$patch((state) => {
    state.message1 += "Hello + ";
    state.message2 += "World + ";
    state.count += 10;
  });
};
// 3. 重置state中的数据
const resetCount = () => {
  userStore.$reset();
};
// 调用pinia中跨容器调用的方法
const onAddAge = () => {
  friendStore.addAge(10);
};
</script>
```

### pinia + TS

1. 插件持久化 `pinia-plugin-persistedstate`
2. `persist` 指定字段持久化

```js
// 主文件main.js
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import createPersistedState from "pinia-plugin-persistedstate"; //pinia数据持久化插件
const pinia = createPinia();
pinia.use(createPersistedState);
// 注册全局过滤器
const app = createApp(App);
app.use(Antd).use(pinia).use(router).mount("#app");
```

```ts
import { defineStore } from "pinia";
import type { PersistenceOptions } from "pinia-plugin-persistedstate";

interface UserType {
  id: number;
  name: string;
}
interface StateType {
  userList: UserType[];
  count: number;
  message1: string;
  message2: string;
}
interface FriendStateType {
  friendName: string;
  age: number;
}
export const useUserStore = defineStore("userData", {
  state: (): StateType => {
    return {
      userList: [
        { id: 1, name: "11" },
        { id: 2, name: "22" },
        { id: 3, name: "33" },
      ],
      count: 66,
      message1: "Hello",
      message2: "Pinia",
    };
  },
  // 相当于vue中的computed
  getters: {
    // 1. 为返回值明确类型
    doubleCount(state): number {
      return state.count * 2;
    },
    // 2. 在 Pinia 中使用 this，明确 this 的类型
    doubleCount2(): number {
      return this.count * 4;
      // return (this as StateType).count * 4;
    },
    doubleCountAdd(): number {
      // 使用 this 时添加类型断言
      return this.doubleCount + 10;
    },
  },
  // 相当于vue中的methods方法
  actions: {
    // 方法
    findUserId(id: number): UserType | undefined | string {
      return (
        this.userList.find((item: UserType) => item.id === id) || "未找到该用户"
      );
    },
    addCount() {
      this.count++;
    },
  },
  // 所有数据持久化
  persist: {
    enabled: true,
  } as PersistenceOptions, // 显式指定类型,
});
// 容器二
export const useFriendStore = defineStore("friendData", {
  state: (): FriendStateType => {
    return {
      friendName: "friend",
      age: 20,
    };
  },
  getters: {},
  actions: {
    addAge(num: number): void {
      // 实例化pinia容器
      const userStore = useUserStore();
      // this.age = this.age + userStore.count + num
      this.$patch((state) => {
        state.age = state.age + userStore.count + num;
        state.friendName = "new friend";
      });
    },
  },
  persist: {
    enabled: true,
    // 持久化指定字段
    paths: ["age"],
  } as PersistenceOptions, // 显式指定类型,
});
```
