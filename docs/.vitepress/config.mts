import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: '内院看门人',
    description: '内院看门人讲记, 问答等相关文档',
    // head: [
    //     ['meta', { name: 'baidu-site-verification', content: 'codeva-OQXduKwp0p' }]
    // ],
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
            {
                text: '审核专用',
                items: [
                    {
                        text: '地藏菩萨本愿经讲习',
                        items: [
                            {
                                text: '1-10',
                                items: [
                                    {
                                        text: '地藏经讲习 第 1 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/1',
                                    },
                                    {
                                        text: '地藏经讲习 第 2 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/2',
                                    },
                                    {
                                        text: '地藏经讲习 第 3 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/3',
                                    },
                                    {
                                        text: '地藏经讲习 第 4 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/4',
                                    },
                                    {
                                        text: '地藏经讲习 第 5 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/5',
                                    },
                                    {
                                        text: '地藏经讲习 第 6 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/6',
                                    },
                                    {
                                        text: '地藏经讲习 第 7 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/7',
                                    },
                                    {
                                        text: '地藏经讲习 第 8 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/8',
                                    },
                                    {
                                        text: '地藏经讲习 第 9 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/9',
                                    },
                                    {
                                        text: '地藏经讲习 第 10 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/10',
                                    },
                                ],
                            },
                            {
                                text: '11-20',
                                items: [
                                    {
                                        text: '地藏经讲习 第 11 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/11',
                                    },
                                    {
                                        text: '地藏经讲习 第 12 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/12',
                                    },
                                    {
                                        text: '地藏经讲习 第 13 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/13',
                                    },
                                    {
                                        text: '地藏经讲习 第 14 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/14',
                                    },
                                    {
                                        text: '地藏经讲习 第 15 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/15',
                                    },
                                    {
                                        text: '地藏经讲习 第 16 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/16',
                                    },
                                    {
                                        text: '地藏经讲习 第 17 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/17',
                                    },
                                    {
                                        text: '地藏经讲习 第 18 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/18',
                                    },
                                    {
                                        text: '地藏经讲习 第 19 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/19',
                                    },
                                    {
                                        text: '地藏经讲习 第 20 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/20',
                                    },
                                ],
                            },
                            {
                                text: '21-30',
                                items: [
                                    {
                                        text: '地藏经讲习 第 21 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/21',
                                    },
                                    {
                                        text: '地藏经讲习 第 22 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/22',
                                    },
                                    {
                                        text: '地藏经讲习 第 23 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/23',
                                    },
                                    {
                                        text: '地藏经讲习 第 24 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/24',
                                    },
                                    {
                                        text: '地藏经讲习 第 25 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/25',
                                    },
                                    {
                                        text: '地藏经讲习 第 26 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/26',
                                    },
                                    {
                                        text: '地藏经讲习 第 27 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/27',
                                    },
                                    {
                                        text: '地藏经讲习 第 28 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/28',
                                    },
                                    {
                                        text: '地藏经讲习 第 29 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/29',
                                    },
                                    {
                                        text: '地藏经讲习 第 30 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/30',
                                    },
                                ],
                            },
                            {
                                text: '31-40',
                                items: [
                                    {
                                        text: '地藏经讲习 第 31 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/31',
                                    },
                                    {
                                        text: '地藏经讲习 第 32 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/32',
                                    },
                                    {
                                        text: '地藏经讲习 第 33 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/33',
                                    },
                                    {
                                        text: '地藏经讲习 第 34 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/34',
                                    },
                                    {
                                        text: '地藏经讲习 第 35 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/35',
                                    },
                                    {
                                        text: '地藏经讲习 第 36 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/36',
                                    },
                                    {
                                        text: '地藏经讲习 第 37 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/37',
                                    },
                                    {
                                        text: '地藏经讲习 第 38 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/38',
                                    },
                                    {
                                        text: '地藏经讲习 第 39 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/39',
                                    },
                                    {
                                        text: '地藏经讲习 第 40 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/40',
                                    },
                                ],
                            },
                            {
                                text: '41-50',
                                items: [
                                    {
                                        text: '地藏经讲习 第 41 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/41',
                                    },
                                    {
                                        text: '地藏经讲习 第 42 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/42',
                                    },
                                    {
                                        text: '地藏经讲习 第 43 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/43',
                                    },
                                    {
                                        text: '地藏经讲习 第 44 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/44',
                                    },
                                    {
                                        text: '地藏经讲习 第 45 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/45',
                                    },
                                    {
                                        text: '地藏经讲习 第 46 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/46',
                                    },
                                    {
                                        text: '地藏经讲习 第 47 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/47',
                                    },
                                    {
                                        text: '地藏经讲习 第 48 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/48',
                                    },
                                    {
                                        text: '地藏经讲习 第 49 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/49',
                                    },
                                    {
                                        text: '地藏经讲习 第 50 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/50',
                                    },
                                ],
                            },
                            {
                                text: '51-60',
                                items: [
                                    {
                                        text: '地藏经讲习 第 51 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/51',
                                    },
                                    {
                                        text: '地藏经讲习 第 52 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/52',
                                    },
                                    {
                                        text: '地藏经讲习 第 53 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/53',
                                    },
                                    {
                                        text: '地藏经讲习 第 54 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/54',
                                    },
                                    {
                                        text: '地藏经讲习 第 55 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/55',
                                    },
                                    {
                                        text: '地藏经讲习 第 56 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/56',
                                    },
                                    {
                                        text: '地藏经讲习 第 57 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/57',
                                    },
                                    {
                                        text: '地藏经讲习 第 58 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/58',
                                    },
                                    {
                                        text: '地藏经讲习 第 59 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/59',
                                    },
                                    {
                                        text: '地藏经讲习 第 60 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/60',
                                    },
                                ],
                            },
                            // {
                            //     text: '31-40',
                            //     items: Array(10).map((_, index) => ({
                            //         text: String(30 + index + 1),
                            //         link: `/gongzhonghao/jiangji/dizangjing/${
                            //             30 + 10
                            //         }/${30 + index + 1}`,
                            //     })),
                            // },
                        ],
                    },
                    // { text: '问答篇', link: '/gongzhonghao/answer/' },
                    // { text: '十二门论讲记', link: '/gongzhonghao/jiangji/' },
                ],
                link: '/gongzhonghao/shenhe/',
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
