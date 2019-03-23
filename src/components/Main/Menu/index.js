import React from "react";
import "./style.scss";

const Menu = ()=>(
    <div className="menu-wrap">
        <h3 className="menu-header">
            <span className="menu-header-title">推荐</span>
        </h3>
        <ul className="menu-content">
            <li className="menu-item active">
                <i className="fa fa-music menu-item-icon"></i>
                <span>发现音乐</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-podcast menu-item-icon"></i>
                <span>私人FM</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-video-camera menu-item-icon"></i>
                <span>视频</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-users menu-item-icon"></i>
                <span>朋友</span>
            </li>
        </ul>
        <h3 className="menu-header">
            <span className="menu-header-title">我的音乐</span>
        </h3>
        <ul className="menu-content">
            <li className="menu-item">
                <i className="fa fa-desktop menu-item-icon"></i>
                <span>本地音乐</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-download menu-item-icon"></i>
                <span>下载管理</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-cloud menu-item-icon"></i>
                <span>我的音乐云盘</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-heart menu-item-icon"></i>
                <span>我的收藏</span>
            </li>
        </ul>
        <h3 className="menu-header">
            <span className="menu-header-title">创建的歌单</span>
            <span className="menu-header-tools">
                <i className="fa fa-plus-circle menu-header-plus"></i>
                <i className="fa fa-chevron-down menu-header-chevron"></i>
            </span>
        </h3>
        <ul className="menu-content">
            <li className="menu-item">
                <i className="fa fa-headphones menu-item-icon"></i>
                <span>我喜欢的音乐</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-headphones menu-item-icon"></i>
                <span>阿黛尔</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-headphones menu-item-icon"></i>
                <span>笑傲江湖</span>
            </li>
        </ul>
        <h3 className="menu-header">
            <span className="menu-header-title">收藏的歌单</span>
            <span className="menu-header-tools">
                <i className="fa fa-plus-circle menu-header-plus"></i>
                <i className="fa fa-chevron-down menu-header-chevron"></i>
            </span>
        </h3>
        <ul className="menu-content">
            <li className="menu-item">
                <i className="fa fa-headphones menu-item-icon"></i>
                <span>健身房节奏</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-headphones menu-item-icon"></i>
                <span>华语理智|纵有疾风哈撒给</span>
            </li>
            <li className="menu-item">
                <i className="fa fa-headphones menu-item-icon"></i>
                <span>百首华语男声|重温耳畔</span>
            </li>
        </ul>
    </div>
);

export default Menu;
