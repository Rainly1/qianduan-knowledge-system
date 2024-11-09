<template>
    <div class="box-container">
    <div v-for="(item, index) in navLink" :key="index" >
        <a class="box-link" :href="item?.link" rel="noreferrer" target="_blank">
            <article class="box">
                <div class="box-header">
                    <div class="box-icon">
                        <svg class="iconfont" aria-hidden="true" v-if="item?.iconSrc">
                            <use :xlink:href="`#icon-${item.iconSrc}`"></use>
                        </svg>
                        <!-- <i :class="`iconfont ${'icon-Vue'}`"></i> -->
                        <img :src="item?.iconImg" v-if="item?.iconImg" class="iconImg"/>
                    </div>
                    <h5 class="title">{{item?.title}}</h5>
                </div>
                <p class="desc">{{item?.desc}}</p>
            </article>
        </a>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import "../staticImg/iconfont/iconfont.js";

const props = defineProps({
  navLink: {
    type: Array,
    required: true
  }
})
</script>

<style>
/* @import "../staticImg/iconfont/iconfont.css"; */
/* @import "../staticImg/iconfont/iconfont.js"; */

.iconfont {
  /* font-size: 24px; */
  fill: currentColor;
  margin-right: 10px;
  width: 24px;
  height: 24px;
}
.box-container{
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(auto-fill,minmax(240px,1fr)); */
    /* grid-template-columns: repeat(5, 1fr); */
    /* grid-auto-rows: auto; 自动生成行的高度 */
    /* grid-auto-flow: row dense; 自动换行 */
    gap: 20px; /* 间距 */

}
.box-link {
    display: block;
    border: 1px solid var(--vp-input-switch-bg-color);
    border-radius: 8px;
    height: 100%;
    width: 224px;
    /* max-width: 250px; */
    background-color: var(--vp-input-switch-bg-color);
    transition: all 0.25s;
    &:hover {
        border: 1px solid #1890ff;
    }
}

.box {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 12px;
    height: 100%;
    color: var(--vp-c-text-1);
  /* border: 1px solid #252529;
  padding: 10px;
  border-radius: 8px;
  background-color: #252529;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.box-header {
  display: flex;
  align-items: center;
}

.box-icon .iconImg {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.title {
  margin: 0;
  font-size: 16px;
}

.desc {
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>