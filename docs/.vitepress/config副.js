// 配置
module.exports = {
    // 网站标题
    title: '前端知识库',
    //部署的基础路径
    base: '/',
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
            },
           /*  { 
                items: [
                { text: 'JavaScript 基础知识', link: '/base/javascript/' },
                { text: 'ES6 常用知识', link: '/base/es6/' },
                { text: 'TypeScript 基础知识', link: '/base/typescript/' },
                { text: '浏览器相关知识', link: '/base/browser/' }
              ]
            }, */
            {
                text: 'github站点',
                link: '/',
                target: '_blank'
            },{
                text: 'gitee站点',
                link: '/',
                target: '_blank'
            }
        ],
        // 侧边导航
        sidebar: [
            '/intro/': [{
                text: '介绍',
                link: '/intro/',
            }],
            {
                text: '基于element-plus二次封装',
                collapsed: true,
                items: [
                        {
                            text: '介绍',
                            link: '/fengzhuang/intro/'
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
            },{
                text: '从零实现React+Antd5后台系统框架',
                collapsed: true,
                items: [
                    {
                        text: '简介',
                        link: '/fengzhuang/React-antd5/intro.md'
                    }
                ]
            },
            {
                text: 'learning记录',
                collapsed: true,
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
            },
            ,{
                text: '前端书籍库',
                items: [
                    {
                        text: '码农翻身',
                        link: '/ability/mnfs/mnfs.md'
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
            },{
                text: "堆土",
                collapsed: true,
                items: [
                    {
                        text: 'uniapp开发App',
                        collapsed: true,
                        items: [
                            {
                                text: 'uniapp开发App',
                                link: '/ability/uniapp-App/uniapp-App.md'
                            }
                        ]
                    },{
                        text: 'uniapp开发小程序',
                        collapsed: true,
                        items: [
                            {
                                text: 'uniapp开发小程序',
                                link: '/ability/uniapp-program/uniapp-program.md'
                            }
                        ]
                    },{
                        text: '后台系统开发',
                        collapsed: true,
                        items: [
                            {
                                text: 'vue3开发后台系统',
                                link: '/ability/houtai/vue/vue3/vue3.md'
                            }, {
                                text: 'react开发后台系统',
                                link: '/ability/houtai/react/react.md'
                            }
                        ]
                    }
                ]  
            },{
                text: '提问解答',
                collapsed: true,
                items: [
                    {
                        text: 'CSS部分',
                        link: '/askQuestion/CSS部分/css.md'
                    },{
                        text: 'JavaScript',
                        link: '/askQuestion/JavaScript/JavaScript.md'
                    },{
                        text: '提问解答-VUE',
                        link: '/askQuestion/Vue/askQuestionVue.md'
                    },{
                        text: '提问解答-React',
                        link: '/askQuestion/React/React.md'
                    }
                ]
            }, {
                text: 'HarmonyOS鸿蒙应用开发',
                collapsed: true,
                items: [
                    {
                        text: 'HarmonyOS鸿蒙应用开发者证书考试',
                        link: '/harmonyOS/certificate.md'
                    }
                ]
            }
        ]
    }
}