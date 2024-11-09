## 省市区选择

通过下拉选择实现省市区三级联动

### 按需引入

```js
// main.ts
import chooseArea from "rain-element-components/chooseArea";
app.use(chooseArea);
```

### 基本用法

<br>
<div style="padding:1em;margin:1em;border:1px solid #eee">
<m-choose-area></m-choose-area>
</div>

### 代码实例

```html
<m-choose-area></m-choose-area>
```

### Api

#### 事件

| 事件名 | 说明                     | 参数                     |
| :----- | ------------------------ | ------------------------ |
| change | 选择了省市区三级之后触发 | val: AreaInfo,省市区数据 |

#### AreaInfo 数据格式

| key      | 说明       | 类型       |
| :------- | ---------- | ---------- |
| province | 省的数据   | val: Value |
| city     | 城市的数据 | val: Value |
| area     | 区域的数据 | val: Value |

#### Value 数据格式

| key  | 说明 | 类型   |
| :--- | ---- | ------ |
| name | 名字 | string |
| code | 编码 | number |
