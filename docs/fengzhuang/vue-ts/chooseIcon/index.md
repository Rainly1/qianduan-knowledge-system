## 图标选择器

用户点击按钮，弹出框显示所有图标，点击图标可以复制图标代码

### 基本用法

<br>
<div style="padding:1em;margin:1em;border:1px solid #eee">
<m-choose-icon title="选择图标" v-model:visible="visible">选择图标</m-choose-icon>
</div>

### 代码实例

<span style="display:block;text-align:left;color:orangered;">\*注意文档库未安装 TS，所以下面的 script 标签只是 js 语言的代码</span>

<script setup>
import { ref } from 'vue'
let visible = ref(false)
</script>

```js
<m-choose-icon title="选择图标" v-model:visible="visible"></m-choose-icon>

<script lang='ts' setup>
import { ref } from 'vue'
let visible = ref<boolean>(false)
</script>
```
