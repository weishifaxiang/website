import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: '内院看门人',
    description: '内院看门人讲记, 问答等相关文档',
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
    },
    lastUpdated: true,
});
