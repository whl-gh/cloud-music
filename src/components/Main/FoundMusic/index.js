import React from "react";
import Bar from "./Bar";
import SlideShow from "./SlideShow";
import recommend from "@/resoure/recommend";
import "./style.scss";

const FoundMusic = ()=>{
    let list = [ "个性推荐", "歌单", "主播电台", "排行榜", "歌手", "最新音乐" ];
    let imgs = recommend.slideshow;
    let index = 0;
    let toggleBar = (e, i)=>{
        index = i;
    }
    return (
        <div className="foundMusic-wrap">
            <Bar index={index} list={list} onClick={toggleBar} />
            <SlideShow imgs={recommend.slideshow} />
        </div>
    );
};

export default FoundMusic;