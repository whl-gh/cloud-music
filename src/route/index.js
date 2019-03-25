const routes = [
    {
        text: "发现音乐",
        icon: "fa fa-music",
        path: "/",///foundMusic
        exact: true,
        component: null
    },
    {
        text: "私人FM",
        icon: "fa fa-podcast",
        path: "/privateFM",
        component: null
    },
    {
        text: "视频",
        icon: "fa fa-video-camera",
        path: "/video",
        component: null
    },
    {
        text: "朋友",
        icon: "fa fa-users",
        path: "/friend",
        component: null
    },
    {
        text: "本地音乐",
        icon: "fa fa-desktop",
        path: "/localMusic",
        component: null
    },
    {
        text: "下载管理",
        icon: "fa fa-download",
        path: "/download",
        component: null
    },
    {
        text: "我的音乐云盘",
        icon: "fa fa-cloud",
        path: "/myMusicBox",
        component: null
    },
    {
        text: "我的收藏",
        icon: "fa fa-heart",
        path: "/myCollections",
        component: null
    },
    {
        text: "创建的歌单",
        icon: "fa fa-headphones",
        path: "/createPlaylist/:id",
        component: null
    },
    {
        text: "收藏的歌单",
        icon: "fa fa-headphones",
        path: "/collectionPlaylists/:id",
        component: null
    }
];

export default routes;