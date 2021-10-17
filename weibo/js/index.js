new Vue({
    el: '#container',
    data: function() {
        return {
            homeList: [{
                    icon: './img/user.svg',
                    title: '我的主页'
                },
                {
                    icon: './img/follows.svg',
                    title: '我的关注'
                },
                {
                    icon: './img/fans.svg',
                    title: '我的粉丝'
                },
                {
                    icon: './img/collect.svg',
                    title: '我的收藏'
                },
                {
                    icon: './img/like.svg',
                    title: '我的赞'
                },
                {
                    icon: './img/setup.svg',
                    title: '我的管理中心'
                },
            ],
            navList: [{
                    icon: './img/home.svg',
                    title: '首页'
                },
                {
                    icon: './img/video.svg',
                    title: '视频'
                },
                {
                    icon: './img/hot.svg',
                    title: '热门'
                },
                {
                    icon: './img/message.svg',
                    title: '消息'
                },
                {
                    icon: '',
                    title: ''
                },
            ],
            actionList: [{
                id: 'edit',
                icon: './img/edit.svg',
                title: '发微博'
            }, {
                id: 'theme',
                icon: './img/theme.svg',
                title: '切换网页配色'
            }, {
                id: 'set',
                icon: './img/set.svg',
                title: '设置'
            }],
            tabList: ['精选', '微博', '相册'],
            user: {
                name: '耿欣悦',
                desc: '人间岁岁年年谁敢说如烟',
                avatar: './img/girl.svg',
                back: './img/back.jpg',
                following: 156,
                followers: 240,
                movies: [{
                    name: '心灵奇旅',
                    cover: './img/xlql.jpg'
                }, {
                    name: '泰坦尼克号',
                    cover: './img/ttnkh.jpg'
                }, {
                    name: '烈日灼心',
                    cover: './img/lrzx.jpg'
                }],
                music: [{
                    cover: './img/fir.jpg'
                }, {
                    cover: './img/sec.jpg'
                }, {
                    cover: './img/thi.jpg'
                }, {
                    cover: './img/fou.jpg'
                }],
                weibo: [{
                        datetime: '10-7 10:21',
                        client: 'iPhone 12',
                        content: '冬天来了，期待下雪'
                    },
                    {
                        datetime: '09-11 20:05',
                        client: 'iPhone 12',
                        content: '我们都曾以为对方的生活是最好的，但是最终发现，人生总会有残缺，而这残缺，让我们完整。-克莉丝汀·汉娜《萤火虫小巷》'
                    }
                ]

            },
            showBox: false,
            inputValue: ''
        }
    },
    methods: {
        buttonClick(type) {
            if (type == 'edit') {
                this.showBox = true;
            }
        },
        deleteWeibo(index) {
            this.user.weibo.splice(index, 1);
        },
        saveWeibo() {
            this.user.weibo.unshift({
                datetime: new Date().toLocaleString(),
                client: 'PC端',
                content: this.inputValue
            })
            this.inputValue = '';
            this.showBox = false;
        }
    }
})