import DefaultTheme from 'vitepress/theme'
import PhotoPreview from 'vue3-photo-preview'
import 'vue3-photo-preview/dist/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../style/base.css'
import '../style/common.css'
// import mUI from 'imooc-element-component
// 
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
            // const zom = mediumZoom('img', {
            //     margin: 24,
            //     background: 'black'
            // })
          mediumZoom('.content img', { margin: 24, background: 'black' })  // 选择器匹配你的图片
        })
    },

    enhanceApp({ app }) {
        // 注册图片预览插件
        app.use(ElementPlus)
        // app.use(mUI)
    }
}