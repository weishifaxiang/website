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
                text: '公众号讲记',
                items: [
                    {
                        text: '地藏菩萨本愿经讲习 上',
                        collapsed: true,
                        items: [
                            {
                                text: '1-10',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 1 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/1',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 2 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/2',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 3 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/3',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 4 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/4',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 5 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/5',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 6 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/6',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 7 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/7',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 8 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/8',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 9 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/9',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 10 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/10/10',
                                    },
                                ],
                            },
                            {
                                text: '11-20',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 11 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/11',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 12 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/12',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 13 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/13',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 14 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/14',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 15 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/15',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 16 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/16',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 17 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/17',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 18 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/18',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 19 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/19',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 20 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/20/20',
                                    },
                                ],
                            },
                            {
                                text: '21-30',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 21 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/21',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 22 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/22',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 23 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/23',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 24 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/24',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 25 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/25',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 26 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/26',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 27 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/27',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 28 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/28',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 29 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/29',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 30 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/30/30',
                                    },
                                ],
                            },
                            {
                                text: '31-40',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 31 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/31',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 32 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/32',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 33 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/33',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 34 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/34',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 35 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/35',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 36 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/36',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 37 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/37',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 38 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/38',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 39 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/39',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 40 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/40/40',
                                    },
                                ],
                            },
                            {
                                text: '41-50',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 41 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/41',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 42 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/42',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 43 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/43',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 44 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/44',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 45 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/45',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 46 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/46',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 47 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/47',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 48 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/48',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 49 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/49',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 50 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/50/50',
                                    },
                                ],
                            },
                            {
                                text: '51-60',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 51 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/51',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 52 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/52',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 53 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/53',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 54 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/54',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 55 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/55',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 56 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/56',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 57 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/57',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 58 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/58',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 59 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/59',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 60 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/60/60',
                                    },
                                ],
                            },
                            {
                                text: '61-70',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 61 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/61',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 62 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/62',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 63 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/63',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 64 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/64',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 65 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/65',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 66 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/66',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 67 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/67',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 68 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/68',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 69 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/69',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 70 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/70/70',
                                    },
                                ],
                            },
                            {
                                text: '71-80',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 71 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/71',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 72 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/72',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 73 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/73',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 74 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/74',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 75 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/75',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 76 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/76',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 77 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/77',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 78 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/78',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 79 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/79',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 80 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/80/80',
                                    },
                                ],
                            },
                            {
                                text: '81-90',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 81 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/81',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 82 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/82',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 83 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/83',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 84 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/84',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 85 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/85',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 86 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/86',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 87 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/87',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 88 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/88',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 89 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/89',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 90 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/90/90',
                                    },
                                ],
                            },
                            {
                                text: '90-100',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 91 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/91',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 92 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/92',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 93 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/93',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 94 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/94',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 95 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/95',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 96 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/96',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 97 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/97',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 98 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/98',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 99 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/99',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 100 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/100/100',
                                    },
                                ],
                            },
                            {
                                text: '100-110',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 101 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/101',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 102 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/102',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 103 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/103',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 104 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/104',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 105 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/105',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 106 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/106',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 107 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/107',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 108 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/108',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 109 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/109',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 110 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/110/110',
                                    },
                                ],
                            },
                            {
                                text: '110-120',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 111 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/111',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 112 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/112',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 113 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/113',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 114 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/114',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 115 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/115',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 116 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/116',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 117 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/117',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 118 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/118',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 119 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/119',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 120 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/120/120',
                                    },
                                ],
                            },
                            {
                                text: '120-130',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 121 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/121',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 122 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/122',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 123 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/123',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 124 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/124',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 125 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/125',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 126 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/126',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 127 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/127',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 128 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/128',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 129 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/129',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 130 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/130/130',
                                    },
                                ],
                            },
                            {
                                text: '130-140',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 131 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/131',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 132 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/132',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 133 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/133',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 134 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/134',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 135 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/135',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 136 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/136',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 137 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/137',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 138 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/138',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 139 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/139',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 140 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/140/140',
                                    },
                                ],
                            },
                            {
                                text: '140-148',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 上 第 141 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/141',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 142 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/142',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 143 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/143',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 144 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/144',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 145 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/145',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 146 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/146',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 147 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/147',
                                    },
                                    {
                                        text: '地藏经讲习 上 第 148 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/148/148',
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
                    {
                        text: '地藏菩萨本愿经讲习 中',
                        collapsed: true,
                        items: [
                            {
                                text: '1-10',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 1 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/1',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 2 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/2',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 3 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/3',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 4 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/4',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 5 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/5',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 6 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/6',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 7 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/7',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 8 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/8',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 9 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/9',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 10 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/10/10',
                                    },
                                ],
                            },
                            {
                                text: '11-20',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 11 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/11',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 12 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/12',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 13 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/13',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 14 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/14',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 15 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/15',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 16 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/16',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 17 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/17',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 18 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/18',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 19 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/19',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 20 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/20/20',
                                    },
                                ],
                            },
                            {
                                text: '21-30',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 21 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/21',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 22 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/22',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 23 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/23',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 24 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/24',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 25 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/25',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 26 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/26',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 27 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/27',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 28 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/28',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 29 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/29',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 30 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/30/30',
                                    },
                                ],
                            },
                            {
                                text: '31-40',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 31 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/31',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 32 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/32',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 33 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/33',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 34 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/34',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 35 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/35',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 36 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/36',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 37 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/37',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 38 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/38',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 39 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/39',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 40 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/40/40',
                                    },
                                ],
                            },
                            {
                                text: '41-50',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 41 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/41',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 42 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/42',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 43 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/43',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 44 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/44',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 45 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/45',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 46 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/46',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 47 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/47',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 48 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/48',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 49 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/49',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 50 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/50/50',
                                    },
                                ],
                            },
                            {
                                text: '51-60',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 51 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/51',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 52 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/52',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 53 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/53',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 54 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/54',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 55 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/55',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 56 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/56',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 57 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/57',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 58 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/58',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 59 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/59',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 60 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/60/60',
                                    },
                                ],
                            },
                            {
                                text: '61-70',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 61 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/61',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 62 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/62',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 63 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/63',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 64 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/64',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 65 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/65',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 66 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/66',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 67 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/67',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 68 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/68',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 69 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/69',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 70 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/70/70',
                                    },
                                ],
                            },
                            {
                                text: '71-80',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 71 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/71',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 72 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/72',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 73 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/73',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 74 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/74',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 75 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/75',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 76 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/76',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 77 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/77',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 78 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/78',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 79 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/79',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 80 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/80/80',
                                    },
                                ],
                            },
                            {
                                text: '80-88',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 中 第 81 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/81',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 82 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/82',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 83 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/83',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 84 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/84',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 85 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/85',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 86 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/86',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 87 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/87',
                                    },
                                    {
                                        text: '地藏经讲习 中 第 88 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/middle/88/88',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: '地藏菩萨本愿经讲习 下',
                        collapsed: true,
                        items: [
                            {
                                text: '1-10',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 1 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/1',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 2 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/2',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 3 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/3',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 4 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/4',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 5 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/5',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 6 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/6',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 7 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/7',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 8 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/8',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 9 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/9',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 10 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/10/10',
                                    },
                                ],
                            },
                            {
                                text: '11-20',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 11 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/11',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 12 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/12',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 13 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/13',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 14 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/14',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 15 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/15',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 16 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/16',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 17 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/17',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 18 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/18',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 19 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/19',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 20 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/20/20',
                                    },
                                ],
                            },
                            {
                                text: '21-30',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 21 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/21',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 22 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/22',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 23 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/23',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 24 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/24',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 25 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/25',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 26 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/26',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 27 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/27',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 28 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/28',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 29 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/29',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 30 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/30/30',
                                    },
                                ],
                            },
                            {
                                text: '31-40',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 31 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/31',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 32 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/32',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 33 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/33',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 34 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/34',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 35 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/35',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 36 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/36',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 37 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/37',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 38 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/38',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 39 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/39',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 40 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/40/40',
                                    },
                                ],
                            },
                            {
                                text: '41-50',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 41 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/41',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 42 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/42',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 43 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/43',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 44 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/44',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 45 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/45',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 46 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/46',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 47 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/47',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 48 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/48',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 49 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/49',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 50 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/50/50',
                                    },
                                ],
                            },
                            {
                                text: '51-60',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 51 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/51',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 52 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/52',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 53 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/53',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 54 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/54',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 55 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/55',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 56 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/56',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 57 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/57',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 58 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/58',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 59 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/59',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 60 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/60/60',
                                    },
                                ],
                            },
                            {
                                text: '61-70',
                                collapsed: true,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 61 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/61',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 62 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/62',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 63 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/63',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 64 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/64',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 65 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/65',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 66 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/66',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 67 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/67',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 68 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/68',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 69 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/69',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 70 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/70/70',
                                    },
                                ],
                            },
                            {
                                text: '71-80',
                                collapsed: false,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 71 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/71',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 72 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/72',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 73 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/73',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 74 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/74',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 75 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/75',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 76 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/76',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 77 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/77',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 78 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/78',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 79 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/79',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 80 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/80/80',
                                    },
                                ],
                            },
                            {
                                text: '81-85',
                                collapsed: false,
                                items: [
                                    {
                                        text: '地藏经讲习 下 第 81 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/85/81',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 82 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/85/82',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 83 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/85/83',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 84 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/85/84',
                                    },
                                    {
                                        text: '地藏经讲习 下 第 85 讲',
                                        link: '/gongzhonghao/jiangji/dizangjing/lower/85/85',
                                    },
                                ],
                            },
                        ],
                    },
                    // { text: '问答篇', link: '/gongzhonghao/answer/' },
                    {
                        text: '十二门论讲记',
                        collapsed: false,
                        items: [
                            {
                                text: '1-10',
                                collapsed: true,
                                items: [
                                    {
                                        text: '第一讲 开篇',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/1',
                                    },
                                    {
                                        text: '第二讲 总论 上',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/2',
                                    },
                                    {
                                        text: '第三讲 总论 中',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/3',
                                    },
                                    {
                                        text: '第四讲 总论 下',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/4',
                                    },
                                    {
                                        text: '第五讲 论文结构总述 一',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/5',
                                    },
                                    {
                                        text: '第六讲 论文结构总述 二',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/6',
                                    },
                                    {
                                        text: '第七讲 论文结构总述 三',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/7',
                                    },
                                    {
                                        text: '第八讲 论文结构总述 四',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/8',
                                    },
                                    {
                                        text: '第九讲 序分 一',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/9',
                                    },
                                    {
                                        text: '第十讲 序分 二',
                                        link: '/gongzhonghao/jiangji/shiermenlun/10/10',
                                    },
                                ],
                            },
                            {
                                text: '11-20',
                                collapsed: true,
                                items: [
                                    {
                                        text: '第十一讲 序分 三',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/11',
                                    },
                                    {
                                        text: '第十二讲 序分 四',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/12',
                                    },
                                    {
                                        text: '第十三讲 观因缘门 释题',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/13',
                                    },
                                    {
                                        text: '第十四讲 观因缘门 因缘所生法',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/14',
                                    },
                                    {
                                        text: '第十五讲 观因缘门 释偈',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/15',
                                    },
                                    {
                                        text: '第十六讲 观因缘门 破四种妄执',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/16',
                                    },
                                    {
                                        text: '第十七讲 观因缘门 通二谛之理',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/17',
                                    },
                                    {
                                        text: '第十八讲 观因缘门 发观',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/18',
                                    },
                                    {
                                        text: '第十九讲 观因缘门 略破内外二法',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/19',
                                    },
                                    {
                                        text: '第二十讲 观因缘门 破外法明无生',
                                        link: '/gongzhonghao/jiangji/shiermenlun/20/20',
                                    },
                                ],
                            },
                            {
                                text: '21-30',
                                collapsed: true,
                                items: [
                                    {
                                        text: '第二十一讲 观因缘门 破内法明无生',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/21',
                                    },
                                    {
                                        text: '第二十二讲 观因缘门 结齐列明三空',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/22',
                                    },
                                    {
                                        text: '第二十三讲 观有果无果门 长行发起',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/23',
                                    },
                                    {
                                        text: '第二十四讲 观有果无果门 偈本正破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/24',
                                    },
                                    {
                                        text: '第二十五讲 观有果无果门 释因中先有果不生-生不生门前五破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/25',
                                    },
                                    {
                                        text: '第二十六讲 观有果无果门 释因中先有果不生-生不生门后二破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/26',
                                    },
                                    {
                                        text: '第二十七讲 观有果无果门 释因中先有果不生-变不变门前三破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/27',
                                    },
                                    {
                                        text: '第二十八讲 观有果无果门 释因中先有果不生-变不变门后一破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/28',
                                    },
                                    {
                                        text: '第二十九讲 观有果无果门 释因中先有果不生-果粗细门-夺破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/29',
                                    },
                                    {
                                        text: '第三十讲 观有果无果门 释因中先有果不生-果粗细门-后三破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/30/30',
                                    },
                                ],
                            },
                            {
                                text: '31-40',
                                collapsed: true,
                                items: [
                                    {
                                        text: '第三十一讲 观有果无果门 释因中先有果不生-因果不成门-前四破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/31',
                                    },
                                    {
                                        text: '第三十二讲 观有果无果门 释因中先有果不生-异果门-前二破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/32',
                                    },
                                    {
                                        text: '第三十三讲 观有果无果门 释因中先有果不生-异果门-后二破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/33',
                                    },
                                    {
                                        text: '第三十四讲 观有果无果门 释因中先无果不生-正破-救破-破救前一',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/34',
                                    },
                                    {
                                        text: '第三十五讲 观有果无果门 释因中先无果不生-正破-救破-破救中四',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/35',
                                    },
                                    {
                                        text: '第三十六讲 观有果无果门 释因中先无果不生-正破-救破-破救后二',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/36',
                                    },
                                    {
                                        text: '第三十七讲 观有果无果门 结齐诸法-有为无为人我皆空',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/37',
                                    },
                                    {
                                        text: '第三十八讲 观缘门-释观缘门',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/38',
                                    },
                                    {
                                        text: '第三十九讲 观缘门-长行发起',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/39',
                                    },
                                    {
                                        text: '第四十讲 观缘门-略释及广释',
                                        link: '/gongzhonghao/jiangji/shiermenlun/40/40',
                                    },
                                ],
                            },
                            {
                                text: '41-50',
                                collapsed: true,
                                items: [
                                    {
                                        text: '第四十一讲 观缘门-广释四缘',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/41',
                                    },
                                    {
                                        text: '第四十二讲 观缘门-就缘求果无',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/42',
                                    },
                                    {
                                        text: '第四十三讲 观缘门-举非缘决破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/43',
                                    },
                                    {
                                        text: '第四十四讲 观缘门-结齐诸法',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/44',
                                    },
                                    {
                                        text: '第四十五讲 观相门-释相',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/45',
                                    },
                                    {
                                        text: '第四十六讲 观相门-释开观相门',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/46',
                                    },
                                    {
                                        text: '第四十七讲 观相门-总破相-总明为无为无相',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/47',
                                    },
                                    {
                                        text: '第四十八讲 观相门-总破相-释生住灭',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/48',
                                    },
                                    {
                                        text: '第四十九讲 观相门-总破相-别明有为法无相',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/49',
                                    },
                                    {
                                        text: '第五十讲 观相门-别破相-破展转家义',
                                        link: '/gongzhonghao/jiangji/shiermenlun/50/50',
                                    },
                                ],
                            },
                            {
                                text: '51-60',
                                collapsed: false,
                                items: [
                                    {
                                        text: '第五十一讲 观相门-别破相-破不展转家义',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/51',
                                    },
                                    {
                                        text: '第五十二讲 观相门-破不展转家义-破譬说-后三破',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/52',
                                    },
                                    {
                                        text: '第五十三讲 观相门-破不展转家义-破法说',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/53',
                                    },
                                    {
                                        text: '第五十四讲 观相门-结齐诸法',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/54',
                                    },
                                    {
                                        text: '第五十五讲 观有相无相门-释观有相无相门',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/55',
                                    },
                                    {
                                        text: '第五十六讲 观有相无相门-门体',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/56',
                                    },
                                    {
                                        text: '第五十七讲 观有相无相门-结齐',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/57',
                                    },
                                    {
                                        text: '第五十八讲 观一异门-释观一异门',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/58',
                                    },
                                    {
                                        text: '第五十九讲 观一异门-释偈',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/59',
                                    },
                                    {
                                        text: '第六十讲 观一异门-救破-略遮前破-相可相一',
                                        link: '/gongzhonghao/jiangji/shiermenlun/60/60',
                                    },
                                ],
                            },
                        ],
                    },
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
