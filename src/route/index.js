import React from "react";
import FoundMusic from "@/components/Main/FoundMusic";
import Recommend from "@/components/Main/FoundMusic/Recommend";

const routes = [
    {
        text: "发现音乐",
        icon: "fa fa-music",
        path: "/foundMusic",// /foundMusic  exact: true,
        component: FoundMusic,
        children: [
            { text: "个性推荐", path: "/recommend", component: Recommend },// recommend
            { text: "歌单", path: "/songList", component: (preop)=><p>2</p> },
            { text: "主播电台", path: "/radio", component:  (preop)=><p>3</p> },
            { text: "排行榜", path: "/rankingList", component:  (preop)=><p>4</p> },
            { text: "歌手", path: "/singer", component:  (preop)=><p>5</p> },
            { text: "最新音乐", path: "/latestMusic", component:  (preop)=><p>6</p> }
        ]
    },
    {
        text: "私人FM",
        icon: "fa fa-podcast",
        path: "/privateFM",
        component: function(props){ return <p>私人FM</p>}
    },
    {
        text: "视频",
        icon: "fa fa-video-camera",
        path: "/video",
        component: function(props){ return <p>视频</p>}
    },
    {
        text: "朋友",
        icon: "fa fa-users",
        path: "/friend",
        component: function(props){ return <p>朋友</p>}
    },
    {
        text: "本地音乐",
        icon: "fa fa-desktop",
        path: "/localMusic",
        component: function(props){ return <p>本地音乐</p>}
    },
    {
        text: "下载管理",
        icon: "fa fa-download",
        path: "/download",
        component: function(props){ return <p>下载管理</p>}
    },
    {
        text: "我的音乐云盘",
        icon: "fa fa-cloud",
        path: "/myMusicBox",
        component: function(props){ return <p>我的音乐云盘</p>}
    },
    {
        text: "我的收藏",
        icon: "fa fa-heart",
        path: "/myCollections",
        component: function(props){ return <p>我的收藏</p>}
    },
    {
        text: "创建的歌单",
        icon: "fa fa-headphones",
        path: "/createPlaylist",
        component: function(props){ return <p>创建的歌单</p>}
    },
    {
        text: "收藏的歌单",
        icon: "fa fa-headphones",
        path: "/collectionPlaylists",// /:id
        component: function(props){ return <p>收藏的歌单</p>}
    }
];

export default routes;