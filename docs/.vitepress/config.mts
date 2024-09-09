import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: '内院看门人',
    description: '内院看门人讲记, 问答等相关文档',
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'codeva-OQXduKwp0p' }]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            {
                text: '讲记',
                items: [
                    {
                        text: '地藏菩萨本愿经讲记',
                        link: '/jiangji/dizangjing/',
                    },
                    {
                        text: '摄大乘论初分讲记',
                        link: '/jiangji/shedachenglun/',
                    },
                    {
                        text: '十二门论讲记',
                        link: '/jiangji/shiermenlun/',
                    },
                ],
            },
            {
                text: '问答',
                items: [
                    { text: '历史问答', link: '/answer/history' },
                    { text: '每月问答', link: '/answer/month/' },
                ],
            },
            {
                text: '公众号',
                items: [
                    { text: '讲记', link: '/gongzhonghao/jiangji/' },
                    { text: '问答', link: '/gongzhonghao/answer/' },
                    { text: '公众号相关', link: '/gongzhonghao/self/' },
                ],
            },
            { text: '联系我们', link: '/me/' },
        ],

        sidebar: [
            {
                text: '讲记',
                items: [
                    {
                        text: '地藏菩萨本愿经讲记',
                        items: [
                            {
                                text: '地藏菩萨本愿经讲记 上',
                                link: '/jiangji/dizangjing/upper',
                            },
                            {
                                text: '地藏菩萨本愿经讲记 中',
                                link: '/jiangji/dizangjing/middle',
                            },
                            {
                                text: '地藏菩萨本愿经讲记 下',
                                link: '/jiangji/dizangjing/lower',
                            },
                        ],
                        link: '/jiangji/dizangjing/',
                    },
                    {
                        text: '摄大乘论初分讲记',
                        items: [
                            {
                                text: '摄大乘论初分讲记 上',
                                link: '/jiangji/shedachenglun/upper',
                            },
                            {
                                text: '摄大乘论初分讲记 下',
                                link: '/jiangji/shedachenglun/lower',
                            },
                        ],
                        link: '/jiangji/shedachenglun/',
                    },
                    {
                        text: '十二门论讲记',
                        link: '/jiangji/shiermenlun/',
                    },
                ],
            },
            {
                text: '问答',
                items: [
                    { text: '历史问答', link: '/answer/history' },
                    { text: '每月问答', link: '/answer/month/' },
                ],
            },
            {
                text: '公众号',
                items: [
                    { text: '讲记', link: '/gongzhonghao/jiangji/' },
                    { text: '问答', link: '/gongzhonghao/answer/' },
                    { text: '公众号相关', link: '/gongzhonghao/self/' },
                ],
            },
            { text: '联系我们', link: '/me/' },
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/weishifaxiang/website',
            },
        ],

        search: {
            provider: 'local',
        },

        editLink: {
            pattern:
                'https://github.com/weishifaxiang/website/edit/master/docs/:path',
        },

        footer: {
            // Copyright © 2024-present by 内院看门人
            // 讲记及问答 © 2024 by 内院看门人 is licensed under CC BY-NC-ND 4.0
            // copyright:
            //     '<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/weishifaxiang/website">Copyright</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://qm.qq.com/q/kicI8hy5AQ">内院看门人</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt=""></a></p>',
            message:
                'Released under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0 <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;display: inline-block;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;display: inline-block;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;display: inline-block;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;display: inline-block;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt=""></a>.',
            copyright:
                'Copyright © 2024-present <a href="https://qm.qq.com/q/kicI8hy5AQ">内院看门人</a>',
        },
    },
    lastUpdated: true,
    sitemap: {
        hostname: 'https://weishifaxiang.cn',
        lastmodDateOnly: false,
    },
});
