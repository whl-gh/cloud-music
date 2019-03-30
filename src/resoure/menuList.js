const menuList = [
    {
        title: "推荐",
        items: [
            { text: "发现音乐", icon: "fa fa-music", to: "/foundMusic" },// /foundMusic
            { text: "私人FM", icon: "fa fa-podcast", to: "/privateFM" },
            { text: "视频", icon: "fa fa-video-camera", to: "/video" },
            { text: "朋友", icon: "fa fa-users", to: "/friend" }
        ]
    },
    {
        title: "我的音乐",
        items: [
            { text: "本地音乐", icon: "fa fa-desktop", to: "/localMusic" },
            { text: "下载管理", icon: "fa fa-download", to: "/download" },
            { text: "我的音乐云盘", icon: "fa fa-cloud", to: "/myMusicBox" },
            { text: "我的收藏", icon: "fa fa-heart", to: "/myCollections" }
        ]
    },
    {
        title: "创建的歌单",
        collapse: true,
        items: [
            { text: "我喜欢的音乐", icon: "fa fa-headphones", to: "/createPlaylist/cj-11111111" },
            { text: "阿黛尔", icon: "fa fa-headphones", to: "/createPlaylist/cj-22222222" },
            { text: "笑傲江湖", icon: "fa fa-headphones", to: "/createPlaylist/cj-33333333" }
        ]
    },
    {
        title: "收藏的歌单",
        collapse: true,
        items: [
            { text: "健身房节奏", icon: "fa fa-headphones", to: "/collectionPlaylists/sc-11111111" },
            { text: "华语理智|纵有疾风哈撒给", icon: "fa fa-headphones", to: "/collectionPlaylists/sc-22222222" },
            { text: "百首华语男声|重温耳畔", icon: "fa fa-headphones", to: "/collectionPlaylists/sc-33333333" }
        ]
    }
];

export default menuList