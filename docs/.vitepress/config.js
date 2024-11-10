// 配置
// module.exports = {
export default{
    ignoreDeadLinks: true,
    // 网站标题
    title: 'Rain',
    //部署的基础路径
    base: '/qianduan-knowledge-system/',
    // base: '/',
    // 配置网站html的head标签 网站图标
    head: [],
    // 主题配置
    themeConfig: {
        outline: {
            level: [2, 6],
            label: '目录',
        },
        // 头部导航
        nav: [
           {
                text: "首页",
                // 跳转项目链接
                link: '/intro/'
            },{
                text: "前端导航",
                // 跳转项目链接
                link: '/frontendLink/'
            },
            { 
                text: "前端基础知识",
                items: [
                { text: 'JavaScript 基础知识', link: '/base/javascript/JS-base/' },
                { text: 'ES6 常用知识', link: '/base/es6/' },
                { text: 'TypeScript 基础知识', link: '/base/typescript/' },
                { text: '浏览器相关知识', link: '/base/browser/' }
              ]
            },{ 
                text: "面试题集",
                items: [
                { text: '基于element-plus二次封装', link: '/fengzhuang/vue-ts/intro/' },
                { text: 'learning记录', link: '/knowledge/React/React' },
                { text: '前端书籍阅读记录', link: '/library/mnfs/mnfs' },
                { text: '前端工程化', link: '/devExperience/vue/vue3/vue3' },
                { text: '面试题录', link: '/askQuestion/CSS部分/css' },
                { text: 'HarmonyOS鸿蒙应用开发(待学习)', link: '/harmonyOS/certificate' },
              ]
            },
            {
                text: 'github站点',
                link: '#',
                target: '_blank'
            },{
                text: 'gitee站点',
                link: '#',
                target: '_blank'
            }
        ],
        // 侧边导航
        sidebar: {
            '/intro/': [{
                text: '介绍',
                link: '/intro/',
            }],
            // '/frontendLink/': [{
            //     text: '官网直达',
            //     link: '/frontendLink/',
            // }],
            '/base/': [
                {
                  text: 'JavaScript 基础',
                  collapsible: true, // 可折叠的侧边栏组
                  items: [
                    { text: '数据类型', link: '/base/javascript/JS-base/' },
                    { text: '类型转换', link: '/base/javascript/JS-base/typeChange' },
                  ]
                }, {
                    text: 'JavaScript 高级',
                    collapsible: true, // 可折叠的侧边栏组
                    items: [
                      { text: '简介', link: '/base/javascript/JS-high/intro.md' },
                      { text: '浏览器', link: '/base/javascript/JS-high/浏览器.md' },
                      { text: 'V8引擎运行原理', link: '/base/javascript/JS-high/V8引擎运行原理.md' },
                      { text: 'V8引擎的内存管理', link: '/base/javascript/JS-high/V8引擎的内存管理.md' },
                      { text: '垃圾回收', link: '/base/javascript/JS-high/垃圾回收.md' },
                      { text: '函数一等公民', link: '/base/javascript/JS-high/函数一等公民.md' },
                      { text: '深入闭包', link: '/base/javascript/JS-high/深入闭包.md' },
                      { text: 'this指向', link: '/base/javascript/JS-high/this指向.md' },
                      { text: 'Proxy与Reflect', link: '/base/javascript/JS-high/Proxy-Reflect.md' },
                      { text: '响应式原理', link: '/base/javascript/JS-high/响应式原理.md' },
                    ]
                  },{
                    text: 'ES6常用知识点',
                    link: '/base/es6/'
                  },{
                    text: 'TypeScript 基础知识',
                    link: '/base/typeScript/'
                  },{
                    text: 'HTML/CSS',
                    collapsed: true,
                    items: [
                        {
                            text: 'HTML理论知识点',
                            link: '/base/htmlcss/htmlBase'
                        },{
                            text: 'CSS理论知识点',
                            link: '/base/htmlcss/cssBase'
                        },
                    ]
                  }
              ],
              '/fengzhuang/vue-ts/': [{
                text: '基于element-plus二次封装',
                collapsed: true,
                items: [
                        {
                            text: '介绍',
                            link: '/fengzhuang/vue-ts/intro/'
                        },{
                            text: '快速上手',
                            link: '/fengzhuang/vue-ts/quickStart/'
                        },{
                            text: '图标选择器',
                            link: '/fengzhuang/vue-ts/chooseIcon/'
                        },{
                            text: '省市区选择',
                            link: '/fengzhuang/vue-ts/chooseArea/'
                        },{
                            text: '趋势标记',
                            link: '/fengzhuang/vue-ts/trend/'
                        },{
                            text: '时间选择',
                            link: '/fengzhuang/vue-ts/chooseTime/'
                        },{
                            text: '通知菜单',
                            link: '/fengzhuang/vue-ts/noticification/'
                        },{
                            text: '导航菜单',
                            link: '/fengzhuang/vue-ts/menu/'
                        },{
                            text: '城市选择',
                            link: '/fengzhuang/vue-ts/chooseCity/'
                        },{
                            text: '进度条',
                            link: '/fengzhuang/vue-ts/progress/'
                        },{
                            text: '日历',
                            link: '/fengzhuang/vue-ts/calendar/'
                        },{
                            text: '表单',
                            link: '/fengzhuang/vue-ts/form/'
                        },{
                            text: '弹出框表单',
                            link: '/fengzhuang/vue-ts/modalForm/'
                        },{
                            text: '表格',
                            link: '/fengzhuang/vue-ts/table/'
                        }
                ]
            }],
            '/fengzhuang/React-antd5/': [{
                text: '从零实现React+Antd5后台系统框架',
                collapsed: true,
                items: [
                    {
                        text: '简介',
                        link: '/fengzhuang/React-antd5/intro.md'
                    }
                ]
            }],
            '/knowledge/': [{
                text: 'learning记录',
                // collapsed: true,
                items: [
                    {
                        text: 'React核心知识点',
                        collapsed: true,
                        items: [
                            {
                                text: 'React核心知识点',
                                link: '/knowledge/React/React.md'
                        }
                        ]
                        
                    },{
                        text: 'Vue核心知识点',
                        collapsed: true,
                        items: [
                            {
                                text: 'Vue核心知识点',
                                link: '/knowledge/Vue/Vue.md'
                            }
                        ]
                    }
                ]
            }],
            '/library/': [{
                text: '前端书籍阅读记录',
                items: [
                    {
                        text: '码农翻身',
                        link: '/library/mnfs/mnfs.md'
                    },{ 
                        text: '大前端书籍', 
                        collapsed: true,         //设置侧边栏可折叠
                        items: [
                            {
                                text: '大前端三剑客——Vue+React+Flutter',
                                collapsed: true,         
                                items: [
                                    {
                                        text: '模块化 Module',
                                        link: '/library/VueReactFlutter/chapter2.md'
                                    },{
                                        text: '前端构建工具',
                                        collapsed: true,         
                                        items: [
                                            {
                                                text: 'Node&npm简介',
                                                link: '/library/VueReactFlutter/chapter3.md'
                                            },{
                                                text: 'Webpack',
                                                collapsed: true,         
                                                items: [
                                                    {
                                                    text: 'Webpack简介',                                                  
                                                    link: '/library/VueReactFlutter/Webpack/webpack-intro.md'
                                                },{
                                                    text: 'Webpack基础',                                                  
                                                    link: '/library/VueReactFlutter/Webpack/webpack-baseInfo.md'
                                                }
                                                ]
                                            },{
                                                text: 'Vite',
                                                link: '/library/VueReactFlutter/Vite.md'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ]
                    },{ 
                        text: 'JavaScript书籍', 
                        collapsed: true,         //设置侧边栏可折叠
                        items: [
                            {
                                // text: '《JavaScript从入门到精通》',
                                text: '《学习 JavaScript 数据结构与算法》',
                                collapsed: true,         //设置侧边栏可折叠
                                items: [
                                    {
                                        text: '基本信息',
                                        link: '/library/Javascript/index.md'
                                },{
                                    text: '数组方法',
                                    link: '/library/Javascript/Array/array-methods.md'
                                },{
                                    text: '栈数据结构',
                                    link: '/library/Javascript/Stack/stack.md'
                                }

                                ]
                            }
                        ]
                    },{ 
                        text: 'TypeScript知识点', 
                        collapsed: true,         //设置侧边栏可折叠
                        items: [
                            {
                                text: 'TypeScript简介',
                                link: '/library/TypeScript/typescript-intro.md'
                            },
                        ]
                    }
                ]
            }],
            '/devExperience/': [{
                text: "经历值++",
                collapsed: true,
                items: [
                    {
                        text: 'Vue',
                        collapsed: true,
                        items: [
                            {
                                text: 'vue',
                                link: '/devExperience/vue/vue3/vue3.md'
                            }, 
                        ]
                    },{
                        text: 'Pinia',
                        collapsed: true,
                        items: [
                            {
                                text: 'Pinia的使用',
                                link: '/devExperience/pinia/'
                            }, 
                        ]
                    },{
                        text: 'React',
                        collapsed: true,
                        items: [
                            {
                                text: 'react',
                                link: '/devExperience/react/react.md'
                            }
                        ]
                    },{
                        text: 'uniapp',
                        collapsed: true,
                        items: [
                            {
                                text: 'uniapp开发App',
                                link: '/devExperience/uniapp-App/uniapp-App.md'
                            },{
                                text: 'uniapp开发小程序',
                                link: '/devExperience/uniapp-program/uniapp-program.md'
                            }
                        ]
                    },
                    /* {
                        text: 'uniapp开发小程序',
                        collapsed: true,
                        items: [
                            {
                                text: 'uniapp开发小程序',
                                link: '/devExperience/uniapp-program/uniapp-program.md'
                            }
                        ]
                    }, */
                ]  
            }],
            '/askQuestion/': [{
                text: '面试题录',
                collapsed: true,
                items: [
                    {
                        text: '快捷链接',
                        link: '/askQuestion/相关收录/record.md'
                    },{
                        text: 'CSS部分',
                        link: '/askQuestion/CSS部分/css.md'
                    },{
                        text: 'JavaScript',
                        link: '/askQuestion/JavaScript/JavaScript.md'
                    },{
                        text: 'VUE系列',
                        link: '/askQuestion/Vue/askQuestionVue.md'
                    },{
                        text: 'React系列',
                        link: '/askQuestion/React/React.md'
                    },{
                        text: '面试题收录',
                        link: '/askQuestion/document/'
                    }
                ]
            }], 
            '/harmonyOS/certificate': [{
                text: 'HarmonyOS鸿蒙应用开发',
                collapsed: true,
                items: [
                    {
                        text: 'HarmonyOS鸿蒙应用开发者证书考试',
                        link: '/harmonyOS/certificate.md'
                    }
                ]
            }]
    }
    },
    // 重定向
    rewrites: {
        '/': "/frontendLink"
    },
    // vue: {
    //     reactivityTransform: true,
    //     globalComponents: {
    //       BoxNav: '../frontendLink/BoxNav.vue'
    //     }
    //   }
}