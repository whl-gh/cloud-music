const menuList = [
    {
        title: "推荐",
        items: [
            { text: "发现音乐", icon: "fa fa-music", checked: true },
            { text: "私人FM", icon: "fa fa-podcast", checked: false },
            { text: "视频", icon: "fa fa-video-camera", checked: false },
            { text: "朋友", icon: "fa fa-users", checked: false }
        ]
    },
    {
        title: "我的音乐",
        items: [
            { text: "本地音乐", icon: "fa fa-desktop", checked: false },
            { text: "下载管理", icon: "fa fa-download", checked: false },
            { text: "我的音乐云盘", icon: "fa fa-cloud", checked: false },
            { text: "我的收藏", icon: "fa fa-heart", checked: false }
        ]
    },
    {
        title: "创建的歌单",
        collapse: true,
        items: [
            { text: "我喜欢的音乐", icon: "fa fa-headphones", checked: false },
            { text: "阿黛尔", icon: "fa fa-headphones", checked: false },
            { text: "笑傲江湖", icon: "fa fa-headphones", checked: false }
        ]
    },
    {
        title: "收藏的歌单",
        collapse: true,
        items: [
            { text: "健身房节奏", icon: "fa fa-headphones", checked: false },
            { text: "华语理智|纵有疾风哈撒给", icon: "fa fa-headphones", checked: false },
            { text: "百首华语男声|重温耳畔", icon: "fa fa-headphones", checked: false }
        ]
    }
];

export default menuList