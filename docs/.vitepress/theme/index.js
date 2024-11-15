import DefaultTheme from 'vitepress/theme'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import '../style/base.css'
import '../style/common.css'
import mediumZoom from 'medium-zoom'
import { onMounted } from 'vue'
export default {
    ...DefaultTheme,
    // themeConfig: {
    //     lastUpdated: {
    //       text: 'Updated at',
    //       formatOptions: {
    //         dateStyle: 'full',
    //         timeStyle: 'medium'
    //       }
    //     }
    //   },
    setup() {
        onMounted(() => {
          mediumZoom('.content img', { margin: 24, background: 'black' })  // 选择器匹配你的图片
        })
    },
    /* enhanceApp({ app }) {
        // 注册图片预览插件
        app.use(ElementPlus)
        // app.use(mUI)
    } */
}